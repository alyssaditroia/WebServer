# HTTP SERVER

import socket
import typing
import os
import mimetypes

HOST = "127.0.0.1"
PORT = 8080
RESPONSE = b"""\
HTTP/1.1 200 OK
Content-type: text/html
Content-length: 15

<h1>Hello!</h1>""".replace(b"\n", b"\r\n")

BAD_REQ_RESPONSE = b"""\
HTTP/1.1 400 Bad Request
Content-type: text/plain
Content-length: 11

Bad Request""".replace(b"\n", b"\r\n")

NOT_FOUND_RESPONSE =b"""\
HTTP/1.1 404 Not Found
Content-type: text/plain
Content-Length: 9

Not Found""".replace(b"\n", b"\r\n")

METHOD_NOT_ALLOWED_RESPONSE = b"""\
HTTP/1.1 405 Method Not Allowed
Content-type: text/plain
Content-length: 17

Method Not Allowed""".replace(b"\n", b"\r\n")

SERVER_ROOT = os.path.abspath("www")

FILE_RESPONSE_TEMPLATE = """\
HTTP/1.1 200 OK
Content-type: {content_type}
Content-length: {content_length}

""".replace("\n", "\r\n")

#File Serving
def serve_file(sock: socket.socket, path: str) -> None:
    if path == "/":
        path = "/index.html"
    
    abspath = os.path.normpath(os.path.join(SERVER_ROOT, path.lstrip("/")))
    if not abspath.startswith(SERVER_ROOT):
        sock.sendall(NOT_FOUND_RESPONSE)
        return
    try:
        with open(abspath, "rb") as f:
            stat = os.fstat(f.fileno())
            content_type, encoding = mimetypes.guess_type(abspath)
            if content_type is None: 
                content_type = "application/octet-stream"

            if encoding is not None:
                content_type+= f"; charset={encoding}"
            
            response_headers = FILE_RESPONSE_TEMPLATE.format(
                content_type=content_type,
                content_length=stat.st_size,
            ).encode("ascii")
            
            sock.sendall(response_headers)
            sock.sendfile(f)
    except FileNotFoundError:
        sock.sendall(NOT_FOUND_RESPONSE)
        return

#Define Request
class Request(typing.NamedTuple):
    method: str
    path: str
    headers: typing.Mapping[str, str]

    @classmethod
    def from_socket(cls, sock: socket.socket) -> "Request":
        lines = iter_lines(sock)
        try: 
            request_line = next(lines).decode("ascii")
        except StopIteration:
            raise ValueError("Request line missing.")
        try: 
            method, path, _ = request_line.split(" ")
        except ValueError:
            raise ValueError(f"Malformed request line {request_line!r}.")
        
        headers = {}
        for line in lines:
            try:
                name, _, value = line.decode("ascii").partition(": ")
                headers[name.lower()] = value.lstrip()
            except ValueError:
                raise ValueError(f"Malformed header line {line!r}.")
        return cls(method=method.upper(), path=path, headers=headers)    


# Read and parse incoming requests

def iter_lines(sock: socket.socket, bufsize: int = 16_384) -> typing.Generator[bytes, None, bytes]:
    buff = b""
    # Reads data in chunks the size of the buffer
    while True: 
        data = sock.recv(bufsize)
        if not data:
            return b""
        # Joins data in buff
        buff+= data
        while True: 
            try: 
                i = buff.index(b"\r\n")
                line, buff = buff[:i], buff[i + 2:]
                if not line: 
                    return buff
                yield line
            except IndexError: 
                break


# socket.socket creates TCP sockets
with socket.socket() as server_soc:
    server_soc.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    server_soc.bind((HOST, PORT))
    server_soc.listen(0)
    print(f"Listening on {HOST}:{PORT}...")

    while True: 
        client_soc, client_addr = server_soc.accept()
        print(f"Received connection from {client_addr}.")
        with client_soc:
            try:
                request = Request.from_socket(client_soc)
                if request.method != "GET":
                    client_soc.sendall(METHOD_NOT_ALLOWED_RESPONSE)
                    continue
                serve_file(client_soc, request.path)
            except Exception as e:
                print(f"Failed to parse request: {e}")
                client_soc.sendall(BAD_REQ_RESPONSE)
        


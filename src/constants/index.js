import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    swift,
    html,
    c,
    reactjs,
    java,
    tailwind,
    nodejs,
    python,
    git,
    cpp,
    sql,
    meta,
    starbucks,
    allied,
    asu,
    amendola,
    tesla,
    shopify,
    carrent,
    ascii,
    refi,
    helpsys,
    jobit,
    tripguide,
    linux,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full-Stack Developer",
      icon: web,
    },
    {
      title: "Cybersecurity",
      icon: mobile,
    },
    {
      title: "AI/ML",
      icon: backend,
    },
    {
      title: "Data Science",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Swift",
      icon: swift,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Javascript",
      icon: javascript,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Linux",
      icon: linux,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "SQL",
      icon: sql,
    },
  ];
  
  const experiences = [
    {
      title: "Computer Science Student",
      company_name: "Arizona State University",
      icon: asu,
      iconBg: "#ffffff",
      date: "August 2023 - Current",
      points: [
        "Operating Systems, Principles of Programming Languages (compiler design), Theoretical Computer Science",
        "Data Structures and Algorithms, Principles of Mobile App Development, Software Engineering, Information Assurance",
        "Computer Architecture and Assembly Language, Programming Languages, Computing Ethics, Probability & Statistics for Engineers, Applied Linear Algebra",
        "Digital Design Fundamentals, Object-Oriented Programming, Discrete Math, Calculus III, Physical Science",
      ],
    },
    {
      title: "Mortgage Loan Processor",
      company_name: "Allied First Bank",
      icon: allied,
      iconBg: "#ffffff",
      date: "Sept 2020 - Aug 2023",
      points: [
        "Consistently exceeded goals, funding over 600 loans in 2021 through critical problem-solving skills and exceptional teamwork.",
        "Spearheaded team strategy and workflow by creating and managing databases, communicating with customers, and utilizing data to continuously improve performance.",
        "Optimized team productivity and efficiency by analyzing metrics and devising solutions to streamline workflows.",
      ],
    },
    {
      title: "Marketing and PR Specialist",
      company_name: "Amendola Communications",
      icon: amendola,
      iconBg: "#ffffff",
      date: "Mar 2019 - Jun 2020",
      points: [
        "Successfully developed and executed digital marketing campaigns across various channels, resulting in a significant 15% increase in website traffic and a 20% increase in lead generation.",
        "Conducted in-depth performance analysis of Ad campaigns, SEO, Keywords, and company websites, ensuring maximum effectiveness for the given budget.",
        "Utilized data-driven insights to effectively target and optimize social media and advertisement campaigns, leading to improved reporting and campaign effectiveness.",
      ],
    },
    {
      title: "BS Marketing & BS Entrepreneurship",
      company_name: "Arizona State University",
      icon: asu,
      iconBg: "#ffffff",
      date: "Aug 2015 - May 2019",
      points: [
        "Human Communication, Computer Applications and Information Technology, Macroeconomics, Business Analysis",
        "Microeconomics, Business Statistics, Psychology, Business Writing, Business Law & Ethics, Org & Mgt Leadership",
        "Supply Chain Management, Organizational Behavior, Applied Marketing & Management Leadership, Venture Capital, International Business",
        "Value Creation, Marketing Research, Business Model Development, Creating Digital Experiences, Finance",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Stock Forecasting ML",
      description:
        "Web-based stock analysis and prediction platform leveraging machine learning to evaluate historical stock data and predict future trends.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Next.js",
          color: "green-text-gradient",
        },
        {
          name: "SQLite",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/alyssaditroia/ML_Stock_Analysis",
    },
    {
      name: "ASU Help Article Platform",
      description:
        "Role-based help system built for CSE 360 students, instructors, and admins.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "JavaFX",
          color: "green-text-gradient",
        },
        {
          name: "H2 Database",
          color: "pink-text-gradient",
        },
      ],
      image: helpsys,
      source_code_link: "https://github.com/alyssaditroia/CSE360",
    },
    {
      name: "Image to ASCII Image Converter",
      description:
        "A program that processes images and converts them into ASCII art using Singular Value Decomposition (SVD).",
      tags: [
        {
          name: "cpp",
          color: "blue-text-gradient",
        },
        {
          name: "opencv",
          color: "green-text-gradient",
        },
        {
          name: "svd",
          color: "pink-text-gradient",
        },
      ],
      image: ascii,
      source_code_link: "https://github.com/alyssaditroia/JPG_TO_ASCII",
    },    {
      name: "RefiGenius",
      description:
        "A mobile application for consumers to make more informed decisions on their mortgage refinancing options.",
      tags: [
        {
          name: "swift",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "RESTapi",
          color: "pink-text-gradient",
        },
      ],
      image: refi,
      source_code_link: "https://github.com/alyssaditroia/RefiGenius",
    },
  ];
  
  export { services, technologies, experiences, projects };
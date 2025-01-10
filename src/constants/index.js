import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    flask,
    html,
    css,
    reactjs,
    python,
    gamemaker,
    nodejs,
    c,
    blender,
    solidworks,
    autocad,
    waterlooRocketryLogo,
    bramptonLogo,
    enlightenLogo,
    kumonLogo,
    portfolio,
    spacecraft,
    robot,
    crisis,
    kicad,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "Embedded Systems",
      icon: mobile,
    },
    {
      title: "Game Development",
      icon: backend,
    },
    {
      title: "Artificial Intelligence",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS/Tailwind",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Flask",
      icon: flask,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Python 3",
      icon: python,
    },
    {
      name: "GameMaker",
      icon: gamemaker,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "C++",
      icon: c,
    },
    {
      name: "Blender",
      icon: blender,
    },
    {
      name: "SolidWORKS",
      icon: solidworks,
    },
    {
      name: "AutoCAD",
      icon: autocad,
    },
    {
      name: "KiCAD",
      icon: kicad,
    },
  ];
  
  const experiences = [
    {
      title: "STEM Instructor",
      company_name: "City of Brampton",
      icon: bramptonLogo, // Replace with the actual icon reference
      iconBg: "#E6DEDD",
      date: "Mar 2024 - Mar 2024",
      points: [
        "Taught Lego Mindstorms and Vex Robotics using Python for students aged 10-12.",
        "Facilitated group projects where students built and programmed robots, with over 90% success rate.",
        "Provided individual support to students struggling with STEM concepts, using personalized techniques for measurable improvement.",
      ],
    },
    {
      title: "Co-Founder/Co-President",
      company_name: "Enlighten",
      icon: enlightenLogo, // Replace with the actual icon reference
      iconBg: "#383E56",
      date: "Nov 2022 - Apr 2024",
      points: [
        "Co-founded Enlighten to provide high school students with greater focus and opportunities in research.",
        "Empowered young researchers by increasing opportunities in the research field.",
        "Organized initiatives to showcase and share students' research work publicly.",
      ],
    },
    {
      title: "Instructor",
      company_name: "Kumon North America, Inc.",
      icon: kumonLogo, // Replace with the actual icon reference
      iconBg: "#E6DEDD",
      date: "Oct 2022 - Aug 2024",
      points: [
        "Taught students mathematics concepts from grades K-12.",
        "Managed and updated a database containing all students' homework data.",
        "Planned future work for students based on database trends.",
        "Trained new staff joining the center.",
      ],
    },
    {
      title: "Controls Engineer",
      company_name: "Waterloo Rocketry",
      icon: waterlooRocketryLogo, // Replace with the actual icon reference
      iconBg: "#383E56",
      date: "Oct 2024 - Present",
      points: [
        "Designed and implemented control systems for the rocket's various subsystems to ensure optimal performance during launches.",
        "Collaborated with cross-functional teams to integrate controls with mechanical and electrical systems.",
        "Conducted simulations and real-world tests to validate control strategies under launch conditions.",
      ],
    },
  ];
  
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Personal Portfolio",
      description:
        "My personal portfolio website.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "node.js",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "blue-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/saswath-06/portfolioWebsite",
    },
    {
      name: "Crisis Compass",
      description:
        "Web application that analyzes natural disaster data from an API from a company called ReliefWeb. The website ranks the data based on severity and displays it for a first responder to better respond to more urgent crises. The website also has the ability to webscrape given a URL and give a severity value to the crisis described in the website.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
      ],
      image: crisis,
      source_code_link: "https://github.com/saswath-06/Crisis-Compass/tree/main",
    },
    {
      name: "Colourific",
      description:
        "Robot that sorts objects based on colour using a multi-sensor system.",
      tags: [
        {
          name: "robotc",
          color: "blue-text-gradient",
        },
        {
          name: "c++",
          color: "green-text-gradient",
        },
      ],
      image: robot,
      source_code_link: "https://github.com/saswath-06/mechatronics-robot-c-class-project-1A",
    },
    {
      name: "Spacecraft Override",
      description:
        "Retro RPG game using Game Maker Studio 2 and GML (Game Maker Language). All sprites were made using blender.",
      tags: [
        {
          name: "GML",
          color: "blue-text-gradient",
        },
        {
          name: "blender",
          color: "green-text-gradient",
        },
      ],
      image: spacecraft,
      source_code_link: "https://github.com/saswath-06/SPACECRAFT_OVERRIDE",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    postgres,
    udaan,
    galeree
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
      title: "Full-Stack Engineer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Unreal Engine Developer",
      icon: backend,
    },
    {
      title: "Graphic Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "postgres",
      icon: postgres
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },

  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Galeree",
      icon: galeree,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Designed and built a social network app for visual artists  using Node.js and React.",
        "Created the backend infrastructure and database schema, as well as developing the frontend user interface and implementing key features such as user authentication, image uploading, and several social features aimed at artists.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Increase in 34% of the user experience quality comparing to Art Station based on a panel of 52 artists.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Udaan",
      icon: udaan,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Worked with a very passionate team of 6 and implemented demanding git workflow and CI/CD pipelines.",
        "Implemented several collaborative tools inside this virtual school solution for remote learning",
        "Implemented external tools from APIs or building them from scratch using TypeScript.",
        "Used Web RTC for the video call functionality as well as Go to create a server for the token generation system.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "wAllahi, Yacine is the best. Can't thank him enough. ",
      name: "Josh McCarthy",
      designation: "Lead Instructor",
      company: "Codeworks",
      image: "https://media.licdn.com/dms/image/D4E03AQGJUxaBxqyetg/profile-displayphoto-shrink_800_800/0/1680281352218?e=1686787200&v=beta&t=mkpG6odIyr56W1mB-RD8BxOFTpBYyt9HPT4wDqDe75E",
    },
    {
      testimonial:
        "Free all the members that got bagged",
      name: "Seb Ringrose",
      designation: "CTO",
      company: "TheSebSite",
      image: "https://media.licdn.com/dms/image/D4E03AQHAkM5VBioq1g/profile-displayphoto-shrink_800_800/0/1667568649484?e=1686787200&v=beta&t=8T5NoVCpMpdd0xFkV5zchnOOl4nqftqUGVxy6J8DQUw",
    },
    {
      testimonial:
        "He made me reconsider how I cook my pastas",
      name: "Alessio Nannipieri",
      designation: "Software Engineer",
      company: "Viaplay Group",
      image: "https://media.licdn.com/dms/image/D4E03AQFIxupODeMXJQ/profile-displayphoto-shrink_800_800/0/1676118865103?e=1686787200&v=beta&t=UG4PYyJlvvrh3prVgGjfYmADYsR8qxDVQ6gHVa77otI",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
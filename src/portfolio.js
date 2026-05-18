/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Twinkle Jaiswal",
  title: "Twinkle here",
  subTitle: emoji(
    "Full Stack Developer specializing in Next.js 15 and Creative UI/UX. Experienced in building scalable EdTech solutions and obsessed with Design Engineering principles. Turning complex requirements into seamless digital experiences—and providing the soundtrack to do it to. 🎧"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1yeEFsw_I2xcp-Fccq6NJOqJRJ48GGbzv/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dashboard",
  linkedin: "https://www.linkedin.com/in/twinklejaiswal8485/",
  gmail: "twinklejaiswal8485@gmail.com",
  // facebook: "https://www.facebook.com/profile.php?id=100057655892175",
  // Instagram and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "FULL STACK DEVELOPER, OPEN TO LEARNING NEW TECHNOLOGIES AND BUILDING PROJECTS",
  skills: [
    emoji(
      "⚡Full Stack Developer & Design Engineer with a focus on high-performance web architectures. Specialist in Next.js 15, TypeScript, and Framer Motion, with a track record of building scalable EdTech platforms and creative UI/UX showcases."
    ),
    emoji(
      "⚡ Currently exploring the intersection of AI optimization (LoRA/Quantization) and immersive storytelling."
    ),
    emoji(
      "⚡ Trying my hands on new projects and collaborating with others to increase my knowledge horizons"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "next.js",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Greater Noida Institute of Technology",
      logo: require("./assets/images/College logo.png"),
      subHeader: "B.Tech - Information Technology",
      duration: "November 2019 - June 2023",
      desc: "CGPA: 7.50"
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Java", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "JavaScript",
      progressPercentage: "70%"
    },

    {
      Stack: "Frontend Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend Development",
      progressPercentage: "85%"
    },
    {
      Stack: "Database Management System",
      progressPercentage: "85%"
    },
    {
      Stack: "Computer Networks",
      progressPercentage: "80%"
    },
    {
      Stack: "Operating System",
      progressPercentage: "90%"
    },
    {
      Stack: "System Design",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Developer",
      company: "Scalong AI",
      companylogo: require("./assets/images/ibosstech_logo.jpeg"),
      date: "September 2024 – January 2025",
      desc: "Frontend Developer focused on building high-performance web applications using Next.js and React. I spearheaded the transition to Server-Side Rendering (SSR) to improve SEO and load times, while also architecting a reusable component library. Beyond UI development, I refactored frontend automation workflows to ensure seamless deployments and 99% uptime for core features.",

      descBullets: [
        "Architected and integrated scalable product features including SSO and PDF generation using Next.js Server Components; optimized data hydration to increase processing speed by 8%.",
        "Engineered end-to-end testing workflows, restructuring automation pipelines for enhanced deployment reliability.",
        "Engineered real-time monitoring workflows using Chart-base64 to visualize log data and diagnose service failures; utilized data-driven insights to optimize Next.js application performance and maintain high-fidelity stability across development environments."
      ]
    },
    // {
    //   role: "Full Stack Developer",
    //   company: "Jethi Tech Solutions",
    //   companylogo: require("./assets/images/jethiTech.jpeg"),
    //   date: "June 2023 – August 2023",
    //   desc: "Worked as a Full Stack developer majorly working on the frontend of various websites throughout the time period",
    //   descBullets: [
    //     "Created the entire frontend of over 7+ different product and service based websites till now with ReactJS, NextJS, TailwindCSS and other libraries for better user engagement.",
    //     "Orchestrated seamless backend and frontend integration of website, resulting in a 40% reduction in page load time and a 25% increase in user engagement and conversion rates."
    //   ]
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/novelverse.png"),
      projectName: "Novel Verse",
      projectDesc: "NovelVerse is a high-performance e-commerce platform built for book enthusiasts, focusing on a seamless user journey from discovery to checkout.",


      footerLink: [
        {
          name: "Visit Website",
          url: "https://novel-verse-book.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/chaistory.png"),
      projectName: "Chai Story",
      projectDesc: "Bulit story-telling chai website with creatively showcase animation with the help of Framer Motion and Shadcn UI, featuring seamless motion-driven storytelling and optimized performance for a premium user journey",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://the-chai-story.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/underrated coder.webp"),
      projectName: "Underrated Coder",
      projectDesc: "Engineered a responsive, production-ready EdTech platform using Next.js stack; optimized core web vitals and system workflows to deliver a 99% performance rating and seamless user experience.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://underratedcoder.com"
        }
      ]
    },
    // {
    //   image: require("./assets/images/nftwarranty.png"),
    //   projectName: "NFT Warranty System",
    //   projectDesc: "A digital warranty system that uses NFTs",
    //   footerLink: [
    //     {
    //       name: "Visit Github",
    //       url: " "
    //     }
    //   ]
    // },
    // {
    //   image: require("./assets/images/webcrawler.avif"),
    //   projectName: "Web Crawler",
    //   projectDesc: "A web crawler to crawl through pages and index them",
    //   footerLink: [
    //     {
    //       name: "Visit Github",
    //       url: " "
    //     }
    //   ]
    // },
    // {
    //   image: require("./assets/images/ratelimiter.jpg"),
    //   projectName: "Rate Limiter",
    //   projectDesc: "Limit the number of requests to your public APIs/Services",
    //   footerLink: [
    //     {
    //       name: "Visit Github",
    //       url: " "
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

// const achievementSection = {
//   title: emoji("Achievements And Certifications 🏆 "),
//   subtitle:
//     "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

//   achievementsCards: [
//     {
//       title: "Introduction",
//       subtitle: "Qualified for the Project round of Flipkart Grid 2022",
//       image: require("./assets/images/Flipkart.jpeg"),
//       imageAlt: "flipkart grid",
//       footerLink: [
//         {
//           name: "Certification",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
//         }
//       ]
//     },
//     {
//       title: "Web Developer Bootcamp",
//       subtitle: "Completed Web Developer Bootcamp from Udemy",
//       image: require("./assets/images/web.jpeg"),
//       imageAlt: "Google Assistant Action Logo",
//       footerLink: [
//         {
//           name: "Certification",
//           url: "https://www.udemy.com/certificate/UC-2bba7ca7-d5d1-43f2-bb18-d9b770069e70/"
//         }
//       ]
//     },

//     {
//       title: "Complete MySQL Course",
//       subtitle: "Completed complete MySQL course from Udemy",
//       image: require("./assets/images/MySQL.jpeg"),
//       imageAlt: "MySQL",
//       footerLink: [
//         {
//           name: "Certification",
//           url: "https://www.udemy.com/certificate/UC-00b1a07f-5430-4f29-9b4d-ab243888b3b8/"
//         }
//       ]
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Blogs Section

// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write about things that I find fascinating!",
//   displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
//   blogs: [
//     {
//       url: "https://kitrakiar73.medium.com/rate-limiters-how-to-make-one-1a0010b6874d",
//       title: "Rate Limiters-How to build one!",
//       description:
//         "Learn what rate limiters are? Principle behind their working, and how to build one!"
//     },
//     {
//       url: "https://kitrakiar73.medium.com/url-shortner-how-to-build-one-f458fecf038f",
//       title: "URL Shortners-How to build one?",
//       description: "Build your own URL shortner like tinyurl."
//     },
//     {
//       url: "https://kitrakiar73.medium.com/web-crawlers-how-to-build-one-89bf65716518",
//       title: "Web Crawlers-How to build one?",
//       description:
//         "See why web crawlers are so important, their applications and implementation."
//     }
//     // {
//     //   url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//     //   title: "Why REACT is The Best?",
//     //   description:
//     //     "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     // }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9129303088",
  email_address: "twinklejaiswal8485@gmail.com"
};

// Twitter Section

// const twitterDetails = {
//   userName: "twinklejaiswal", //Replace "twitter" with your twitter username without @
//   display: false // Set true to display this section, defaults to false
// };

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  // achievementSection,
  // blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  isHireable
};

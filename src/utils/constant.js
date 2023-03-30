import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  laravel,
  html,
  css,
  reactjs,
  java,
  tailwind,
  nodejs,
  python,
  materialui,
  bootstrap,
  deploy,
  git,
  canva,
  csharp,
  meta,
  a2i,
  windows,
  //shopify,
  //carrent,
  gptclone,
  tripguide,
  threejs,
  youtube,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Desktop Developer",
    icon: backend,
  },
  {
    title: "Canva Designer",
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
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "csharp",
    icon: csharp,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
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
    name: "canva",
    icon: canva,
  },
  {
    name: "materialui",
    icon: materialui,
  },
];

const experiences = [
  {
    title: "Engineers Assistant and Desktop Developer",
    company_name: "Application Informatiques et Industrielles, Yaounde",
    icon: a2i,
    iconBg: "#383E56",
    date: "July 2022 - September 2022",
    points: [
      "Standardize and organize the data in excel files.",
      "Analyze bundle of data on weighted vehicles.",
      "Build up software that will analyze vehicles data and give out statistical results.",
      "Developing and maintaining desktop applications using Python and other related technologies.",
      "Collaborating other developers to create high-quality products.",
      "Implementing responsive design and ensuring resize compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Install and Maintain softwares on customer's machines.",
    company_name: "Windows Magicien, Dschang",
    icon: windows,
    iconBg: "#E6DEDD",
    date: "January 2021 - September 2021",
    points: [
      "Boot Unix distribution or windows operating systems in customer’s computers.",
      "Setup hardware and install software for customers.",
      "Computer maintenance",
      "Perform troubleshoot activities on customer’s computers.",
      "Dual boot operating stystem.",
    ],
  },
  /* {
                title: "Web Developer",
                company_name: "Shopify",
                icon: shopify,
                iconBg: "#383E56",
                date: "Jan 2022 - Jan 2023",
                points: [
                  "Developing and maintaining web applications using React.js and other related technologies.",
                  "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
                  "Implementing responsive design and ensuring cross-browser compatibility.",
                  "Participating in code reviews and providing constructive feedback to other developers.",
                ],
              },
              {
                title: "Full stack Developer",
                company_name: "Meta",
                icon: meta,
                iconBg: "#E6DEDD",
                date: "Jan 2023 - Present",
                points: [
                  "Developing and maintaining web applications using React.js and other related technologies.",
                  "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
                  "Implementing responsive design and ensuring cross-browser compatibility.",
                  "Participating in code reviews and providing constructive feedback to other developers.",
                ],
              }, */
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
    name: "DTUBER, a Youtube Clone",
    description:
      "Web-based platform that allows users to online stream," +
      "search for  videos, and give them the possibility to download each video easy ",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "RapidAPI",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/tchoumi313",
    deploy_link: "https://youtube-2-donald.netlify.app/",
  },
  {
    name: "ChatGPT clone",
    description:
      "ChatGPT  clone done using the openAI API , Just ask any question and a get clear answer",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "RestAPI",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: gptclone,
    source_code_link: "https://github.com/tchoumi313",
    deploy_link: "https://ddtech-chat-ai.vercel.app/",
  },
  {
    name: "StreamingWay",
    description:
      "A simple React and Material UI web app giving information about movies . This is serve by a RestAPI",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "RestAPI",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/tchoumi313",
    deploy_link: "https://youtube-2-donald.netlify.app/",
  },
  {
    name: "VacanceGenieJeune",
    description:
      "It is a website design to help young people discover their career paths. Through fun activities and quizzes, user cen explore their interests, learn about different job roles, and find out what it takes to become successful in their chosen field ",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "HTML5 CSS JAVASCRIPT BOOTSTRAP",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/tchoumi313",
    deploy_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };

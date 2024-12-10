import { RxGithubLogo, RxTwitterLogo, RxLinkedinLogo } from "react-icons/rx";

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
  },
  {
    skill_name: "Express.js",
    image: "express.png",
  },
  {
    skill_name: "Django",
    image: "django.png",
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
  },
] as const;

export const MOBILE_APPS_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Webflow",
    image: "webflow.png",
    width: 50,
    height: 50,
  },
] as const;

export const PROJECTS = [
  {
    title: "Job posting web application",
    alt_text:
      "Screenshot of job posting web application developed with Django.",
    description:
      "A job posting system that is user-friendly and uses Django, the popular Python framework. The system includes a user role-based authentication feature enabling clients to post jobs and freelancers to apply for opportunities seamlessly. Additionally, I have integrated Channels and Websockets to facilitate real-time chat functionality that enables enhanced communication between clients and freelancers.",
    image: "/projects/project-1.png",
    link: "https://github.com/isaacmain254/Workpay",
    tech: "",
  },
  {
    title: "Sacco management system",
    alt_text:
      "Screenshot of a SACCO management system web application, built with React and Django.",
    description:
      "Web application built with React and Django, designed to streamline SACCO operations. The system provides solution for managing finances, client information, and loan processes. Key features include: Role-based authentication, Financial management, Customer management, Loan management and Reporting.",
    image: "/projects/project-2.png",
    link: "https://github.com/isaacmain254/open-sacco",
    tech: "",
  },
  {
    title: "Crownlinks website",
    alt_text: "Screenshot of a Reactjs portfolio website.",
    description:
      "This project marked the beginning of my journey in web development. As my first website, it was a hands-on experience where I built foundational skills, from crafting a clean layout to implementing basic interactive features. This project sparked my passion for coding, setting the stage for a career in creating impactful, user-friendly websites.",
    image: "/projects/project-3.png",
    link: "https://isaacmaina.netlify.app/",
    tech: "",
  },
  {
    title: "Coffee shop landing page",
    alt_text: "Custom Webflow website for a coffee shop by a Kenyan developer.",
    description:
      "I created a modern and interactive Webflow website with a sleek design that is easy to use and responsive across all devices.",
    image: "/projects/webflow-1.png",
    link: "https://coffee-shop-61e2ee.webflow.io/",
    tech: "webflow",
  },
  {
    title: "Global payment Webflow website",
    alt_text: "Custom Webflow landing page for a Fintech company",
    description:
      "Global Pay is a payment system website developed using Webflow. This project focused on designing and creating a sleek, user-friendly site aimed at boosting sales and enhancing customer engagement.",
    image: "/projects/webflow-2.png",
    link: "https://global-pay-africa.webflow.io/",
    tech: "webflow",
  },
  {
    title: "Digital marketing agency",
    alt_text: "Custom Webflow website digital marketing agency",
    description:
      "A sleek, user-friendly digital marketing agency site designed to highlight services, drive client engagement, and demonstrate effective use of modern web design and responsive functionality.",
    image: "/projects/Digital-marketing-agency.png",
    link: "https://digital-marketing-agency-e36151.webflow.io/",
    tech: "webflow",
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/isaacmain254/my-website",
};

export const EXPERIENCES = [
  {
    title: "Frontend Software Developer",
    company_name: "Upscale Technologies",
    iconBg: "#FFFFFF",
    date: "Feburuary 2024 - September 2024",
    points: [
      "Developed and maintained front-end features for enterprise resource planning (ERP) applications using Vue.js, TypeScript, and GraphQL to enhance user experience.",
      "Successfully integrated Vue.js with GraphQL API to improve data fetching efficiency and application performance.",
      "Collaborated with senior developers on architectural decisions, ensuring scalability and maintainability of software systems",
      "Conducted code reviews, provided constructive feedback, and enforced coding standards to maintain high code quality",
    ],
  },
  {
    title: "Fullstack Software Developer - Freelance",
    company_name: "",
    iconBg: "#ffffff",
    date: "September 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Solo web application development also open to collborative development",
    ],
  },
];

export const SOCIALS = [
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://x.com/isaacmain3",
    "aria-label": "Connect with me on Twitter",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/isaac-maina-wambui/",
    "aria-label": "Connect with me on LinkedIn",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/isaacmain254",
    "aria-label": "See all my projects on GitHub",
  },
] as const;

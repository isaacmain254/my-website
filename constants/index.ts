import { RxGithubLogo, RxTwitterLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
export interface ProjectsProps {
  image: string;
  title: string;
  description: string;
  link: string;
  source: string;
  alt_text: string;
  technologies: Array<string>;
}

export interface FeaturedProjectsProps {
  title: string;
  description: string;
  technologies: Array<string>;
  label: string;
}

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 20,
    height: 20,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 20,
    height: 20,
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
    width: 20,
    height: 20,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 20,
    height: 20,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 20,
    height: 20,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 20,
    height: 20,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 20,
    height: 20,
  },
  {
    skill_name: "NextJs",
    image: "next.png",
    width: 20,
    height: 20,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 20,
    height: 20,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 20,
    height: 20,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 20,
    height: 20,
  },
  {
    skill_name: "React Native",
    image: "react-native.png",
    width: 70,
    height: 70,
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

export const DEVOPS = [
  {
    skill_name: "Docker",
    image: "docker-icon.svg",
  },
  {
    skill_name: "AWS",
    image: "aws.svg",
  },
  {
    skill_name: "GitHub Actions",
    image: "github-actions.svg",
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
    skill_name: "Canva",
    image: "canva.png",
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

export const PROJECTS: ProjectsProps[] = [
  {
    title: "Men's shoes ecommerce",
    alt_text: "Screenshot of a e-commerce web application, built with Nextjs",
    description:
      " A fully functional e-commerce platform built with Next.js, Tailwind CSS, MongoDB, and Stripe. Features include a responsive UI, product browsing, shopping cart functionality, and seamless payment integration with Stripe.",
    image: "/projects/men-shoes-ecommerce.png",
    link: "https://menshoes.vercel.app/",
    source: "https://github.com/isaacmain254/mongodb-nextjs-ecommerce",
    technologies: [
      "Nextjs",
      "TailwindCSS",
      "Stripe",
      "MongoDB",
      "Redux",
      "Cloudinary",
    ],
  },
  {
    title: "Sacco management system",
    alt_text:
      "Screenshot of a SACCO management system web application, built with React and Django.",
    description:
      "Web application built with React and Django, designed to streamline SACCO operations. The system provides solution for managing finances, client information, and loan processes. Key features include: Role-based authentication, Financial management, Customer management, Loan management and Reporting.",
    image: "/projects/project-2.png",
    link: "https://open-sacco.vercel.app/",
    source: "https://github.com/isaacmain254/open-sacco",
    technologies: ["React", "Django", "TypeScript", "Tailwind"],
  },
  {
    title: "Job posting web application",
    alt_text:
      "Screenshot of job posting web application developed with Django.",
    description:
      "A job posting system that is user-friendly and uses Django, the popular Python framework. The system includes a user role-based authentication feature enabling clients to post jobs and freelancers to apply for opportunities seamlessly. Additionally, I have integrated Channels and Websockets to facilitate real-time chat functionality that enables enhanced communication between clients and freelancers.",
    image: "/projects/project-1.png",
    link: "https://mysite-wm0g.onrender.com",
    source: "https://github.com/isaacmain254/Workpay",
    technologies: [
      "Django",
      "JavaScript",
      "Bootstrap",
      "Channels",
      "Websockets",
    ],
  },
  {
    title: "Django E-commerce website",
    alt_text:
      "Screenshot of an e-commerce web application developed with Django.",
    description:
      "This is an e-commerce website built with Django. It allows users to browse products, add them to the cart, and purchase them using Stripe. The website also includes an administration interface that allows the site owner to add, update, and delete products.",
    image: "/projects/django-ecommerce.png",
    link: "https://github.com/isaacmain254/ecommerce/blob/main/README.md",
    source: "https://github.com/isaacmain254/ecommerce",
    technologies: [
      "Django",
      "JQuery",
      "HTML",
      "CSS",
      "Stripe",
      "Celery",
      "RabbitMQ",
    ],
  },
  {
    title: "Crownlinks website",
    alt_text: "Screenshot of a Reactjs portfolio website.",
    description:
      "This project marked the beginning of my journey in web development. As my first website, it was a hands-on experience where I built foundational skills, from crafting a clean layout to implementing basic interactive features. This project sparked my passion for coding, setting the stage for a career in creating impactful, user-friendly websites.",
    image: "/projects/project-3.png",
    link: "https://isaacmaina.netlify.app/",
    source: "https://github.com/isaacmain254/software-consultant-website",
    technologies: ["React", "CSS"],
  },
  {
    title: "Coffee shop landing page",
    alt_text: "Custom Webflow website for a coffee shop by a Kenyan developer.",
    description:
      "I created a modern and interactive Webflow website with a sleek design that is easy to use and responsive across all devices.",
    image: "/projects/webflow-1.png",
    link: "https://coffee-shop-61e2ee.webflow.io/",
    source:
      "https://preview.webflow.com/preview/coffee-shop-61e2ee?utm_medium=preview_link&utm_source=designer&utm_content=coffee-shop-61e2ee&preview=0f90e39b132a5cd1aec112b5fc4aea6a&workflow=preview",
    technologies: ["Webflow"],
  },
  {
    title: "Global payment Webflow website",
    alt_text: "Custom Webflow landing page for a Fintech company",
    description:
      "Global Pay is a payment system website developed using Webflow. This project focused on designing and creating a sleek, user-friendly site aimed at boosting sales and enhancing customer engagement.",
    image: "/projects/webflow-2.png",
    link: "https://global-pay-africa.webflow.io/",
    source:
      "https://preview.webflow.com/preview/global-pay-africa?utm_medium=preview_link&utm_source=designer&utm_content=global-pay-africa&preview=f41f545016de4f8e60596fe69d6e308a&workflow=preview",
    technologies: ["Webflow"],
  },
  {
    title: "Digital marketing agency",
    alt_text: "Custom Webflow website digital marketing agency",
    description:
      "A sleek, user-friendly digital marketing agency site designed to highlight services, drive client engagement, and demonstrate effective use of modern web design and responsive functionality.",
    image: "/projects/Digital-marketing-agency.png",
    link: "https://digital-marketing-agency-e36151.webflow.io/",
    source:
      "https://preview.webflow.com/preview/digital-marketing-agency-e36151?utm_medium=preview_link&utm_source=designer&utm_content=digital-marketing-agency-e36151&preview=7148326e9091867843b376cd3152fcfa&workflow=preview",
    technologies: ["Webflow"],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "/#about-me",
  },
  {
    title: "Skills",
    link: "/#skills",
  },
  {
    title: "Projects",
    link: "/#projects",
  },
  {
    title: "Blogs",
    link: "/#blogs",
  },
  {
    title: "Contact Me",
    link: "/#contact-me",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/isaacmain254/my-website",
  fork: "https://github.com/isaacmain254/my-website/fork",
};

export const EXPERIENCES = [
  {
    title: "Fullstack Software Developer - Freelance",
    company_name: "",
    iconBg: "#ffffff",
    date: "December 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Solo web application development also open to collaborative development",
    ],
  },
  {
    title: "Frontend Software Developer",
    company_name: "Upscale Technologies",
    iconBg: "#FFFFFF",
    date: "February 2024 - September 2024",
    points: [
      "Developed and maintained front-end features for enterprise resource planning (ERP) applications using Vue.js, TypeScript, and GraphQL to enhance user experience.",
      "Successfully integrated Vue.js with GraphQL API to improve data fetching efficiency and application performance.",
      "Collaborated with senior developers on architectural decisions, ensuring scalability and maintainability of software systems",
      "Conducted code reviews, provided constructive feedback, and enforced coding standards to maintain high code quality",
    ],
  },
];

export const SOCIALS = [
  {
    name: "Whatsapp",
    icon: FaWhatsapp,
    link: "https://wa.me/254748923894",
    "aria-label": "Connect with me on Whatsapp",
  },
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
  {
     name: "Medium",
    icon: SiMedium,
    link: "https://medium.com/@isaacmain72",
    "aria-label": "See all my articles on Medium",
  }
] as const;


export const FEATURED_PROJECTS: FeaturedProjectsProps[] = [
  {
    title: "Upscale ERP",
    description:
      "Contributed to the development of a comprehensive ERP system by implementing front-end features using Vue.js, TypeScript, and GraphQL. Enhanced data fetching efficiency and application performance through GraphQL integration, and collaborated on architectural decisions to ensure scalability and maintainability.",
    technologies: ["Vue.js", "TypeScript", "GraphQL", "PWA", "TailwindCSS"],
    label: "Production",
  },
  {
    title: "Cocktailzen",
    description:
      "A web application that leverages AI to generates cocktail recipes based on the selected ingredients.",
    technologies: ["Django", "NextJs", "OpenAI API", "TailwindCSS", "Docker"],
    label: "Client",
  }
];

export const FEATURED_BLOGS = [
  {
    title: "Build embeddable chat widget using React and vite",
    description:
      "A comprehensive guide on building embeddable widget that can be embedded on any website",
    technologies: ["React", "Vite", "TailwindCSS"],
    publisher: "Medium",
    link: "https://medium.com/@isaacmain72/build-your-own-chatbot-widget-using-react-and-vite-ee6c3e2d96d0"
  },
 {
    title: "A Step-by-Step Guide to Building Subscription Payments in Next.js with Stripe",
    description:
      "A comprehensive guide on building subscription billing system in Next.js using Stripe",
    technologies: ["Next.js", "Stripe", "Typescript"],
    publisher: "Medium",
    link: "https://medium.com/@isaacmain72/a-step-by-step-guide-to-building-subscription-payments-in-next-js-with-stripe-1f53208caf6a"
  },
   {
    title: "JSON Web Tokens (JWT): A Deep Dive into Modern Authentication",
    description:
      "A break down on how JWT works, common mistakes and best practices to follow.",
    technologies: ["JSON Web Token"],
    publisher: "Medium",
    link: "https://medium.com/@isaacmain72/json-web-tokens-jwt-a-deep-dive-into-modern-authentication-3962939914e5"
  },
];

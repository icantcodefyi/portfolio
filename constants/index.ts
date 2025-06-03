interface Project {
  name: string;
  slug: string;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
    source?: string;
  };
  urls: {
    githubUrl?: string;
    liveUrl?: string;
    [key: string]: string | undefined;
  };
  description: string;
  tags: string[];
}

export const Projects: Project[] = [
  {
    name: "invoicely",
    slug: "invoicely",
    image: {
      url: "/invoicely.png",
      width: 400,
      height: 200,
      alt: "Invoicely - Create Beautiful & Professional Invoices"
    },
    urls: {
      liveUrl: "https://invoicely.gg/",
      githubUrl: "https://github.com/legions-developer/invoicely"
    },
    description: "Invoicely is a simple and easy to use invoice generator where you can create beautiful and professional invoices in minutes. ~ Proudly OSS",
    tags: [
      "Next.js",
      "Typescript",
      "Pdfjs"
    ]
  },
  {
    name: "cattype",
    slug: "cattype",
    image: {
      url: "/cattype.webp",
      width: 400,
      height: 200,
      alt: "CatType - A Modern Typing Practice App"
    },
    urls: {
      liveUrl: "https://cattype.live/",
      githubUrl: "https://github.com/icantcodefyi/cattype"
    },
    description: "A modern, customizable typing practice application featuring multiple themes, coding snippets, and real-time statistics. Built with Next.js and TypeScript, it offers various difficulty levels and programming language-specific practice modes.",
    tags: [
      "Next.js",
      "TypeScript",
      "Typing Practice",
      "Themes",
      "Code Snippets",
      "Tailwind CSS"
    ]
  },
  {
    name: "autodiagram",
    slug: "autodiagram",
    image: {
      url: "/autodiagram.webp",
      width: 400,
      height: 200,
      alt: "AutoDiagram - AI Powered Diagram Generation"
    },
    urls: {
      liveUrl: "https://autodiagram.com/",
      githubUrl: "https://github.com/icantcodefyi/diagram"
    },
    description: "An AI-powered diagram generation tool that transforms text descriptions into professional diagrams. Supports 20+ diagram types including flowcharts, ER diagrams, architecture maps, and sequence diagrams with intelligent suggestions and error prevention.",
    tags: [
      "AI",
      "Diagram Generation",
      "Next.js",
      "TypeScript",
      "SVG",
      "SaaS"
    ]
  },
  
  {
    name: "getaresume",
    slug: "getaresume",
    image: {
      url: "/getaresume.png",
      width: 400,
      height: 200,
      alt: "GetaResume"
    },
    urls: {
      liveUrl: "https://getaresu.me/"
    },
    description: "A resume to portfolio website tool that allows you to create a web resume in minutes.",
    tags: ["Resume", "PDF", "View", "Portfolio"]
  },
  {
    name: "buildaresume",
    slug: "buildaresume",
    image: {
      url: "/buildaresume.png",
      width: 400,
      height: 200,
      alt: "BuildaResume"
    },
    urls: {
      liveUrl: "https://buildaresume.vercel.app/"
    },
    description: "A resume builder that allows you to create a resume in minutes based off your linkedin and github profiles.",
    tags: ["Resume", "PDF", "View", "Portfolio"]
  },
  {
    name: "school results",
    slug: "school-results",
    image: {
      url: "/lkpsresult.png",
      width: 400,
      height: 200,
      alt: "School Results"
    },
    description: "An app that generates results for a pre-primary school.",
    urls: {
      liveUrl: "https://lkps.ani.ink/",
      githubUrl: "https://github.com/icantcodefyi/school-results"
    },
    tags: [
      "Education",
      "TypeScript",
      "Next.Js",
      "PDFME",
      "Serverless",
      "Tailwind Css"
    ]
  }, 
  {
    "name": "linkedin alignment chart",
    "slug": "linkedin-chart",
    "image": {
      "url": "/linkedin.png",
      "width": 400,
      "height": 200,
      "alt": "Linkedin Alignment Chart"
    },
    "description": "Create D&D-style alignment charts for LinkedIn users. Place users on a Lawful-Chaotic and Good-Evil grid based on AI analysis.",
    "urls": {
      "liveUrl": "https://linkedin-alignment-chart.vercel.app/",
      "githubUrl": "https://github.com/icantcodefyi/linkedin-alignment-chart"
    },
    tags: ["LinkedIn", "Next.js", "Tailwind CSS", "Vercel AI SDK", "React", "TypeScript"]
  },
  {
    name: "glanza labs",
    slug: "glanza-labs",
    image: {
      url: "/glanza.png",
      width: 400,
      height: 200,
      alt: "Glanza Labs"
    },
    description: "Beautifully designed and developed landing page including app for Glanza Labs.",
    urls: {
      liveUrl: "https://www.glanza.org/"
    },
    tags: [
      "Landing Page",
      "NextAuth",
      "Next.Js",
      "Tailwind Css",
      "PostgreSQL"
    ]
  },  
  {
    name: "nexus visualize",
    slug: "nexus-visualize",
    image: {
      url: "/nexusdashboard.png",
      width: 400,
      height: 200,
      alt: "Nexus Visualize"
    },
    description: "AI Dashboard Generator is an open-source dashboard generator based on Next.js and OpenAI's GPT-3 technology. The tool allows users to feed existing tables or datasets, and from there, it understands the intent of the table and generates a visual representation of the data.",
    urls: {
      liveUrl: "https://dashboard.aniruddh.tech",
      githubUrl: "https://github.com/AnuPlayz/nexus-dashboard"
    },
    tags: [
      "AI",
      "Next.js",
      "OpenAI",
      "GPT-3.5",
      "Data Visualization",
      "CSV"
    ]
  },  
  {
    name: "nexus events",
    slug: "nexus-events",
    image: {
      url: "/nexusevents.png",
      width: 400,
      height: 200,
      alt: "Nexus Events",
    },
    description:
      "A event management nft ticketing dapp made using PolygonId, The Graph and Scroll",
    urls: {
      liveUrl: "https://nexus-events.vercel.app/",
      githubUrl: "https://github.com/orgs/NexusTech-India/repositories"
    },
    tags: [
      "Solidity",
      "Hardhat",
      "Typescript",
      "Next.js",
      "PolygonId",
      "TheGraph",
      "Scroll.io",
    ],
  },
  {
    name: "nexus read",
    slug: "nexus-read",
    image: {
      url: "/nexusread.png",
      alt: "NexusRead",
      width: 400,
      height: 200,
    },
    urls: {
      githubUrl: "https://github.com/AnuPlayz/nexus-read",
      liveUrl: "https://www.youtube.com/watch?v=5FMkSz6AF-0"
    },
    description:"A manga hosting web application for hosting your own manga and showcase that to the world!",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "NextAuth",
      "Prisma",
      "MongoDB",
      "Imagga"
    ],
  },
  {
    name: "citronics",
    description:
      "An official event website for college fest made with html css and vanilla js",
    slug: "citronics",
    urls: {
      liveUrl: "https://citronics.netlify.app/",
    },
    image: {
      url: "/citronics.png",
      width: 400,
      height: 200,
      alt: "Citronics",
    },
    tags: [
      "HTML5",
      "CSS3",
      "Javascript",
      "Nodejs",
      "ParticleJs",
      "Nodejs",
    ],
  },
  {
    name: "investment bot",
    slug: "investment-bot",
    urls: {
      githubUrl: "https://github.com/AnuPlayz/investment-bot",
    },
    image: {
      url: "/investment.png",
      alt: "Investment app",
      width: 400,
      height: 200,
    },
    description: "A discord bot for discord.gg/paisa ( investment server ) built using discord.js and TypeScript.",
    tags: ["TypeScript", "Discord.js", "Node.js"],
  },
  {
    name: "animax",
    slug: "animax",
    urls: {
      githubUrl: "https://github.com/AnuPlayz/animax",
    },
    tags: ["Express", "MongoDB", "Typescript", "Javascript", "Node.js"],
    description: "Backend for an anime website + a scraper which gets all data of anime from websites like aniwatch.to .",
    image: {
      url: "/animax.png",
      width: 400,
      height: 200,
      alt: "React Cli",
    },
  },
];

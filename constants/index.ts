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
    name: "GetaResume",
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
    name: "BuildaResume",
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
    name: "Glanza Labs",
    slug: "glanza-labs",
    image: {
      url: "/pfp.jpg",
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
    name: "Nexus Visualize",
    slug: "nexus-visualize",
    image: {
      url: "/visualize.jpg",
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
    name: "School Results",
    slug: "school-results",
    image: {
      url: "/results.ico",
      width: 400,
      height: 200,
      alt: "School Results"
    },
    description: "An app that generates results for a pre-primary school.",
    urls: {
      liveUrl: "https://results-lkps.vercel.app/",
      githubUrl: "https://github.com/AnuPlayz/school-results"
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
    name: "Nexus Notes",
    slug: "nexus-notes",
    image: {
      url: "/notes.png",
      width: 400,
      height: 200,
      alt: "Nexus Notes"
    },
    description: "A note-taking Chrome extension: taking notes on the web with their context.",
    urls: {
      githubUrl: "https://github.com/AnuPlayz/jugaad-hacks"
    },
    tags: [
      "Chrome Extension",
      "TypeScript",
      "Vue.js",
      "Tailwind CSS",
      "Quill"
    ]
  },
  {
    name: "Nexus Events",
    slug: "nexus-events",
    image: {
      url: "/nexusevents.webp",
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
    name: "Nexus Read",
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
    name: "Citronics",
    description:
      "An official event website for college fest made with html css and vanilla js",
    slug: "citronics",
    urls: {
      liveUrl: "https://citronics.netlify.app/",
    },
    image: {
      url: "/icon.webp",
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
    name: "Investment Bot",
    slug: "investment-bot",
    urls: {
      githubUrl: "https://github.com/AnuPlayz/investment-bot",
    },
    image: {
      url: "/investment.webp",
      alt: "Investment app",
      width: 400,
      height: 200,
    },
    description: "A discord bot for discord.gg/paisa ( investment server ) built using discord.js and TypeScript.",
    tags: ["TypeScript", "Discord.js", "Node.js"],
  },
  {
    name: "ANS Logistics",
    slug: "ans",
    urls: {
      liveUrl: "https://ani-logistics.vercel.app/",
    },
    image: {
      url: "/ans.png",
      alt: "Fluxt",
      width: 400,
      height: 200,
    },
    description: "A website created for an logistics service ANS Logistics",
    tags: ["HTML5", "CSS3", "Javascript", "TypeScript", "TailwindCSS", "ReactIcons"],
  },
  {
    name: "Record Warden",
    slug: "recordwarden",
    urls: {
      liveUrl: "https://recordwarden.vercel.app/",
      githubUrl: "https://github.com/AnuPlayz/recordwarden-frontend"
    },
    tags: ["Next.Js", "Firebase", "NextAuth", "Solidity", "Typescript", "Hardhat", "Polygon"],
    description: "A website created for handling of legal documents and storing them on blockchain ( web3 )",
    image: {
      url: "/warden.jpg",
      alt: "recordwarden",
      width: 400,
      height: 200,
    },
  },
  {
    name: "Animax",
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
  {
    name: "Little Kids Planet",
    slug: "lkps",
    image: {
      url: "/lkps.png",
      width: 400,
      height: 200,
      alt: "Little Kids Planet School",
    },
    description:
      "A website for my mom's pre primary school built by me",
    urls: {
      liveUrl: "https://littlekidsplanet.com/",
    },
    tags: [
      "Nextjs",
      "HTML",
      "CSS",
      "Javascript",
    ],
  },
];
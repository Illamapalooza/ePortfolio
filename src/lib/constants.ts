export const siteConfig = {
  name: "Julius Baliling",
  title: "Software Engineer",
  description:
    "Full-stack developer specializing in React, Next.js, and modern web technologies",
  url: "https://juliusbaliling.com",
  email: "juliusbaliling25@gmail.com",
  links: {
    github: "https://github.com/Illamapalooza",
    linkedin: "https://www.linkedin.com/in/juliusbaliling",
    instagram: "https://www.instagram.com/julio.ll",
    facebook: "https://www.facebook.com/dagreatjulio",
  },
};

export const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export const projects = [
  {
    title: "Nurture Your Leads",
    description:
      "A SaaS CRM Platform, featuring lead management, deal tracking, pipeline visualization, and team collaboration tools.",
    company: "Nurture Your Leads",
    type: "Professional",
    link: "https://www.nurtureyourleads.com",
    thumbnail: "/companies/nyl-photo.png",
    images: [
      "/companies/nyl-photo.png",
      "/companies/nyl-photo-2.png",
      "/companies/nyl-photo-3.png",
    ],
  },
  {
    title: "Humanlike",
    description:
      "AI-powered chatbot platform that deploys intelligent business assistants on Facebook Messenger. Features natural conversation flow, automated booking systems, order management, and third-party integrations to provide 24/7 customer support with human-like interactions.",
    company: "Humanlike",
    type: "Professional",
    link: "https://www.humanlike.bot",
    thumbnail: "/companies/humanlike-photo.png",
    images: [
      "/companies/humanlike-photo.png",
      "/companies/humanlike-photo-2.png",
    ],
  },
  {
    title: "Memor",
    description:
      "A mobile note taking app with AI-powered search utilizing RAG",
    tech: [
      "React Native",
      "Expo",
      "Supabase",
      "Express",
      "Node.js",
      "PostgreSQL",
      "OpenAI",
    ],
    company: "Startup with Hostari Labs",
    type: "Professional",
    thumbnail: "/companies/memor-photo1.png",
    images: ["/companies/memor-photo1.png", "/companies/memor-photo2.png"],
  },
  {
    title: "Visual Note",
    description:
      "AI-powered note taking app for transforming images into efficient notes",
    tech: ["Next.js 14", "Tailwind CSS", "Supabase", "tRPC", "React Query"],
    type: "Personal",
    thumbnail: "/companies/visual-note-photo.png",
    images: ["/companies/visual-note-photo.png"],
  },
];

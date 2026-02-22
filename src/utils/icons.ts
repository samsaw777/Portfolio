// ──────────────────────────────────────────────────────────────────────────────
//  Skills Data  –  drop this into your utils/icons.ts (or wherever you keep it)
//  Icon URLs pulled from https://cdn.jsdelivr.net/gh/devicons/devicon/icons/
//  and https://skillicons.dev  (both free, no API key needed)
// ──────────────────────────────────────────────────────────────────────────────

export type Skill = {
  url: string;
  desc: string;
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    skills: [
      {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        desc: "JavaScript",
      },
      {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        desc: "Python",
      },
      {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        desc: "HTML",
      },
      {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        desc: "CSS",
      },
      {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        desc: "TypeScript",
      },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        desc: "React",
      },
      {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        desc: "Next.js",
      },
      {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        desc: "Redux",
      },
      {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        desc: "Express.js",
      },
      {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        desc: "Node.js",
      },
      {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        desc: "Tailwind CSS",
      },
      {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
        desc: "PyTorch",
      },
      {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
        desc: "Numpy",
      },
      {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
        desc: "Pandas",
      },
    ],
  },
  {
    category: "Databases & Cloud",
    skills: [
      {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        desc: "MongoDB",
      },
      {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        desc: "Firebase",
      },
      {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
        desc: "Supabase",
      },
      {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
        desc: "Prisma",
      },
      {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
        desc: "Sequelize",
      },
      {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
        desc: "Azure",
      },
      // Pinecone doesn't have a devicon; using their official favicon via clearbit
      {
        url: "https://avatars.githubusercontent.com/u/54333248?s=200&v=4",
        desc: "Pinecone",
      },
    ],
  },
  {
    category: "AI / ML Tools",
    skills: [
      // LangChain / LangSmith / LangGraph – official GitHub org avatar
      {
        url: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4",
        desc: "LangChain",
      },
      {
        url: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4",
        desc: "LangSmith",
      },
      {
        url: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4",
        desc: "LangGraph",
      },
    ],
  },
  {
    category: "Version Control & DevOps",
    skills: [
      {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        desc: "Git",
      },
      {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        desc: "GitHub",
      },
      {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg",
        desc: "Bitbucket",
      },
      {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        desc: "Docker",
      },
    ],
  },
];

// ── legacy flat array (kept so existing imports don't break) ─────────────────
export const icons: Skill[] = skillCategories.flatMap((c) => c.skills);

/* ============================================================
  All hero copy lives here — edit text freely without touching
  animation logic (script.js) or presentation (styles.css).
  index.html carries the same strings as a no-JS fallback.
   ============================================================ */
const heroContent = {
  nav: [
    { label: "Work", href: "#work", active: true },
    { label: "About", href: "#section-03" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],

 cta: {
  label: "Let's Talk",
  href: "#contact"
},

  headline: "Jaydeep Singh",
  role: ["Front-End Developer", "Full-Stack Developer", "Software Developer"],
  meta: ["React", "JavaScript", "Full-Stack"],

  notification: {
    name: "Jaydeep",
    time: "now",
    lead: "Front-End Developer",
    message: "building and deploying modern web applications with React and JavaScript.",
  },

  section2: {
    sideLeft: ["Jaydeep Singh", "Solutions."],
    sideRight: ["Aesthetic", "Creativity."],
  },

  /* My Works — add projects here (image + metadata per card); the Works
     carousel builds itself from this array. `teaser: true` cards are
     decorative edge slices and never become the active project. */
  works: {
    brand: "Creativity",
    projects: [
      { key: "SkillGap Ai",  name: "SkillGap Ai",  img: "assets/work-SkillGap Ai.jpg",  w: 498, h: 405,
        cat: "AI · Full-Stack", year: "2025", accent: "#4da3ff",
        title: "AI-Driven Career Guidance Platform " },
      { key: "Sulin_interior", name: "Sulin_interior", img: "assets/work-Sulin_interiors.jpg", w: 383, h: 363,
        cat: "Web · Client Project", year: "2026", accent: "#a8e063",
        title: "Developed Customer Enquiry Website for Sulin interiors bangeluru" },
      { key: "Client Portfolio",   name: "Client Portfolio",   img: "assets/work-Client Portfolio.jpg",   w: 186, h: 362,
        cat: "Web · Client Project", year: "2026", accent: "#f28b3c",
        title: "Digital Client Portfolio as per the client requirements" },
    ],
  },

  /* ---- BIG ROBOT section (the original large Nexbot experience) ----
     All copy is editable here; the 3D and the scroll journey never
     touch these strings. */
  bigRobot: {
    labels: { left: "Computer Science Student", right: "FRONT-END · FULL-STACK" },
    eyebrow: "( 05 · How I Think )",
    titleLines: ["I build software that", "looks and feels as good as it works."],
    description: "I combine frontend development, backend engineering and practical AI to build useful digital products from idea to deployment.",
    hint: "Scroll to explore how I think.",

    /* the panels that travel through the 3D space — add or edit freely */
    techIdeas: [
  {
    no: "01",
    title: "Full-Stack Web Development",
    description:
      "Building responsive, user-facing applications by connecting modern frontend experiences with reliable backend services and APIs.",
    tags: ["React", "JavaScript", "Redux", "Node.js", "Express.js", "MongoDB"],
  },

  {
    no: "02",
    title: "AI & Intelligent Applications",
    description:
      "Exploring AI and machine learning through practical applications that turn data into useful insights, recommendations and real-world solutions.",
    tags: ["Python", "Machine Learning", "Computer Vision", "AI", "Data", "Automation"],
  },
],

  },

  /* ---- EDITORIAL / SKILLS section (scroll-choreographed) ----
    The statement enters from the left, the skills from the right,
     one item at a time. Copy only — the timeline lives in script.js. */
  editorial: {
    eyebrow: "( 06 · The Method )",
    statement: ["Code is my craft.", "Problem solving is my mindset."],
    note: "I combine technical thinking with practical development to build useful, user-focused software.",
    skills: {
  title: "I Work With",
  groups: [
    {
      name: "Languages",
      items: ["JavaScript", "Python", "Java", "C", "C++", "SQL"]
    },

    {
      name: "Frontend",
      items: ["ReactJS", "Redux", "HTML", "CSS", "Responsive Design"]
    },

    {
      name: "Backend",
      items: ["Node.js", "Express.js", "REST APIs", "MongoDB"]
    },

    {
      name: "Tools",
      items: ["Git", "GitHub", "Linux", "VS Code", "Vercel"]
    },
  ],
},
    mindset: {
  title: "Learn → Build → Break → Improve",
  lines: [
    "I learn by building.",
    "I solve problems through experimentation.",
    "I improve by understanding what works and what doesn't.",
    "And I keep building better solutions.",
  ],
},
    exploring: {
  title: "Currently Exploring",
  items: [
    "Advanced React development",
    "Backend architecture",
    "System design",
    "Machine learning applications",
    "Building production-ready software",
  ],
},
    ending: {
  lines: [
    "Still learning.",
    "Still building.",
    "Still improving."
  ],
  note: "Always curious about what I can build next."
  },
  },

  /* ---- SMALL ROBOT section (its own minimal chapter) ---- */
  smallRobot: {
  eyebrow: "( 07 · STILL CURIOUS )",

  titleLines: [
    "Always learning",
    "always building."
  ],

  description:
    "I stay curious about new technologies, better engineering practices and the problems I can solve with software.",

  note: "MOVE YOUR CURSOR · IT FOLLOWS",
},

  /* ---- FOOTER ----
    Edit freely. `social` is empty on purpose: add entries like
    { label: "GitHub", href: "https://github.com/..." } and they
    appear automatically. Remove `email` if you would rather not
     publish an address. */
  footer: {
  eyebrow: "( 08 · Contact )",
  headline: [
  "Let’s build",
  "something great."
  ],
  line:
    "Open to software engineering opportunities, freelance projects and interesting problems.",
    email: "singhjaydeep0805@gmail.com",
      emailLabel: "Say hello",
    columns: [
      {
  title: "Sections",
  items: [
    { label: "Home", href: "#top" },
    { label: "About", href: "#section-03" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#method" },
    { label: "Contact", href: "#contact" },
  ],
},
      {
  title: "Explore",
  items: [
    { label: "How I Think", href: "#think" },
    { label: "Tech Stack", href: "#method" },
    { label: "Currently Exploring", href: "#method" },
    { label: "Still Curious", href: "#curious" },
  ],
},
    ],
    social: [
  {
    label: "GitHub",
    href: "https://github.com/mercyjs2005"
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jaydeep-singh-7a4351357/"
  },
  {
    label: "Resume",
    href: "assets/resume.pdf"
  },
],
    legal: "© 2026 Jaydeep Singh",
    note: "Built with code, curiosity and a passion for solving problems.",
    backToTop: "Back to top",
  },

  /* About Me chapter — replace these placeholder strings with the final copy. */
  about: {
  boxes: {
    who: {
      title: "Who I Am",
      sub: "Jaydeep — Software Developer focused on building modern web applications with React, JavaScript, Node.js and MongoDB."
    },

    what: {
      title: "What I Do",
      sub: "Web · AI · Software"
    },

    think: {
      title: "How I Think",
      sub: "Learn · Build · Improve · Deploy"
    },
  },

  views: {
    who: {
      eyebrow: "01 — Who I Am",
      head: "Jaydeep",
      text: "Full-stack developer experienced in building and deploying user-facing web applications using React, JavaScript, Redux, Node.js, Express.js, REST APIs, and MongoDB."
    },

    what: {
      eyebrow: "02 — What I Do",
      head: "Building Digital Solutions.",
      text: "I build responsive web applications, full-stack systems and practical AI-powered solutions using modern technologies."
    },

    think: {
      eyebrow: "03 — How I Think",
      head: "Learn. Build. Improve.",
      text: "I turn ideas into functional, user-friendly web applications while continuously learning, solving problems, and improving through real-world development."
    },
  },
},
};

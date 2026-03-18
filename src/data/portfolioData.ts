export const portfolioData = {
  personal: {
    name: "Alex Johnson",
    role: "Junior Front-End Developer",
    tagline: "I build clean, responsive web experiences that bring ideas to life.",
    email: "alex@example.com",
    github: "https://github.com/alexjohnson",
    linkedin: "https://linkedin.com/in/alexjohnson",
    aboutText:
      "Hi! I'm a self-taught front-end developer and CS student passionate about UI/UX. I love translating complex problems into simple, beautiful, and intuitive interfaces. My primary focus is on React, modern CSS, and crafting accessible digital experiences. Currently seeking my first full-time role or internship where I can learn, grow, and contribute to impactful projects.",
  },

  skills: [
    { name: "HTML5", category: "Core", level: 90 },
    { name: "CSS3", category: "Core", level: 85 },
    { name: "JavaScript (ES6+)", category: "Core", level: 80 },
    { name: "React", category: "Framework", level: 75 },
    { name: "TypeScript", category: "Language", level: 65 },
    { name: "Tailwind CSS", category: "Styling", level: 85 },
    { name: "Git & GitHub", category: "Tools", level: 80 },
    { name: "Responsive Design", category: "Concepts", level: 90 },
  ],

  projects: [
    {
      // FEATURED — CRUD full-stack app
      id: "devtrack",
      title: "DevTrack",
      description:
        "A full-featured project management CRUD app. Create boards, add tasks, set priorities, and track progress. Built with React and TypeScript, with full create/read/update/delete operations persisted to localStorage. Supports drag-and-drop column reordering and dark mode.",
      tags: ["React", "TypeScript", "CSS"],
      demoUrl: "https://devtrack-demo.netlify.app",
      githubUrl: "https://github.com/alexjohnson/devtrack",
      // Unsplash: kanban / productivity workspace
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    },
    {
      // Weather app with live API
      id: "weathernow",
      title: "WeatherNow",
      description:
        "Real-time weather dashboard powered by the OpenWeatherMap API. Enter any city to get current conditions, humidity, wind speed, and a 5-day hourly forecast. Features geolocation detection, animated weather icons, and a clean card-based layout.",
      tags: ["JavaScript", "API", "CSS"],
      demoUrl: "https://weathernow-demo.netlify.app",
      githubUrl: "https://github.com/alexjohnson/weathernow",
      // Unsplash: weather / cloudy sky
      image:
        "https://images.unsplash.com/photo-1504608524841-42584120d693?w=800&q=80",
    },
    {
      // E-commerce / shopping cart React app
      id: "shopcart",
      title: "ShopCart",
      description:
        "A responsive e-commerce UI with a fully functional shopping cart. Browse products, filter by category, add to cart, and adjust quantities. State managed with React Context and useReducer. Checkout flow with order summary and form validation.",
      tags: ["React", "JavaScript", "CSS"],
      demoUrl: "https://shopcart-demo.netlify.app",
      githubUrl: "https://github.com/alexjohnson/shopcart",
      // Unsplash: online shopping / product grid
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    },
    {
      // Quiz / trivia app using Open Trivia DB API
      id: "quizmaster",
      title: "QuizMaster",
      description:
        "An interactive trivia quiz app powered by the Open Trivia Database API. Choose your category and difficulty, then race the clock. Tracks your score across rounds, shows detailed results with explanations, and saves your high score to localStorage.",
      tags: ["JavaScript", "API", "CSS"],
      demoUrl: "https://quizmaster-demo.netlify.app",
      githubUrl: "https://github.com/alexjohnson/quizmaster",
      // Unsplash: quiz / study / questions
      image:
        "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80",
    },
    {
      // Markdown notes app
      id: "marknotes",
      title: "MarkNotes",
      description:
        "A distraction-free Markdown notes app with live preview. Write notes in Markdown on the left and see the rendered output on the right in real time. Notes are saved automatically to localStorage. Supports syntax highlighting for code blocks, tags, and full-text search.",
      tags: ["React", "JavaScript", "CSS"],
      demoUrl: "https://marknotes-demo.netlify.app",
      githubUrl: "https://github.com/alexjohnson/marknotes",
      // Unsplash: notes / writing / journal
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    },
    {
      // First portfolio — hand-coded HTML/CSS/JS
      id: "portfoliov1",
      title: "Portfolio V1",
      description:
        "My very first personal portfolio, hand-coded without any frameworks or libraries. Built entirely from scratch with vanilla HTML, CSS, and DOM manipulation to master the fundamentals. Features a CSS-only dark mode toggle, scroll animations via Intersection Observer, and a contact form.",
      tags: ["JavaScript", "CSS"],
      demoUrl: "https://alexjohnson-v1.netlify.app",
      githubUrl: "https://github.com/alexjohnson/portfolio-v1",
      // Unsplash: coding / laptop / portfolio
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    },
  ],

  experience: [
    {
      year: "2025",
      title: "Seeking Front-End Role",
      description:
        "Built full portfolio projects, started contributing to open source, and actively applying for junior developer and internship positions.",
    },
    {
      year: "2024",
      title: "Mastering Modern Tooling",
      description:
        "Learned Tailwind CSS, React ecosystem, Git workflow, and modern build tools like Vite and npm. Built several full-stack capable UIs.",
    },
    {
      year: "2023",
      title: "Deep Dive into JavaScript & React",
      description:
        "Learned JavaScript deeply — DOM manipulation, async/await, APIs. Discovered React, learned component thinking, and built multiple single-page applications.",
    },
    {
      year: "2022",
      title: "Started Coding Journey",
      description:
        "Wrote my first lines of code. Focused on HTML & CSS, building basic static websites and learning the fundamentals of the web.",
    },
  ],
};

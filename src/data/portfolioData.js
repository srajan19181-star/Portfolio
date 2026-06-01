/**
 * Portfolio Data — Srajan Umrao
 * Edit this file to update your portfolio content
 */

export const personalInfo = {
  name: "Srajan Umrao",
  taglines: [
    "Full-Stack Developer",
    "MERN Stack Engineer",
    "Backend Architect",
    "React.js Specialist",
    "AI Agent Builder",
    "Problem Solver",
  ],
  bio: "Full-Stack Developer and MERN Stack Engineer pursuing B.Tech ECE at IIIT Bhopal (CGPA 8.2). I build scalable REST APIs with Node.js & Express, craft dynamic frontends with React.js & Redux, and am actively exploring AI agent development. HackXios 2025 Participant · CodeChef 2★ · Seeking Full-Stack Internship.",
  location: "Bhopal, MP, India",
  email: "srajan19181@gmail.com",
  phone: "+91 9336802588",
  github: "https://github.com/srajan19181-star",
  linkedin: "https://www.linkedin.com/in/srajan-umrao-827a81324/",
  photo: "/profile.jpg",
  resume: "/resume.pdf",
};

export const skills = [
  // Languages
  { name: "JavaScript", category: "Language", level: 90, icon: "JS" },
  { name: "C++", category: "Language", level: 80, icon: "C++" },
  { name: "C", category: "Language", level: 75, icon: "C" },
  // Frontend
  { name: "React.js", category: "Frontend", level: 88, icon: "⚛" },
  { name: "Redux Toolkit", category: "Frontend", level: 82, icon: "RD" },
  { name: "Tailwind CSS", category: "Frontend", level: 85, icon: "TW" },
  { name: "HTML5", category: "Frontend", level: 92, icon: "H5" },
  { name: "CSS3", category: "Frontend", level: 88, icon: "C3" },
  // Backend
  { name: "Node.js", category: "Backend", level: 85, icon: "ND" },
  { name: "Express.js", category: "Backend", level: 83, icon: "EX" },
  { name: "REST API", category: "Backend", level: 87, icon: "API" },
  { name: "JWT Auth", category: "Backend", level: 80, icon: "JWT" },
  // Database
  { name: "MongoDB", category: "Database", level: 82, icon: "MG" },
  { name: "Mongoose ODM", category: "Database", level: 80, icon: "MN" },
  // Tools
  { name: "Git & GitHub", category: "Tools", level: 88, icon: "GT" },
  { name: "Postman", category: "Tools", level: 85, icon: "PM" },
  { name: "Vercel", category: "Tools", level: 82, icon: "VC" },
];

export const projects = [
  {
    id: 1,
    title: "Backend API Server",
    subtitle: "Production-Grade REST API",
    description:
      "A production-grade REST API built with Express.js using MVC architecture, modular routing, JWT auth, bcrypt password hashing, and role-based middleware. Features scalable folder structure with routes, controllers, models, and middleware layers.",
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "bcrypt", "REST API"],
    category: "Backend",
    github: "https://github.com/srajan-umrao/backend-project",
    demo: "",
    status: "In Progress",
    year: "2026",
    color: "#00d4ff",
  },
  {
    id: 2,
    title: "Finance Dashboard",
    subtitle: "Personal Finance Tracker",
    description:
      "A fully responsive personal finance dashboard with Redux global state management, React Router multi-page navigation, and interactive Recharts data visualizations including line, bar, and pie charts. Deployed on Vercel.",
    tech: ["React.js", "Redux Toolkit", "React Router", "Recharts", "Tailwind CSS", "Vercel"],
    category: "Frontend",
    github: "https://github.com/srajan-umrao",
    demo: "https://finance-dashboard-rose-three.vercel.app",
    status: "Live",
    year: "2026",
    color: "#7c3aed",
  },
  {
    id: 3,
    title: "Real-Time Weather App",
    subtitle: "Live Weather Data Visualization",
    description:
      "Fetches live weather data via OpenWeatherMap REST API using async/await. Displays real-time temperature, humidity, wind speed, and 5-day forecast with robust error handling and a clean responsive UI.",
    tech: ["JavaScript", "HTML5", "CSS3", "OpenWeatherMap API", "GitHub Pages"],
    category: "Frontend",
    github: "https://github.com/srajan-umrao/weather-app",
    demo: "",
    status: "Complete",
    year: "2026",
    color: "#06b6d4",
  },
  {
    id: 4,
    title: "Razorpay Clone",
    subtitle: "Pixel-Accurate Landing Page",
    description:
      "A pixel-accurate, fully responsive clone of the Razorpay landing page using Tailwind CSS flexbox/grid system. Replicates nav bars, hero sections, feature cards, and footer with precision.",
    tech: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
    category: "Frontend",
    github: "https://github.com/srajan19181-star/razorpay-clone",
    demo: "",
    status: "Complete",
    year: "2024",
    color: "#3b82f6",
  },
  {
    id: 5,
    title: "Developer Portfolio",
    subtitle: "This Portfolio Website",
    description:
      "A cinematic, fully animated personal portfolio built with React + Vite, Three.js 3D particle background, GSAP parallax, Framer Motion animations, and a custom neon cursor. Features a loading screen, typing animation, glass-morphism cards, and a dark cyberpunk aesthetic. Deployed on Vercel.",
    tech: ["React.js", "Three.js", "Framer Motion", "GSAP", "Tailwind CSS", "Vite", "Vercel"],
    category: "Full-Stack",
    github: "https://github.com/srajan19181-star",
    demo: "https://portfolio-mocha-beta-w1tljjqjx4.vercel.app/",
    status: "Live",
    year: "2026",
    color: "#00d4ff",
  },
];

export const experience = [
  {
    role: "AI Web Developer",
    company: "InAmigos Foundation",
    location: "Remote",
    duration: "2025 – Present",
    description:
      "Working as an AI Web Developer at InAmigos Foundation — an NGO focused on technology-driven social impact. Developing AI-integrated web features, contributing to full-stack modules, and applying MERN stack skills to real-world social-impact products.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "AI Integration"],
    type: "Volunteer / NGO",
  },
];

export const education = [
  {
    degree: "B.Tech – Electronics & Communication Engineering",
    institution: "IIIT Bhopal",
    location: "Bhopal, Madhya Pradesh",
    duration: "Aug 2024 – May 2028",
    description:
      "Undergraduate student with CGPA 8.2. Coursework includes Data Structures & Algorithms, Computer Networks, Object-Oriented Programming, and Digital Electronics. Actively self-learning full-stack development and AI agent frameworks alongside formal studies.",
    gpa: "8.2 / 10",
  },
];

export const achievements = [
  {
    title: "HackXios 2025 — Participant",
    type: "Hackathon",
    date: "Dec 2025",
    description:
      "Participated in HackXios 2025, building an AI-powered cybersecurity prototype that detects anomalous network behavior in real time using statistical anomaly detection. Delivered a fully working demo in 24 hours as part of a 3-person team at InAmigos Foundation.",
    icon: "👨‍💻",
    color: "#f59e0b",
  },
  {
    title: "CodeChef 2-Star Rated",
    type: "Competitive Programming",
    date: "Ongoing",
    description:
      "Achieved 2-Star rating on CodeChef (max rating 1484). Regularly competing in Div. 2 & Div. 3 contests with 100+ problems solved across CodeChef and Codeforces.",
    icon: "⭐",
    color: "#00d4ff",
  },
  {
    title: "Building AI Agents",
    type: "Current Focus",
    date: "2026 – Present",
    description:
      "Actively exploring AI agent development — building autonomous workflows using LLM APIs, function calling, and agent orchestration frameworks. Applying AI capabilities to real-world web products.",
    icon: "🤖",
    color: "var(--text-primary)",
  },
  {
    title: "MERN Stack Self-Taught",
    type: "Skill Achievement",
    date: "2024–2026",
    description:
      "Independently mastered the complete MERN stack alongside formal ECE coursework at IIIT Bhopal (CGPA 8.2), building 4+ real-world projects to demonstrate hands-on proficiency.",
    icon: "🚀",
    color: "#7c3aed",
  },
];

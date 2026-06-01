/**
 * Portfolio Data — Srajan Umrao
 * Edit this file to update your portfolio content
 */

export const personalInfo = {
  name: "Srajan Umrao",
  taglines: [
    "MERN Stack Developer",
    "Backend Engineer",
    "React.js Specialist",
    "API Architect",
    "Problem Solver",
  ],
  bio: "First-year B.Tech (ECE) student at IIIT Bhopal with hands-on MERN stack expertise — building scalable backends with Node.js, Express.js & MongoDB and dynamic frontends with React.js & Redux. CodeChef 2-Star rated competitive programmer seeking a MERN / Backend Development Internship.",
  location: "Bhopal, MP, India",
  email: "srajan19181@gmail.com",
  phone: "+91 9336802588",
  github: "https://github.com/srajan-umrao",
  linkedin: "https://linkedin.com/in/srajan-umrao",
  twitter: "",
  resume: "/resume.pdf", // Replace with actual PDF path
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
    github: "https://github.com/srajan-umrao/razorpay-clone",
    demo: "",
    status: "Complete",
    year: "2024",
    color: "#10b981",
  },
];

export const experience = []; // No work experience yet — student

export const education = [
  {
    degree: "B.Tech – Electronics & Communication Engineering",
    institution: "IIIT Bhopal",
    location: "Bhopal, Madhya Pradesh",
    duration: "Aug 2024 – May 2028",
    description:
      "First-year undergraduate student. Coursework includes Data Structures & Algorithms, Computer Networks, OOP, and Digital Electronics.",
    gpa: "",
  },
];

export const achievements = [
  {
    title: "HackXios 2025 — AI Smart Threat Detection",
    type: "Hackathon",
    date: "Dec 2025",
    description:
      "Built an AI-powered cybersecurity prototype detecting anomalous network behavior in real time using statistical anomaly detection. Delivered a working demo in 24 hours as part of a 3-person team.",
    icon: "🏆",
    color: "#f59e0b",
  },
  {
    title: "CodeChef 2-Star",
    type: "Competitive Programming",
    date: "Ongoing",
    description:
      "Achieved 2-Star rating on CodeChef (max rating 1484). Regularly competing in Div. 2 & Div. 3 contests with 100+ problems solved across CodeChef and Codeforces.",
    icon: "⭐",
    color: "#00d4ff",
  },
  {
    title: "MERN Stack Self-Taught",
    type: "Skill",
    date: "2024–2026",
    description:
      "Independently mastered the complete MERN stack (MongoDB, Express.js, React.js, Node.js) alongside formal ECE coursework, building real-world projects to demonstrate proficiency.",
    icon: "🚀",
    color: "#7c3aed",
  },
];

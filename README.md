# Nishant Landage — Developer Portfolio

**Live Site → [sponsvi-portfolio.vercel.app](https://sponsvi-portfolio.vercel.app)**

> A personal portfolio built with React 18, TypeScript, Three.js, and GSAP — featuring a real-time 3D character, scroll-driven animations, and a responsive layout optimised for all screen sizes.

---

## About Me

I'm a mid-level Software Engineer based in Leeds, UK, with a breadth of experience across the full stack — from building cloud-connected .NET APIs and Angular front-ends in professional settings, to shipping full-stack civic data systems, mobile apps, and interactive 3D web experiences independently.

I'm currently completing my **MSc Software Engineering / Computer Science at Nottingham Trent University** while continuing freelance client work, and I'm actively looking for full-time engineering roles in the UK.

**Contact:** landagenishant25@gmail.com · +44 7818 920485 · Leeds, United Kingdom

---

## What I Can Build

I'm comfortable across the whole product lifecycle — from database schema and back-end APIs to UI/UX, deployment, and delivery. Here's a breakdown of my practical capability:

| Domain | Technologies |
|---|---|
| **Front-End & UI** | React, TypeScript, Angular, HTML5, CSS3, Bootstrap, jQuery, GSAP, Three.js, WebGL |
| **Back-End & APIs** | ASP.NET Core (C#), Node.js, PHP, REST APIs, PHPMailer |
| **Databases** | SQL Server, MySQL (PDO), Firebase Realtime DB, CRUD, query optimisation |
| **Mobile** | Flutter, React Native, Android Studio |
| **Cloud & DevOps** | Azure, Firebase, Vercel, Git, CI/CD, GitHub Actions |
| **AI & ML** | TensorFlow, OpenAI API, Python ML, simulation systems |
| **Engineering Practices** | Agile/Scrum, SDLC, Unit Testing, Test Automation, Technical Documentation |

---

## Professional Experience

**Freelance Full-Stack Developer** · Remote (India & UK) · 2022 – Present
- Delivered end-to-end web and mobile applications for clients across industries
- Projects span civic data portals, e-commerce platforms, management systems, and AI-integrated tools

**Web and Full-Stack Development Intern** · InnovateSoft · Jul 2024 – Sep 2024
- Contributed to Angular front-end development and .NET back-end service work
- Worked within an Agile team with code reviews, sprint planning, and CI/CD pipelines

---

## Key Projects

| Project | Stack | Highlights |
|---|---|---|
| **Bradford Council Asset & Schools Portal** | PHP, MySQL, Google Maps API, OpenStreetMap | Session auth + TOTP 2FA; role-based admin; bulk-geocoded 380+ school records; KS4/KS5 metrics by URN |
| **Smart Traffic Light Control & Simulation App** | Python, Simulation, AI | Real-time traffic simulation with adaptive control algorithms |
| **E-commerce Web Platform** | React, Node.js, SQL Server | Full product catalogue, cart, checkout, and admin dashboard |
| **Expense Analysis & Management App** | Flutter, Firebase | Cross-platform mobile app with real-time data sync and analytics |
| **Project Management System** | ASP.NET Core, Angular, SQL Server | Role-based task management with full audit trail |

---

## Education

- **MSc Software Engineering / Computer Science** — Nottingham Trent University, UK *(Expected Sep 2025)*
- **B.Tech Computer Science Engineering** — Walchand Institute of Technology, India *(Graduated 2024, CGPA: 8.91 / A+)*

---

## This Portfolio — Tech Notes

Built from scratch as a creative engineering project. Key implementation details:

- **3D Character** — custom GLTF model rendered with `@react-three/fiber`, animated via bone manipulation (`boneData.ts`), with encrypted model loading to protect the asset
- **Animations** — GSAP ScrollTrigger drives all section transitions; split-text reveals on headings
- **Responsive** — fully functional on mobile; 3D model conditionally loaded only on desktop to keep mobile performance fast
- **Deployment** — Vite build → Vercel edge network; auto-aliases on every push

> This project uses GSAP Club plugins. For production licensing: https://gsap.com/docs/v3/Installation/

---

## License

This project is open source and available under the [MIT License](LICENSE).

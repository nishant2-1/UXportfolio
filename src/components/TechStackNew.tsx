import { FaReact, FaNodeJs, FaPython, FaGit, FaDocker } from 'react-icons/fa';
import { SiFlask, SiMysql, SiOpenai, SiTypescript, SiJavascript, SiTailwindcss } from 'react-icons/si';
import "./styles/TechStack.css";

const TechStack = () => {
  const technologies = [
    { name: "React", icon: <FaReact />, category: "Frontend" },
    { name: "TypeScript", icon: <SiTypescript />, category: "Language" },
    { name: "JavaScript", icon: <SiJavascript />, category: "Language" },
    { name: "TailwindCSS", icon: <SiTailwindcss />, category: "Frontend" },
    { name: "Python", icon: <FaPython />, category: "Backend" },
    { name: "Flask", icon: <SiFlask />, category: "Backend" },
    { name: "Node.js", icon: <FaNodeJs />, category: "Backend" },
    { name: "MySQL", icon: <SiMysql />, category: "Database" },
    { name: "OpenAI API", icon: <SiOpenai />, category: "AI/ML" },
    { name: "Git", icon: <FaGit />, category: "Tools" },
    { name: "Docker", icon: <FaDocker />, category: "DevOps" },
  ];

  return (
    <div className="techstack-section" id="tech-stack">
      <div className="section-container">
        <h2>
          Tech <span>Stack</span>
        </h2>
        <p className="tech-subtitle">
          Tools and technologies I specialize in for building scalable fintech & AI applications
        </p>

        <div className="tech-cloud">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-item" title={`${tech.name} - ${tech.category}`}>
              <span className="tech-icon">{tech.icon}</span>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>

        <div className="tech-categories">
          <div className="category">
            <h4>Frontend</h4>
            <p>React, TypeScript, JavaScript, TailwindCSS, Chart.js</p>
          </div>
          <div className="category">
            <h4>Backend</h4>
            <p>Python, Flask, Node.js, REST APIs, JWT Authentication</p>
          </div>
          <div className="category">
            <h4>Databases</h4>
            <p>MySQL, Data Optimization, Query Performance, ORM</p>
          </div>
          <div className="category">
            <h4>AI & ML</h4>
            <p>OpenAI API, Predictive Models, Data Pipeline, Real-time Scoring</p>
          </div>
          <div className="category">
            <h4>DevOps & Tools</h4>
            <p>Git, Docker, GitHub, Environment Management, Testing</p>
          </div>
          <div className="category">
            <h4>Security</h4>
            <p>JWT Tokens, 2FA, Password Hashing, API Security, Auth Flows</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;

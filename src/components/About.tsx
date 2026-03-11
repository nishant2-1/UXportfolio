import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Full-stack developer with 3+ years of hands-on experience delivering
          web applications, enterprise dashboards, and AI-assisted digital
          tools. I work across the entire stack — from C#/.NET APIs and SQL
          databases to React, Angular, and cloud deployments on Azure — with a
          strong focus on code quality, testing, and real business outcomes.
        </p>
        <p className="para">
          Currently completing an MSc in Software Engineering at Nottingham
          Trent University (expected Sep 2025) while actively building
          projects in Python AI, system simulation, and cross-platform mobile.
          I take ownership from design to deployment and bring structured
          Agile delivery to every team I join.
        </p>

        <div className="about-stats">
          <div className="about-stat">
            <span className="about-stat-number">3+</span>
            <span className="about-stat-label">Years Experience</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-number">5+</span>
            <span className="about-stat-label">Projects Delivered</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-number">MSc</span>
            <span className="about-stat-label">NTU, Sep 2025</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-number">8.91</span>
            <span className="about-stat-label">B.Tech CGPA</span>
          </div>
        </div>

        <div className="visa-info">
          <span>
            ⚙️ Core: C#, JavaScript, TypeScript, Python, SQL, ASP.NET Core,
            React, Angular, Node.js
          </span>
          <span>
            ☁️ Cloud & Delivery: Azure, REST APIs, CI/CD, Unit Testing, Agile,
            Scrum, Git
          </span>
          <span>
            🤖 AI & Mobile: TensorFlow, OpenAI API, Flutter, React Native,
            Firebase
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;

import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am a full-stack software developer focused on building secure,
          scalable, and practical digital products across frontend, backend,
          databases, and cloud environments. My experience covers C#/.NET,
          React, Angular, Node.js, SQL Server, and Azure, with emphasis on
          clean architecture, reliable APIs, and strong user experience.
        </p>
        <p className="para">
          I am currently completing an MSc in Software Engineering at
          Nottingham Trent University while continuing to develop projects in
          AI-assisted applications, system simulations, and data-driven tools.
          I enjoy turning complex requirements into production-ready software
          that is maintainable, testable, and easy to extend.
        </p>
        <div className="visa-info">
          <span>
            Core Engineering: C#, JavaScript, TypeScript, SQL, Python,
            ASP.NET Core, React, Angular
          </span>
          <span>
            Delivery & Quality: Azure, REST APIs, CI/CD, Unit Testing, Agile,
            Scrum, Documentation
          </span>
          <span>
            AI, Mobile & Systems: TensorFlow, OpenAI API, Flutter, React
            Native, Firebase, system simulation
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;

import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Mid-level Software Engineer with hands-on experience in C#/.NET
          application development, Angular front-end engineering, and Azure
          cloud environments. I build maintainable, scalable, and secure
          software with strong ownership of SDLC, Agile delivery, and
          cross-team collaboration with product managers, QA teams, and
          stakeholders.
        </p>
        <p className="para">
          I am currently pursuing MSc Software Engineering at Nottingham Trent
          University and building real-world projects in Python, AI, and system
          simulations. My stack spans frontend, backend, databases, testing,
          CI/CD, and cloud, with practical experience delivering reliable
          software from idea to deployment.
        </p>
        <div className="visa-info">
          <span>Core: C#, JavaScript, SQL, Python | ASP.NET Core | Angular</span>
          <span>Cloud & QA: Azure, CI/CD, Unit Testing, Test Automation, Scrum</span>
          <span>
            AI & Mobile: TensorFlow, OpenAI API, Flutter, React Native,
            Firebase
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;

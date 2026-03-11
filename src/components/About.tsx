import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am a Software Engineer &amp; Full-Stack Developer with a Master&apos;s
          degree, specializing in building secure, scalable, and highly
          interactive digital systems.
        </p>
        <p className="para">
          My expertise spans the entire development lifecycle &mdash; from
          designing complex system architectures in AWS and C#/.NET to crafting
          pixel-perfect frontend experiences in React. I don&apos;t just write
          code; I design systems. With a strong foundation in Software
          Engineering fundamentals and Project Management, I am adept at
          breaking down complex requirements into manageable modules and
          leading them to successful delivery.
        </p>
        <p className="para">
          Having worked on mobile interactive systems and cloud-native
          applications, I am passionate about creating software that is both
          technically robust and user-centric. I thrive in international,
          remote-first environments where clean code, system scalability, and
          proactive communication are the standard.
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

import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Experience <span>&</span>
          <br /> Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Full-Stack Developer</h4>
                <h5>Remote - India & UK</h5>
              </div>
              <h3>2022 - Present</h3>
            </div>
            <p>
              Designed and implemented full-stack web applications with SQL
              databases, REST APIs, and front-end frameworks including HTML,
              CSS, Bootstrap, jQuery, and React. Worked directly with clients
              on requirements, testing, documentation, and process improvements
              for scalable system delivery.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web & Full-Stack Development Intern</h4>
                <h5>InnovateSoft</h5>
              </div>
              <h3>Jul 2024 - Sep 2024</h3>
            </div>
            <p>
              Developed internal dashboards using C#, ASP.NET Core, SQL Server,
              and JavaScript/jQuery. Performed software testing, debugging, and
              technical documentation for ERP and management systems while
              collaborating with internal teams to optimize workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MSc Software Engineering / Computer Science</h4>
                <h5>Nottingham Trent University, UK</h5>
              </div>
              <h3>Expected Sep 2025</h3>
            </div>
            <p>
              Focused on mobile interactive system design, software
              architecture, Agile/Scrum delivery, and collaborative engineering.
              Modules include Advanced Algorithms, Software Engineering, Cloud
              Computing, and Machine Learning.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Computer Science Engineering</h4>
                <h5>Walchand Institute of Technology, India</h5>
              </div>
              <h3>Graduated 2024</h3>
            </div>
            <p>
              CGPA 8.91 / A+. Developed strong foundations in software testing,
              DevOps, project management, UI/UX technology, data mining, and
              big data analytics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

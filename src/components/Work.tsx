import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
    let translateX = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box.length) return;
      const container = document.querySelector(".work-container") as HTMLElement | null;
      if (!container) return;
      const rectLeft = container.getBoundingClientRect().left;
      const rect = (box[0] as HTMLElement).getBoundingClientRect();
      const parentWidth =
        (box[0] as HTMLElement).parentElement?.getBoundingClientRect().width ?? 0;
      const padding = parseInt(window.getComputedStyle(box[0] as Element).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Selected <span>Projects</span>
        </h2>
        <div className="work-flex">
          <div className="work-box" key="0">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>Smart Traffic Light Control & Simulation App</h4>
                  <p>Python-based AI system simulation (2025)</p>
                </div>
              </div>
              <h4>Highlights</h4>
              <p>
                Algorithmic logic, modular architecture, and validation-focused
                testing for real-world traffic simulation behavior.
              </p>
              <div className="work-buttons">
                <a href="#" className="btn-secondary">
                  Project Notes -&gt;
                </a>
                <a href="#" className="btn-primary">
                  View Details
                </a>
              </div>
            </div>
            <WorkImage
              image="/images/insuresmart-ai.png"
              alt="Smart Traffic Light Control and Simulation App"
            />
          </div>

          <div className="work-box" key="1">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>E-commerce Web Platform</h4>
                  <p>Marketplace application (2023)</p>
                </div>
              </div>
              <h4>Tech Stack</h4>
              <p>
                React.js, Bootstrap, REST APIs, secure payments, admin
                dashboards, responsive UI, testable component design.
              </p>
              <div className="work-buttons">
                <a href="#" className="btn-primary">
                  View Project
                </a>
              </div>
            </div>
            <WorkImage image="/images/architecture.png" alt="E-commerce Web Platform" />
          </div>

          <div className="work-box" key="2">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>Expense Analysis & Management App</h4>
                  <p>Full-stack analytics app (2024)</p>
                </div>
              </div>
              <h4>Tech Stack</h4>
              <p>
                React.js, Firebase backend, Python AI integration, software
                testing, and end-user documentation.
              </p>
              <div className="work-buttons">
                <a href="#" className="btn-primary">
                  View Project
                </a>
              </div>
            </div>
            <WorkImage image="/images/dashboard.png" alt="Expense Analysis and Management App" />
          </div>

          <div className="work-box" key="3">
            <div className="work-info">
              <div className="work-title">
                <h3>04</h3>
                <div>
                  <h4>Advanced AI Chatbot</h4>
                  <p>Python-based conversational system (2024)</p>
                </div>
              </div>
              <h4>Highlights</h4>
              <p>
                Practical AI feature integration, prompt handling, and user
                enablement through guides and training materials.
              </p>
              <div className="work-buttons">
                <a href="#" className="btn-primary">
                  View Project
                </a>
              </div>
            </div>
            <WorkImage image="/images/insuresmart-ai.png" alt="Advanced AI Chatbot" />
          </div>

          <div className="work-box" key="4">
            <div className="work-info">
              <div className="work-title">
                <h3>05</h3>
                <div>
                  <h4>Project Management System</h4>
                  <p>Desktop enterprise-style app (2025)</p>
                </div>
              </div>
              <h4>Tech Stack</h4>
              <p>
                C#/.NET, SQL Server, CRUD operations, unit testing, workflow
                analysis, and maintainable modular architecture.
              </p>
              <div className="work-buttons">
                <a href="#" className="btn-primary">
                  View Project
                </a>
              </div>
            </div>
            <WorkImage image="/images/architecture.png" alt="Project Management System" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

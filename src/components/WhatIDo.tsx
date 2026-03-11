import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>FULL-STACK WEB DEVELOPMENT</h3>
              <h4>What I deliver</h4>
              <p>
                End-to-end web applications — clean, responsive frontends
                paired with secure, well-structured backends. I own the full
                delivery: UI components, REST APIs, database design, and
                deployment, always following SDLC and Agile practices.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">C#</div>
                <div className="what-tags">ASP.NET Core</div>
                <div className="what-tags">Angular</div>
                <div className="what-tags">React.js</div>
                <div className="what-tags">Node.js</div>
                <div className="what-tags">TypeScript</div>
                <div className="what-tags">HTML5 / CSS3</div>
                <div className="what-tags">Bootstrap</div>
                <div className="what-tags">jQuery</div>
                <div className="what-tags">SQL Server</div>
                <div className="what-tags">REST APIs</div>
                <div className="what-tags">ERP / CRM</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>AI, CLOUD & MOBILE</h3>
              <h4>What I deliver</h4>
              <p>
                Production-grade cloud-deployed applications and AI-assisted
                tools that solve real problems. I integrate intelligent
                features, build cross-platform mobile apps, and leverage cloud
                infrastructure to deploy scalable and maintainable products
                reliably.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Azure</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">TensorFlow</div>
                <div className="what-tags">OpenAI API</div>
                <div className="what-tags">Flutter</div>
                <div className="what-tags">React Native</div>
                <div className="what-tags">Firebase</div>
                <div className="what-tags">Data Analytics</div>
                <div className="what-tags">System Simulation</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 2)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>TESTING, DEVOPS & DELIVERY</h3>
              <h4>What I deliver</h4>
              <p>
                Reliable software with structured testing strategies,
                automated CI/CD pipelines, and Agile delivery workflows.
                I ensure each release is verifiable, well-documented, and
                production-ready — reducing risk and improving team velocity.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Unit Testing</div>
                <div className="what-tags">CI/CD</div>
                <div className="what-tags">DevOps</div>
                <div className="what-tags">Agile / Scrum</div>
                <div className="what-tags">Git</div>
                <div className="what-tags">Test Automation</div>
                <div className="what-tags">Technical Docs</div>
                <div className="what-tags">Code Review</div>
                <div className="what-tags">Sprint Planning</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}

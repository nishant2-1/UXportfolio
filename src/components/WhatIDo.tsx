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
              <h3>FULL-STACK ENGINEERING</h3>
              <h4>What I deliver</h4>
              <p>
                Architecting end-to-end web solutions with a focus on
                scalability and high performance. I own the full stack from UI
                to database, building reliable systems that are maintainable
                and production-ready.
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
              <h3>SOFTWARE &amp; SYSTEMS ARCHITECTURE</h3>
              <h4>What I deliver</h4>
              <p>
                Designing robust systems that scale. I bridge the gap between
                code and infrastructure &mdash; choosing the right patterns,
                cloud services, and tooling to support long-term product
                growth.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">System Design</div>
                <div className="what-tags">Microservices</div>
                <div className="what-tags">AWS (EC2, S3, Lambda)</div>
                <div className="what-tags">Azure</div>
                <div className="what-tags">Docker</div>
                <div className="what-tags">CI/CD Pipelines</div>
                <div className="what-tags">GitHub Actions</div>
                <div className="what-tags">Jest</div>
                <div className="what-tags">Cypress</div>
                <div className="what-tags">NUnit</div>
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
              <h3>INTERACTIVE SYSTEMS &amp; MOBILE</h3>
              <h4>What I deliver</h4>
              <p>
                Creating seamless, cross-platform experiences that prioritize
                user engagement. I apply HCI principles and accessibility
                standards to build interfaces that feel fast, inclusive, and
                intuitive.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Flutter</div>
                <div className="what-tags">React Native</div>
                <div className="what-tags">Firebase</div>
                <div className="what-tags">Interactive UI Design</div>
                <div className="what-tags">Performance Optimization</div>
                <div className="what-tags">HCI Principles</div>
                <div className="what-tags">WCAG Accessibility</div>
                <div className="what-tags">Mobile-Responsive</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 3)}
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
              <h3>TECHNICAL PROJECT MANAGEMENT</h3>
              <h4>What I deliver</h4>
              <p>
                Leveraging Master&apos;s-level training to lead development
                cycles from discovery to deployment. I manage modules,
                technical debt, and cross-functional team alignment with
                structured Agile delivery.
              </p>
              <h5>Skillset &amp; tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Agile / Scrum</div>
                <div className="what-tags">Sprint Planning</div>
                <div className="what-tags">Documentation</div>
                <div className="what-tags">Risk Assessment</div>
                <div className="what-tags">Technical Debt Management</div>
                <div className="what-tags">Cross-functional Alignment</div>
                <div className="what-tags">Git / GitHub</div>
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

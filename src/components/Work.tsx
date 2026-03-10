import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "0",
    index: "01",
    title: "Smart Traffic Light Control & Simulation App",
    subtitle: "Python-based intelligent traffic system (2025)",
    label: "Highlights",
    description:
      "Designed a modular simulation environment to model smarter signal control, improve traffic flow logic, and test real-world scenarios through structured algorithm design and validation.",
    primaryText: "Discuss Project",
    primaryHref: "#contact",
    secondaryText: "Architecture Notes ->",
    secondaryHref: "#about",
    image: "/images/insuresmart-ai.png",
    alt: "Smart Traffic Light Control and Simulation App",
  },
  {
    id: "1",
    index: "02",
    title: "E-commerce Web Platform",
    subtitle: "Responsive marketplace experience (2023)",
    label: "Tech Stack",
    description:
      "Built a customer-facing shopping experience with React, Bootstrap, REST API integration, secure payment workflow planning, and an admin-oriented structure for catalogue and order management.",
    primaryText: "View Summary",
    primaryHref: "#contact",
    image: "/images/architecture.png",
    alt: "E-commerce Web Platform",
  },
  {
    id: "2",
    index: "03",
    title: "Expense Analysis & Management App",
    subtitle: "Full-stack analytics and budgeting tool (2024)",
    label: "Tech Stack",
    description:
      "Combined React, Firebase, and Python-based analysis features to help users track spending, review trends, and work with a cleaner decision-making view of personal finance data.",
    primaryText: "View Summary",
    primaryHref: "#contact",
    image: "/images/dashboard.png",
    alt: "Expense Analysis and Management App",
  },
  {
    id: "3",
    index: "04",
    title: "Advanced AI Chatbot",
    subtitle: "Conversational assistant prototype (2024)",
    label: "Highlights",
    description:
      "Developed a chatbot workflow focused on practical prompt handling, conversational response design, and user guidance, with supporting documentation to improve usability and onboarding.",
    primaryText: "Explore Use Case",
    primaryHref: "#contact",
    image: "/images/insuresmart-ai.png",
    alt: "Advanced AI Chatbot",
  },
  {
    id: "4",
    index: "05",
    title: "Project Management System",
    subtitle: "C#/.NET productivity system (2025)",
    label: "Tech Stack",
    description:
      "Created a structured desktop-style management system using C#/.NET and SQL Server with CRUD workflows, modular architecture, and test-oriented thinking for maintainable business operations.",
    primaryText: "View Summary",
    primaryHref: "#contact",
    image: "/images/architecture.png",
    alt: "Project Management System",
  },
];

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
          {projects.map((project) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.index}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.subtitle}</p>
                  </div>
                </div>
                <h4>{project.label}</h4>
                <p>{project.description}</p>
                <div className="work-buttons">
                  {project.secondaryText && project.secondaryHref && (
                    <a href={project.secondaryHref} className="btn-secondary">
                      {project.secondaryText}
                    </a>
                  )}
                  <a href={project.primaryHref} className="btn-primary">
                    {project.primaryText}
                  </a>
                </div>
              </div>
              <WorkImage image={project.image} alt={project.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

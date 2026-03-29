import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  label: string;
  year: string;
  status: string;
  domain: string;
  description: string;
  stack: string[];
  impact: string;
  highlights: string[];
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  tertiaryText?: string;
  tertiaryHref?: string;
  image: string;
  alt: string;
};

const projects = [
  {
    id: "0",
    index: "01",
    title: "Smart Traffic Signal Simulation",
    subtitle: "Adaptive control engine for congestion experiments",
    label: "AI + Data Systems",
    year: "2025",
    status: "Completed",
    domain: "Smart Mobility",
    description:
      "Built a modular simulation platform with rule-based adaptation, queue modeling, and experiment replay to validate traffic policy decisions before deployment.",
    stack: ["Python", "Simulation", "Pandas", "Pytest"],
    impact: "Cut simulated intersection wait-time trends and shipped a reusable experiment framework for future smart-city pilots.",
    highlights: [
      "Event-driven control loop with configurable light phases",
      "Scenario replay support for regression-style benchmark comparisons",
      "Automated test coverage for traffic-state transitions",
    ],
    primaryText: "GitHub Repo",
    primaryHref: "https://github.com/nishant2-1/Traffic-light-Simulator",
    secondaryText: "Case Study",
    secondaryHref: "#about",
    image: "/images/node2.webp",
    alt: "Smart Traffic Light Control and Simulation App",
  },
  {
    id: "1",
    index: "02",
    title: "E-commerce Platform",
    subtitle: "Full-stack storefront and order workflow",
    label: "Frontend + Backend",
    year: "2023",
    status: "Completed",
    domain: "Web Commerce",
    description:
      "Developed a responsive commerce experience with API-driven catalog management, role-based admin controls, and resilient checkout flow design.",
    stack: ["React", "Node.js", "REST APIs", "MongoDB"],
    impact: "Improved product discovery and made checkout flows more reliable with architecture ready for CI and cloud rollout.",
    highlights: [
      "Role-aware admin tooling for products and orders",
      "Reusable API patterns for catalog and cart operations",
      "Conversion-focused UI flow from listing to payment",
    ],
    primaryText: "GitHub Profile",
    primaryHref: "https://github.com/nishant2-1?tab=repositories",
    secondaryText: "Discuss Project",
    secondaryHref: "#contact",
    image: "/images/react2.webp",
    alt: "E-commerce Web Platform",
  },
  {
    id: "2",
    index: "03",
    title: "Expense Intelligence Dashboard",
    subtitle: "Real-time personal finance insights",
    label: "Data + Product Thinking",
    year: "2024",
    status: "Completed",
    domain: "FinTech",
    description:
      "Created a tracking and analytics app that turns raw transactions into monthly budgets, trends, and anomaly signals through intuitive visual reporting.",
    stack: ["React", "Firebase", "Python", "Charts"],
    impact: "Reduced manual budget review time and improved visibility into spending anomalies with structured analytics views.",
    highlights: [
      "Automated category grouping for day-to-day expenses",
      "Trend cards for weekly and monthly budget tracking",
      "Visualization-first layout for rapid financial decisions",
    ],
    primaryText: "GitHub Profile",
    primaryHref: "https://github.com/nishant2-1?tab=repositories",
    secondaryText: "Discuss Project",
    secondaryHref: "#contact",
    image: "/images/typescript.webp",
    alt: "Expense Analysis and Management App",
  },
  {
    id: "3",
    index: "04",
    title: "Bradford Council Asset & Schools Portal",
    subtitle: "Secure civic operations and mapping platform",
    label: "Security + Public Data",
    year: "2026",
    status: "In Delivery",
    domain: "GovTech",
    description:
      "Delivered a civic portal with secure authentication, role-driven access controls, map-based asset visibility, and integrated school performance datasets.",
    stack: ["PHP", "MySQL", "Google Maps API", "2FA"],
    impact: "Mapped 380+ schools with governance-ready logging and 2FA-protected access for high-trust operational workflows.",
    highlights: [
      "Role-based administration with security audit trails",
      "Geo-visualized asset mapping for operational planning",
      "Integrated data workflows for school performance analysis",
    ],
    secondaryText: "Private — Contact to Discuss",
    secondaryHref: "#contact",
    image: "/images/mysql.webp",
    alt: "Bradford Council Asset and Schools Portal",
  },
  {
    id: "4",
    index: "05",
    title: "Project Management System",
    subtitle: "Lifecycle and workflow automation suite",
    label: "Enterprise Application",
    year: "2025",
    status: "Completed",
    domain: "SaaS Operations",
    description:
      "Engineered a modular management system with milestone tracking, workflow approvals, and permission-aware operations designed for long-term team adoption.",
    stack: ["C#", ".NET", "SQL Server", "xUnit"],
    impact: "Improved delivery consistency and reduced regression risk through better service boundaries and testable architecture.",
    highlights: [
      "Role-sensitive workflow states and approval transitions",
      "Structured service layer for maintainability at scale",
      "Test-oriented implementation for safer feature expansion",
    ],
    primaryText: "GitHub Profile",
    primaryHref: "https://github.com/nishant2-1?tab=repositories",
    secondaryText: "Discuss Project",
    secondaryHref: "#contact",
    image: "/images/javascript.webp",
    alt: "Project Management System",
  },
  {
    id: "5",
    index: "06",
    title: "Handwritten Digit Recognition",
    subtitle: "KNN pipeline with FastAPI + Streamlit",
    label: "Machine Learning",
    year: "2025",
    status: "Completed",
    domain: "AI/ML",
    description:
      "MNIST digit classifier with normalized 784-vector preprocessing and tuned KNN via GridSearchCV + 5-fold CV.",
    stack: [
      "Python",
      "scikit-learn",
      "FastAPI",
      "Streamlit",
      "Docker",
      "GitHub Actions",
    ],
    impact:
      "~95% test accuracy and sub-10ms inference with reproducible CI + Docker execution.",
    highlights: [
      "Modular training flow with KNN + GridSearchCV + KFold CV",
      "Evaluated with accuracy, F1, confusion matrix, and latency",
      "Deployed as FastAPI backend and Streamlit demo with CI + Docker",
    ],
    primaryText: "Live Demo",
    primaryHref: "https://handwrittendigitreco-43w78vcarhyyytvn9xnbll.streamlit.app",
    secondaryText: "API Docs",
    secondaryHref: "https://handwrittendigitrecognization.vercel.app/docs#/default/predict_predict_post",
    tertiaryText: "GitHub Repo",
    tertiaryHref: "https://github.com/nishant2-1/HANDWRITTENDIGITRECO",
    image: "/images/mnist-digit-recognition-ui.webp",
    alt: "Handwritten Digit Recognition project",
  },
] as Project[];

const Work = () => {
  useEffect(() => {
    const getTranslateX = () => {
      const flex = document.querySelector(".work-flex") as HTMLElement | null;
      const container = document.querySelector(".work-container") as HTMLElement | null;
      const boxes = Array.from(
        document.querySelectorAll(".work-box")
      ) as HTMLElement[];
      if (!flex || !container || boxes.length === 0) return 0;

      const lastBox = boxes[boxes.length - 1];
      const cardEdge = lastBox.offsetLeft + lastBox.offsetWidth;
      return Math.max(0, cardEdge - container.clientWidth + 24);
    };

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        // Keep the section pinned until horizontal movement fully completes.
        end: () => `+=${getTranslateX() + 80}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: () => -getTranslateX(),
      ease: "none",
    });

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
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
                <div className="work-meta" aria-label={`${project.title} metadata`}>
                  <span>{project.year}</span>
                  <span>{project.status}</span>
                  <span>{project.domain}</span>
                </div>
                <p className="work-description">{project.description}</p>
                <div className="work-stack" aria-label={`${project.title} stack`}>
                  {project.stack.map((item) => (
                    <span key={`${project.id}-${item}`}>{item}</span>
                  ))}
                </div>
                <p className="work-impact">Impact: {project.impact}</p>
                <ul className="work-highlights" aria-label={`${project.title} highlights`}>
                  {project.highlights.slice(0, 2).map((highlight) => (
                    <li key={`${project.id}-${highlight}`}>{highlight}</li>
                  ))}
                </ul>
                <div className="work-buttons">
                  {project.tertiaryText && project.tertiaryHref && (
                    <a
                      href={project.tertiaryHref}
                      className="btn-secondary"
                      target={project.tertiaryHref.startsWith("http") ? "_blank" : undefined}
                      rel={project.tertiaryHref.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {project.tertiaryText}
                    </a>
                  )}
                  {project.secondaryText && project.secondaryHref && (
                    <a
                      href={project.secondaryHref}
                      className="btn-secondary"
                      target={project.secondaryHref.startsWith("http") ? "_blank" : undefined}
                      rel={project.secondaryHref.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {project.secondaryText}
                    </a>
                  )}
                  {project.primaryText && project.primaryHref && (
                    <a
                      href={project.primaryHref}
                      className="btn-primary"
                      target={project.primaryHref.startsWith("http") ? "_blank" : undefined}
                      rel={project.primaryHref.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {project.primaryText}
                    </a>
                  )}
                </div>
              </div>
              <WorkImage
                image={project.image}
                alt={project.alt}
                link={
                  project.primaryHref && project.primaryHref.startsWith("http")
                    ? project.primaryHref
                    : undefined
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

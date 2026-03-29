import "./styles/TechStack.css";
import { CSSProperties, useMemo, useState } from "react";

type StackGroup = {
  title: string;
  skills: string[];
};

const stackGroups: StackGroup[] = [
  {
    title: "Frontend & UI",
    skills: [
      "React.js",
      "Redux.js",
      "Vue.js",
      "JavaScript",
      "HTML5",
      "Cascading Style Sheets (CSS)",
      "Tailwind CSS",
      "Figma (Software)",
      "UIX",
      "HTML/CSS Validation",
      "Chart.js",
      "D3.js",
    ],
  },
  {
    title: "Backend, Frameworks & Data",
    skills: [
      "Node.js",
      "Express.js",
      "Python (FastAPI/Django)",
      "PHP Frameworks",
      "ASP.NET Core",
      ".NET Core",
      ".NET Framework",
      "Java",
      "C#",
      "SQL",
      "PostgreSQL",
      "XAMPP",
      "PhpMyAdmin",
    ],
  },
  {
    title: "Mobile, Cloud & DevOps",
    skills: [
      "Flutter",
      "Android Development",
      "iOS Development",
      "Amazon Web Services (AWS)",
      "Docker",
      "DevOps",
      "Git",
      "xAI",
    ],
  },
  {
    title: "Engineering & Delivery",
    skills: [
      "Algorithms",
      "Data Structures",
      "Systems Design",
      "Agile Project Management",
      "Project Management",
      "Leadership",
      "Public Speaking",
      "Community Development",
    ],
  },
  {
    title: "Academic Context",
    skills: [
      "Nottingham Trent University",
      "Walchand Institute of Technology, Solapur",
    ],
  },
];

const TechStack = () => {
  const [alignedView, setAlignedView] = useState(false);

  const allSkills = useMemo(
    () =>
      Array.from(new Set(stackGroups.flatMap((group) => group.skills))).filter(
        Boolean
      ),
    []
  );

  return (
    <section className="techstack-section" id="tech-stack">
      <div className="section-container techstack-layout">
        <h2>
          Tech <span>Stack</span>
        </h2>
        <p className="tech-subtitle">
          Tap the button to switch between creative bubble view and aligned
          professional view.
        </p>

        <div className="tech-controls">
          <button
            type="button"
            className="tech-toggle-btn"
            onClick={() => setAlignedView((prev) => !prev)}
          >
            {alignedView ? "Show Bubble View" : "Align Tech Stack"}
          </button>
          <span className="tech-view-label">
            {alignedView ? "Aligned" : "Bubble"} view
          </span>
        </div>

        <div className={`tech-bubble-board ${alignedView ? "aligned" : "bubble"}`}>
          {allSkills.map((skill, index) => {
            const angle = ((index * 47) % 360) * (Math.PI / 180);
            const radius = 14 + (index % 6) * 4;
            const offsetX = Math.cos(angle) * radius;
            const offsetY = Math.sin(angle) * radius;

            return (
              <button
                className="tech-bubble-chip"
                type="button"
                key={skill}
                style={
                  {
                    "--tx": `${offsetX}px`,
                    "--ty": `${offsetY}px`,
                  } as CSSProperties
                }
              >
                {skill}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

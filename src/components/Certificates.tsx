import "./styles/Certificates.css";

type CertificateItem = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialUrl: string;
};

const certificates: CertificateItem[] = [
  {
    title: "Introduction to AI",
    issuer: "Google Career Certificates / Coursera",
    date: "March 10, 2026",
    description:
      "Foundational AI certification covering core concepts, practical applications, and AI-driven problem solving in modern products.",
    credentialUrl: "https://coursera.org/verify/YL44T644DP35",
  },
  {
    title: "Build a Free Website with WordPress",
    issuer: "Coursera Project Network",
    date: "February 22, 2026",
    description:
      "Hands-on project certificate focused on rapid website development, WordPress setup, content structuring, and deployment basics.",
    credentialUrl: "https://coursera.org/verify/MFTS30K2M80M",
  },
  {
    title: "Java 11 Essentials",
    issuer: "Infosys Springboard",
    date: "May 13, 2024",
    description:
      "Covers Java fundamentals, object-oriented programming principles, and practical coding foundations for enterprise-ready development.",
    credentialUrl: "https://verify.onwingspan.com",
  },
  {
    title: "Continuous Integration and Delivery - DevOps",
    issuer: "Infosys Springboard",
    date: "November 23, 2023",
    description:
      "Certificate focused on CI/CD concepts, build and release automation, and DevOps practices that improve delivery speed and reliability.",
    credentialUrl: "https://verify.onwingspan.com",
  },
  {
    title: "Introduction to Agile Methodology",
    issuer: "Infosys Springboard",
    date: "November 23, 2023",
    description:
      "Highlights Agile fundamentals including iterative delivery, sprint planning, team collaboration, and customer-focused execution.",
    credentialUrl: "https://verify.onwingspan.com",
  },
  {
    title: "DevOps Foundation Certification",
    issuer: "Infosys Springboard",
    date: "October 31, 2023",
    description:
      "Demonstrates understanding of DevOps culture, automation mindset, and the integration of development and operations workflows.",
    credentialUrl: "https://verify.onwingspan.com",
  },
];

const Certificates = () => {
  return (
    <section className="certificates-section section-container" id="certificates">
      <div className="certificates-copy">
        <p className="certificates-eyebrow">Certificates</p>
        <h2>
          Verified <span>Credentials</span>
        </h2>
        <p className="certificates-lead">
          Each certificate card includes a summary and direct hyperlinks so
          visitors can instantly open and verify the credential page. The
          latest learning is shown first so recruiters can quickly assess
          current upskilling and technical depth.
        </p>
      </div>

      <div className="certificates-grid">
        {certificates.map((item) => (
          <article className="certificate-card" key={item.title}>
            <div className="certificate-main">
              <p className="certificate-label">Certificate</p>
              <h3>{item.title}</h3>
              <p className="certificate-meta">
                {item.issuer} | {item.date}
              </p>
              <p className="certificate-description">{item.description}</p>
              <a
                href={item.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                Open Certificate
              </a>
              <a
                href={item.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-inline-url"
              >
                Verify Link: {item.credentialUrl}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
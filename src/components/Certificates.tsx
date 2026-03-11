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
    title: "Cloud Fundamentals Certification",
    issuer: "Microsoft / Azure",
    date: "Add Date",
    description:
      "Foundational certification focused on cloud concepts, security, pricing, and deployment models for modern application delivery.",
    credentialUrl: "https://www.linkedin.com/in/nishant-landage-76866a2b3/",
  },
  {
    title: "Software Testing & QA Certification",
    issuer: "Professional Learning Platform",
    date: "Add Date",
    description:
      "Covers core QA practices including test planning, defect lifecycle handling, automation basics, and release quality standards.",
    credentialUrl: "https://www.linkedin.com/in/nishant-landage-76866a2b3/",
  },
  {
    title: "AI / Data Analytics Certification",
    issuer: "Professional Learning Platform",
    date: "Add Date",
    description:
      "Demonstrates practical understanding of AI-assisted workflows, data interpretation, and analytics-driven decision making.",
    credentialUrl: "https://www.linkedin.com/in/nishant-landage-76866a2b3/",
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
          visitors can instantly open and verify the credential page.
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
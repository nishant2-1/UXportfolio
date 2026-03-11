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

const getQrCodeUrl = (url: string) =>
  `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
    url
  )}`;

const Certificates = () => {
  return (
    <section className="certificates-section section-container" id="certificates">
      <div className="certificates-copy">
        <p className="certificates-eyebrow">Certificates</p>
        <h2>
          Verified <span>Credentials</span>
        </h2>
        <p className="certificates-lead">
          Each card includes a certificate summary, direct verification link,
          and a QR code. Tapping the QR or the button opens the certificate
          page in a new tab.
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
            </div>

            <a
              href={item.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-qr-link"
            >
              <img
                src={getQrCodeUrl(item.credentialUrl)}
                alt={`QR code for ${item.title}`}
              />
              <span>Scan QR</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
import "./styles/Certificates.css";

const certificatesUrl =
  "https://www.linkedin.com/in/nishant-landage-76866a2b3/";

const certificateTracks = [
  {
    title: "Cloud & Software Engineering",
    description:
      "Reserved for Azure, backend engineering, and software design certificates.",
  },
  {
    title: "AI, Data & Automation",
    description:
      "Reserved for AI/ML, Python, analytics, and automation-related credentials.",
  },
  {
    title: "Testing, Agile & Delivery",
    description:
      "Reserved for QA, Scrum, SDLC, and delivery-focused learning achievements.",
  },
];

const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
  certificatesUrl
)}`;

const Certificates = () => {
  return (
    <section className="certificates-section section-container" id="certificates">
      <div className="certificates-copy">
        <p className="certificates-eyebrow">Certificates</p>
        <h2>
          Learning <span>& Credentials</span>
        </h2>
        <p className="certificates-lead">
          This section is ready for my certification showcase. It can display
          direct credential links, badge screenshots, or a shared certificate
          folder as I keep expanding my cloud, AI, and software engineering
          skill set.
        </p>
        <div className="certificates-grid">
          {certificateTracks.map((item) => (
            <article className="certificate-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>

      <aside className="certificates-qr-card">
        <span className="certificates-tag">Quick Access</span>
        <h3>Scan For Profile & Future Certifications</h3>
        <p>
          The QR currently opens my professional profile. It can be switched to
          a Google Drive folder, certificate wallet, or dedicated credentials
          page in one edit once all certificates are organized.
        </p>
        <a
          href={certificatesUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="certificates-qr-link"
        >
          <img src={qrCodeUrl} alt="QR code for Nishant Landage profile" />
        </a>
        <a
          href={certificatesUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="certificates-button"
        >
          Open Profile
        </a>
      </aside>
    </section>
  );
};

export default Certificates;
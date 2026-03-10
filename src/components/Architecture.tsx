import "./styles/Architecture.css";

const Architecture = () => {
  return (
    <div className="architecture-section" id="architecture">
      <div className="section-container">
        <h2>
          Full-Stack <span>System Architecture</span>
        </h2>
        <p className="arch-subtitle">
          End-to-end scalable architecture for AI-driven fintech applications
        </p>

        <div className="architecture-diagram">
          {/* Frontend Layer */}
          <div className="arch-layer">
            <h3>Frontend Layer (UI/UX)</h3>
            <div className="arch-components">
              <div className="component">React/Vue/Angular SPA</div>
              <div className="component">TypeScript • D3.js • Chart.js</div>
              <div className="component">SASS/Tailwind • WCAG</div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="arch-arrow">↓</div>

          {/* API Gateway & Services Layer */}
          <div className="arch-layer">
            <h3>Backend Layer (API & Services)</h3>
            <div className="arch-components">
              <div className="component">Node.js/Express REST APIs</div>
              <div className="component">Python/Flask Microservices</div>
              <div className="component">JWT/2FA Authentication</div>
              <div className="component">WebSocket Real-time</div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="arch-arrow">↓</div>

          {/* Data & AI Layer */}
          <div className="arch-layer">
            <h3>AI/ML & Data Processing</h3>
            <div className="arch-components">
              <div className="component">OpenAI API Integration</div>
              <div className="component">Predictive Analytics Engine</div>
              <div className="component">Data Pipeline Processing</div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="arch-arrow">↓</div>

          {/* Database Layer */}
          <div className="arch-layer">
            <h3>Database & Storage</h3>
            <div className="arch-components">
              <div className="component">MySQL Relational DB</div>
              <div className="component">MongoDB NoSQL</div>
              <div className="component">Redis Caching</div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="arch-features">
          <div className="feature-box">
            <h4>🎨 Frontend & UI/UX</h4>
            <ul>
              <li>Figma to production implementation</li>
              <li>React/Vue component architecture</li>
              <li>D3.js/Chart.js data visualization</li>
              <li>WCAG accessibility & responsive design</li>
            </ul>
          </div>

          <div className="feature-box">
            <h4>🔧 Backend Development</h4>
            <ul>
              <li>Node.js/Express REST APIs</li>
              <li>Python/Flask microservices</li>
              <li>Database modeling & optimization</li>
              <li>WebSocket real-time connections</li>
            </ul>
          </div>

          <div className="feature-box">
            <h4>🤖 AI/ML Integration</h4>
            <ul>
              <li>OpenAI API implementation</li>
              <li>Predictive model deployment</li>
              <li>Chat-to-Insight workflows</li>
              <li>Explainable AI interfaces</li>
            </ul>
          </div>

          <div className="feature-box">
            <h4>🔐 Security & DevOps</h4>
            <ul>
              <li>JWT, 2FA, MFA/OIDC authentication</li>
              <li>SQL injection & XSS prevention</li>
              <li>Docker containerization</li>
              <li>CI/CD pipeline integration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Architecture;

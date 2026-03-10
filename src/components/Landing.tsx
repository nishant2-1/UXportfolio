import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello, I'm</h2>
            <h1>
              NISHANT NAVANTH
              <br />
              <span>LANDAGE</span>
            </h1>
            <div className="visa-badge">
              <p>
                Software Developer | Full-Stack Developer | Building scalable,
                secure, and AI-powered applications
              </p>
            </div>
          </div>
          <div className="landing-info">
            <h3>Specialized in</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Full-Stack Engineering</div>
              <div className="landing-h2-2">Cloud & AI Integration</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Frontend, Backend, Testing</div>
              <div className="landing-h2-info-1">Secure Scalable Software</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;

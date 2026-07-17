import "./About.css";
import {
  FaBullseye,
  FaAward,
  FaCloud,
  FaLightbulb,
} from "react-icons/fa";

function About() {
  return (
    <section className="about section" id="about">

      <div className="section-header">
        <span>Get To Know Me</span>
        <h2>About Me</h2>
      </div>

      <div className="about-container">

        {/* Left */}

        <div className="about-left">

          <h3>Who I Am</h3>

          <p>
            I'm <strong>Apoorva Ghanate</strong>, a Bachelor of Engineering
            graduate in Information Technology from Mumbai University,
            passionate about designing and developing modern web applications 
            while continuously expanding my knowledge in Full Stack Development, 
            Cloud Computing, and Generative AI.
          </p>

          <div className="career-objective">

            <h3>
              <FaBullseye /> Career Objective
            </h3>

            <p>
              Seeking an opportunity as a Software Engineer where I can apply my
              technical skills, contribute to impactful projects, and grow
              through continuous learning and collaboration.
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="about-right">

          <div className="highlight-card">

            <FaAward className="highlight-icon"/>

            <h4>AWS PartyRock Hackathon</h4>

            <p>Top 20 Finalist</p>

          </div>

          <div className="highlight-card">

            <FaCloud className="highlight-icon"/>

            <h4>Currently Learning</h4>

            <p>Full Stack Development, Cloud Computing & Generative AI</p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
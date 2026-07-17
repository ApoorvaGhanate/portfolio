import "./Hero.css";
import profile from "../../assets/Apoorva_Photo.png";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <span className="hero-tag">
          Hello, I'm
        </span>

        <h1>Apoorva Ghanate</h1>

        <h2>
          Aspiring Software Engineer
        </h2>

        <h3>
          Full Stack Developer | Cloud & GenAI Enthusiast
        </h3>

        <p>
          Passionate about creating user-friendly web applications and continuously expanding my skills in Full Stack Development, Cloud Computing, and Generative AI.
        </p>

        <div className="hero-buttons">

          <a
            href="/Apoorva_FSD_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Download Resume
          </a>

          <a
            href="#projects"
            className="btn-outline"
          >
            View Projects
          </a>

        </div>

        <div className="social-icons">

          <a
            href="https://github.com/ApoorvaGhanate"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/apoorva-ghanate-015182314/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:ghanateapoorvak06@gmail.com">
            <FaEnvelope />
          </a>

        </div>

      </div>

      <div className="hero-right">

        <img
          src={profile}
          alt="Apoorva Ghanate"
        />

      </div>

    </section>
  );
}

export default Hero;
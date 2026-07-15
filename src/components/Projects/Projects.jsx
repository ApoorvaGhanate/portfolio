import "./Projects.css";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <section className="projects section" id="projects">

      <div className="section-header">
        <span>My Work</span>
        <h2>Projects</h2>
      </div>

      {/* Featured Project */}

      <div className="featured-project">

        <div className="featured-content">

          <span className="featured-badge">
            ⭐ Featured Project
          </span>

          <h2>CrisisIQ</h2>

          <p>
            CrisisIQ is an AI-powered emergency response platform developed
            using AWS PartyRock. It helps users transform emergency situations
            into actionable insights by leveraging Generative AI to provide
            quick guidance and recommendations during critical scenarios.
          </p>

          <div className="project-tech">

            <span>AWS PartyRock</span>
            <span>Generative AI</span>
            <span>Prompt Engineering</span>

          </div>

          <div className="project-buttons">

            <a
              href="https://partyrock.aws/u/apoorva2005/Vl5IPhVnu/CrisisIQ%253A-Turning-Emergencies-into-Actionable-Insights"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>

          </div>

        </div>

      </div>

      {/* Other Projects */}

      <div className="projects-grid">

        <div className="project-card">

          <h3>Lead Management CRM</h3>

          <p>
            A CRM application that helps manage leads efficiently with
            authentication, lead tracking and CRUD operations.
          </p>

          <div className="project-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>

          <a
            href="https://github.com/ApoorvaGhanate/Lead-Management-CRM"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            GitHub
          </a>

        </div>

        <div className="project-card">

          <h3>Stock Market Prediction</h3>

          <p>
            Machine Learning project that predicts stock prices using historical
            data and visualization techniques.
          </p>

          <div className="project-tech">
            <span>Python</span>
            <span>Machine Learning</span>
            <span>Pandas</span>
          </div>

          <a
            href="https://github.com/ApoorvaGhanate/Stock-Market-Prediction-ML"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            GitHub
          </a>

        </div>

        <div className="project-card">

          <h3>Internship Portal</h3>

          <p>
            A responsive internship portal where students can browse internship
            opportunities and manage applications.
          </p>

          <div className="project-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
          </div>

          <a
            href="https://github.com/ApoorvaGhanate/Internship-Portal"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            GitHub
          </a>

        </div>

      </div>

    </section>
  );
}

export default Projects;
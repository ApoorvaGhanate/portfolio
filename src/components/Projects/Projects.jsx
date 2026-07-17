import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <section className="projects section" id="projects">

      <div className="section-header">
        <span>My Work</span>
        <h2>Projects</h2>
      </div>

      <div className="projects-grid">

        {/* CrisisIQ */}
        <div className="project-card">
          <h3>CrisisIQ</h3>

          <p>
            AI-powered emergency response platform built using AWS PartyRock
            that transforms emergency situations into actionable insights
            using Generative AI.
          </p>

          <div className="project-tech">
            <span>AWS PartyRock</span>
            <span>Generative AI</span>
            <span>Prompt Engineering</span>
          </div>

          <a
            href="https://partyrock.aws/u/apoorva2005/Vl5IPhVnu/CrisisIQ%253A-Turning-Emergencies-into-Actionable-Insights"
            target="_blank"
            rel="noreferrer"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>
        </div>

        {/* CRM */}
        <div className="project-card">
          <h3>Lead Management CRM</h3>

          <p>
            A CRM application that helps manage leads efficiently with
            authentication, lead tracking and CRUD operations to manage sales leads for small businesses.
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

        {/* Stock Market */}
        <div className="project-card">
          <h3>Stock Market Prediction</h3>

          <p>
            Machine Learning project that predicts stock prices using
            historical data and visualization techniques.
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

        {/* Internship Portal */}
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
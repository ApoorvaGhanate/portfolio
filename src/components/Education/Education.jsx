import "./Education.css";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section className="education section" id="education">

      <div className="section-header">
        <span>Education</span>
        <h2>Academic Journey</h2>
      </div>

      <div className="education-card">

        <div className="edu-icon">
          <FaGraduationCap />
        </div>

        <div className="edu-content">

          <h3>Bachelor of Engineering (Information Technology)</h3>

          <h4>Konkan Gyanpeeth College of Engineering</h4>

          <p>2022 - 2026</p>

          <span>CGPI : 7.68 | Mumbai University</span>

        </div>

      </div>

    </section>
  );
}

export default Education;
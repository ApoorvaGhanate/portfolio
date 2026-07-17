import "./Skills.css";

import {
FaReact,
FaNodeJs,
FaPython,
FaGitAlt
} from "react-icons/fa";

import { FaCss3Alt } from "react-icons/fa6";

import{
SiJavascript,
SiExpress,
SiMongodb,
SiMysql,
SiHtml5,
SiTailwindcss,
SiPostman,
SiGithub,
SiVercel
} from "react-icons/si";

function Skills(){

return(

<section className="skills section" id="skills">

<div className="section-header">

<span>My Expertise</span>

<h2>Skills</h2>

</div>

<div className="skills-container">

<div className="skill-box">

<h3>Frontend</h3>

<ul>

<li><SiHtml5/> HTML5</li>

<li><FaCss3Alt /> CSS3</li>

<li><SiJavascript/> JavaScript</li>

<li><FaReact/> React.js</li>

</ul>

</div>

<div className="skill-box">

<h3>Backend</h3>

<ul>

<li><FaNodeJs/> Node.js</li>

<li><SiExpress/> Express.js</li>

<li><FaPython/> Python</li>

</ul>

</div>



<div className="skill-box">

<h3>Database</h3>

<ul>

<li><SiMongodb/> MongoDB</li>

<li><SiMysql/> MySQL</li>

</ul>

</div>

<div className="skill-box">

<h3>Tools</h3>

<ul>

<li><FaGitAlt/> Git</li>

<li><SiGithub/> GitHub</li>

<li><SiPostman/> Postman</li>

<li><SiVercel/> Vercel</li>

</ul>

</div>

</div>

</section>

)

}

export default Skills;
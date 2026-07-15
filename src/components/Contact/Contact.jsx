import "./Contact.css";

import {
FaEnvelope,
FaGithub,
FaLinkedin,
} from "react-icons/fa";

function Contact(){

return(

<section className="contact section" id="contact">

<div className="section-header">

<span>Let's Connect</span>

<h2>Contact Me</h2>

</div>

<div className="contact-container">

<div className="contact-card">

<FaEnvelope/>

<h3>Email</h3>

<p>ghanateapoorvak06@gmail.com</p>

</div>


<div className="contact-card">

<FaGithub/>

<h3>GitHub</h3>

<a
href="https://github.com/ApoorvaGhanate"
target="_blank"
rel="noreferrer"
>

Visit Profile

</a>

</div>

<div className="contact-card">

<FaLinkedin/>

<h3>LinkedIn</h3>

<a
href="https://www.linkedin.com/in/apoorva-ghanate-015182314/"
target="_blank"
rel="noreferrer"
>

Visit Profile

</a>

</div>

</div>

</section>

)

}

export default Contact;
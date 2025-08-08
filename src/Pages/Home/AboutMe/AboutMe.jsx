
import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import useScrollAnimation from '../../Animation/useScrollAnimation';


export default function AboutMe() {
  const CV = process.env.PUBLIC_URL + "/img/CV.pdf";

const [ref, isVisible] = useScrollAnimation();
  return (
    <section id="AboutMe"  ref={ref}
      className={` about-section section-animation ${isVisible ? 'visible' : ''}`}>
      <div className="aboutme-box">
        <h2 className="about-title">About Me</h2>

        <p className="about-description">
          Hello!<br/>
            I am a software engineering student specializing in mobile application development.
            Passionate about creating innovative and user-friendly apps, I thrive on solving complex problems
            and transforming ideas into functional digital solutions. My portfolio showcases projects that
            highlight my skills in designing and building mobile applications with a focus on performance and creativity.
        </p>

        <div className="aboutme-actions">
        
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/kiram-ben-ali-2301972a3/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin style={{ color: "#10a2f1" }} />
            </a>
            <a href="https://wa.me/21628093448" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp style={{ color: "#10a2f1" }}/>
            </a>
            <a href="https://github.com/kirambenali" target="_blank" rel="noopener noreferrer">
              <FaGithub style={{ color: "#10a2f1" }}/>
            </a>
            
          </div>
          <a href={CV} download className="btn-download">
            Download my CV
          </a>
        </div>
      </div>
    </section>
  );
}

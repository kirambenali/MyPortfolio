
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
         I’m Kiram Ben Ali, a third-year Software Engineering student specializing in Artificial Intelligence, intelligent agents, automation, and mobile app development.
I have experience in designing intuitive applications and intelligent solutions that are performance-oriented and focused on user experience (UX).
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

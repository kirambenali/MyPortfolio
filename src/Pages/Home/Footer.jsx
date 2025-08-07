import React from "react";
import { Link } from "react-scroll";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="footer--container"
   
    >
     
      {/* Navigation Links */}
      <div className="footer--nav">
        {["Home", "AboutMe","Experience","Skills","Projects","Contact",].map((section, idx) => (
          <Link
            key={idx}
            to={section === "Projects" ? "MyPortfolio" : section}
            smooth={true}
            offset={-70}
            duration={500}
            className="footer--link"
            activeClass="navbar--active-content"
            spy={true}
          >
            {section}
          </Link>
        ))}
      </div>

      {/* Social & Contact Row */}
      <div className="footer--content">
        <div className="footer--contact">
          <div>
            <FaEnvelope className="footer--icon" />
           <span style={{ color: "white" ,fontSize:'20px'}}>benalikiram@gmail.com</span>
          </div>
          <div>
            <FaMapMarkerAlt className="footer--icon" />
            <span style={{ color: "white",fontSize:'20px' }}>Résidence Belvédère, Bilel Ibn Rabah Street, El Menzah 6, Tunis, Tunisia</span>
          </div>
          <div>
            <FaPhone className="footer--icon" />
            <span style={{ color: "white",fontSize:'20px' }}>28 093 448</span>
          </div>
        </div>

        <div className="footer--social">
          <a href="https://www.linkedin.com/in/kiram-ben-ali-2301972a3/">
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.instagram.com/kiram_ben_ali/">
            <FaInstagram size={30} />
          </a>
          <a href="https://github.com/kirambenali">
            <FaGithub size={30} />
          </a>
        </div>
      </div>
      <div className="footer--bottom">
        <p> © 2025 Kiram Ben Ali. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

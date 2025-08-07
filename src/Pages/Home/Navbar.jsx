import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useLocation } from 'react-router-dom';
function Navbar() {
    const [navActive, setnavActive] = useState(false); 
    const location = useLocation();
    
    // Appeler tous les hooks en premier
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                setnavActive(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            setnavActive(false);
        }
    }, []);

    // Puis, conditionnellement, décider de ce qu'on rend
    if (location.pathname !== '/') {
        return null;
    }

    const toppleNav = () => {
        setnavActive(!navActive); // Bascule l'état
    };

    const closeMenu = () => {
        setnavActive(false); // Ferme le menu
    };

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
           
            <a className={`nav-hamburger ${navActive ? "active" : ""}`} onClick={toppleNav}>
                <span className="nav-hamburger-line"></span>
                <span className="nav-hamburger-line"></span>
                <span className="nav-hamburger-line"></span>
            </a> 
            <div className={`navbar-items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="Home" className="navbar--content">
                            Home
                        </Link>
                    </li>
                      <li>
                        <Link onClick={closeMenu} activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="AboutMe" className="navbar--content">
                            About Me
                        </Link>
                    </li>
                      <li>
                        <Link onClick={closeMenu} activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="Experience" className="navbar--content">
                            Experience
                        </Link>
                    </li>
                     <li>
                        <Link onClick={closeMenu} activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="Skills" className="navbar--content">
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="MyPortfolio" className="navbar--content">
                            Project
                        </Link>
                    </li>
                   
                  
                </ul>
            </div>
           <div className="btn-container">
  <Link
    onClick={closeMenu}
    activeClass="navbar-active-content"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    to="Contact"
    className="btn-github"
  >
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span className="btn-text">Contact Me</span>
  </Link>
</div>

        </nav>
    );
}

export default Navbar;

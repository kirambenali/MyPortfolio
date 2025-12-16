
import { useRef, useEffect, useState } from "react";
import { Link } from 'react-scroll';
import './StarBorder/StarBorder.css';
import './TechTicker.css';
import useScrollAnimation from '../../Animation/useScrollAnimation';
import {
  SiNextdotjs, SiAngular, SiVuedotjs, SiTypescript, SiJavascript, SiTailwindcss, SiFlutter, SiSwift,
  SiNotion, SiNodedotjs, SiPython, SiDjango, SiFastapi, SiDocker, SiMongodb, SiPostgresql
} from 'react-icons/si';
export default function HeroSection() {

  const splineRef = useRef(null);
  const [ref, isVisible] = useScrollAnimation();
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Mobile Development", "AI Agents", "AI Automation", "UI/UX Design"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
    };

    if (splineRef.current) {
      splineRef.current.addEventListener("wheel", handleScroll);
    }

    return () => {
      if (splineRef.current) {
        splineRef.current.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);
  return (
    <section
      id="Home"

      ref={ref}
      className={` hero-section section-animation ${isVisible ? 'visible' : ''}`}
    >






      <div className="hero-section-content-box">
        <div className="hero-section-content-and-quote">

          <div className="hero-section-content">
            <h1 className="hero-section-title">
              <span className="hero-section-title-color">Software Engineer</span>
            </h1>
            <h2 className="hero-section-title-specialized">
              Specialized in <span className="dynamic-text">{text}</span><span className="cursor">|</span>
            </h2>


          </div>


          <div className="hero-section-image">
            <div className="image-frame">
              <img src={process.env.PUBLIC_URL + "/img/recraftt.png"} alt="Profile" />
            </div>
          </div>

        </div>
        <div className="wrapper">
          <Link
            to="AboutMe"
            smooth={true}
            duration={500}
            offset={-70}
            className="startBtn"
          >

            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Get Started

          </Link>
        </div>
      </div>

      <div className="tech-ticker-container">
        <div className="tech-ticker-row scroll-left">
          {(() => {
            const row1 = [
              { Icon: SiNextdotjs, name: "Next.js", cls: "icon-nextjs" },
              { Icon: SiAngular, name: "Angular", cls: "icon-angular" },
              { Icon: SiVuedotjs, name: "Vue.js", cls: "icon-vue" },
              { Icon: SiTypescript, name: "TypeScript", cls: "icon-typescript" },
              { Icon: SiJavascript, name: "JavaScript", cls: "icon-javascript" },
              { Icon: SiTailwindcss, name: "Tailwind", cls: "icon-tailwind" },
              { Icon: SiFlutter, name: "Flutter", cls: "icon-flutter" },
              { Icon: SiSwift, name: "Swift", cls: "icon-swift" },
            ];
            return [...row1, ...row1, ...row1].map((item, index) => (
              <div key={`row1-${index}`} className="tech-item">
                <item.Icon className={item.cls} /> {item.name}
              </div>
            ));
          })()}
        </div>

        <div className="tech-ticker-row scroll-right">
          {(() => {
            const row2 = [
              { Icon: SiNotion, name: "Notion", cls: "icon-notion" },
              { Icon: SiNodedotjs, name: "Node.js", cls: "icon-node" },
              { Icon: SiPython, name: "Python", cls: "icon-python" },
              { Icon: SiDjango, name: "Django", cls: "icon-django" },
              { Icon: SiFastapi, name: "FastAPI", cls: "icon-fastapi" },
              { Icon: SiDocker, name: "Docker", cls: "icon-docker" },
              { Icon: SiMongodb, name: "MongoDB", cls: "icon-mongo" },
              { Icon: SiPostgresql, name: "Postgres", cls: "icon-postgres" },
            ];
            return [...row2, ...row2, ...row2].map((item, index) => (
              <div key={`row2-${index}`} className="tech-item">
                <item.Icon className={item.cls} /> {item.name}
              </div>
            ));
          })()}
        </div>
      </div>




    </section>
  );
};






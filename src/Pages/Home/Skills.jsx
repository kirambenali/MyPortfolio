import React, { useState } from 'react';
import { TbBrandTypescript } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { ImHtmlFive2 } from "react-icons/im";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandKotlin } from "react-icons/tb";
import { FaSwift } from "react-icons/fa";
import { FaUikit } from "react-icons/fa";
import { DiSwift } from "react-icons/di";
import { FaFlutter } from "react-icons/fa6";
import { SiJetpackcompose } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { SiBattledotnet } from "react-icons/si";
import { TbBrandPython } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { PiFileSql } from "react-icons/pi";
import { SiMongodb } from "react-icons/si";
import { TbCircleDottedLetterL } from "react-icons/tb";
import { TbCircleLetterTFilled } from "react-icons/tb";
import { FaFigma } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { RiNotionFill } from "react-icons/ri";
import { SiPostman } from "react-icons/si";
import { SiSwagger } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FiTrello } from "react-icons/fi";
 import useScrollAnimation from '../Animation/useScrollAnimation';
export default function MySkills() {
  const [ref, isVisible] = useScrollAnimation();
  const skillsData = {
    frontend: [
      { name: 'HTML', icon: <ImHtmlFive2 size={65} color='#E34F26' /> },
      { name: 'CSS', icon: <FaCss3Alt size={65}  color='#663399'/> },
      { name: 'JavaScript', icon: <FaNodeJs size={70} color='#F7DF1E'/> },
      { name: 'React', icon: <FaReact size={65} color='#61DAFB'/> },
      { name: 'Kotlin', icon: <TbBrandKotlin size={65} color='#7F52FF'/> },
      { name: 'Swift', icon: <FaSwift size={65} color='#F05138'/> },
      { name: 'UIkit', icon: <FaUikit size={65} color='#2396F3'/> },
      { name: 'SwiftUI', icon: <DiSwift size={65} color='#F05138'/> },
      { name: 'Flutter', icon: <FaFlutter size={65} color='#02569B' /> },
      { name: 'Jetpack Compose', icon: <SiJetpackcompose size={65} color='#4285F4' /> },
    ],
    backend: [
      { name: 'Nest.js', icon: <TbBrandTypescript size={65} color='#E0234E' /> },
      { name: 'Spring.boot', icon: <SiSpringboot size={65} color='#6DB33F' /> },
      { name: '.Net', icon: <SiBattledotnet size={65} color='#512BD4' /> },
      { name: 'Python', icon: <TbBrandPython size={65} color='#3776AB'/> },
    ],
    database: [
      { name: 'MySQL', icon: <SiMysql size={65} color='#4479A1' /> },
      { name: 'MongoDB', icon: <SiMongodb size={65}color='#47A248' /> },
      { name: 'Requêtes SQL', icon: <PiFileSql size={65} color='#003B57'/> },
    ],
    "ux/ui": [
      { name: 'Loopanel', icon: <TbCircleDottedLetterL size={65}color='#7856FF' /> },
      { name: 'TL.dev', icon: <TbCircleLetterTFilled size={65}color='#0700daff' /> },
      { name: 'Figma', icon: <FaFigma size={65}color='#F24E1E' /> },
    ],
    tools: [
      { name: 'Docker', icon: <FaDocker size={65}color='#2496ED' /> },
      { name: 'Notion', icon: <RiNotionFill size={65}color='#2708a0ff' /> },
      { name: 'Postman', icon: <SiPostman size={65}color='#FF6C37' /> },
      { name: 'Swagger', icon: <SiSwagger size={65} color='#85EA2D'/> },
      { name: 'Github', icon: <FaGithub size={65} color='#3b5bfbff'/> },
      { name: 'Git', icon: <FaGitAlt size={65} color='#F05032'/> },
      { name: 'Trello', icon: <FiTrello size={65} color='#0052CC'/> },
    ],
  };

  const categories = Object.keys(skillsData);
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section id="Skills"  ref={ref}
      className={`skill-section section-animation ${isVisible ? 'visible' : ''}`}>
      <div className="about-container" > <h1 className="about-title">Skills</h1></div>
      <div className="tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab-button ${activeTab === cat ? 'active' : ''}`}
            onClick={() => setActiveTab(cat)}
          >
         
            <span className="tab-label">{cat.toUpperCase()}</span>
          </button>
        ))}
      </div>

     
      <div className="skills-list-row">
        {skillsData[activeTab].map((skill, idx) => (
          <div key={idx} className="skill-item-row">
            {skill.icon}
            <span className="skill-name-row">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

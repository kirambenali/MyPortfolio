import data from "../../data/index.json"
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { useEffect } from "react";
 import useScrollAnimation from '../Animation/useScrollAnimation';
export default function MyPortfolio (){
 const [ref, isVisible] = useScrollAnimation();


    const navigate = useNavigate();
    return (
<section  id="MyPortfolio" ref={ref}
      className={` portfolio-section section-animation ${isVisible ? 'visible' : ''}`}>
        <div className="portfolio-container">
            <h3 className="about-title">My Projects</h3>
        </div>
          
<div className="portfolio-section-container">
  {data?.portfolio?.map((item, index) => (
    <div
      key={index}
      className="portfolio-section-card"
    onClick={() => {
  let path = "";
  if (index === 0) {
    path = `/chic-circle/${item.id}`;
  } else if (index === 1) {
    path = `/stepWise/${item.id}`;
  } else if (index === 2) {
    path = `/CareWise/${item.id}`;
  } else if (index === 3) {
    path = `/RobotWise/${item.id}`;
  } else {
    path = `/chic-circle/${item.id}`;
  }
 navigate(path);
}}

    >
      <div className="portfolio-section-img">
        <img src={item.src} alt="placeholder" />
      </div>
      <div className="portfolio-section-card-content">
        <div>
          <h3 className="portfolio-section-title">{item.title}</h3>
          <p>{item.description}</p>
        </div>
        <div className="portfolio-links">
          <a className="text-sm-portfolio--link" href={item.link}> <FaGithub /> View In Github </a>
        
        </div>
      </div>
    </div>
  ))}
</div>
</section>
    );
}
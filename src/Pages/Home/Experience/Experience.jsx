import { useState } from "react";
import useScrollAnimation from '../../Animation/useScrollAnimation';
import Timeline from "./timeline";
import './timeline.css';
import educationeData from './data/education_data';
import internData from './data/internship_data';

export default function Experience() {
 const [ref, isVisible] = useScrollAnimation();
  const [activeTab, setActiveTab] = useState("education")
  return (

    <section id="Experience" ref={ref}
      className={` experience-section section-animation ${isVisible ? 'visible' : ''}`}>
  
      <div className="hero-section-content-box aboutme">
       
          
         <div className="about-container" > <h1 className="about-title">My Journey</h1></div>
          <div className="tab-container">
           
            <div className="tabs">
              <button
                className={`tab ${activeTab === "education" ? "active" : ""}`}
                onClick={() => setActiveTab("education")}
              >
                Education
              </button>
              <button
                className={`tab ${activeTab === "stages" ? "active" : ""}`}
                onClick={() => setActiveTab("stages")}
              >
                Internships
              </button>
            </div>

            {/* Tab Content */}
            <div className="tab-content">
              {activeTab === "education" && (
                <div >
      <Timeline data={educationeData} />
    </div>
              )}

            {activeTab === "stages" && (
  <div>
    <Timeline data={internData} />
    
  </div>
)}

            </div>
          </div>
        </div>
      
    </section>
  );
}
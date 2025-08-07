import { useState } from "react";
 import useScrollAnimation from '../Animation/useScrollAnimation';
export default function Experience() {
 const [ref, isVisible] = useScrollAnimation();
  const [activeTab, setActiveTab] = useState("education")
  return (

    <section id="Experience" ref={ref}
      className={` experience-section section-animation ${isVisible ? 'visible' : ''}`}>
  
      <div className="hero-section-content-box aboutme">
       
          
         <div className="about-container" > <h1 className="about-title">My Journey</h1></div>
          <div className="tab-container">
            {/* Tab Buttons */}
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
                <div>
                  <h2 className="h2-about">Bachelor's Degree in Experimental Sciences</h2>
                  <p>
                   <span className="date-style">2020-2021 : Kheireddine Pacha High School, Ariana </span>
                  </p>
                  <h2 className="h2-about">Preparatory Cycle in Mathematics and Physics</h2>
                  <p className="text-tab">
                    <span className="date-style">2021-2023  : Arab University of Science </span>
                  </p>
                  <h2 className="h2-about">Software Engineering Cycle</h2>
                  <p className="text-tab">
                    <span className="date-style">2023-2026 : ESPRIT (Private Higher School of Engineering and Technologies)</span>:
                  </p>
                </div>
              )}

              {activeTab === "stages" && (
                <div>
                  <h2 className="stage">STB BANK</h2>
                  <p>
                     <span className="date-style">During my summer internship at the bank, I had the opportunity to work in two distinct areas:</span>
                    <br /><br />
                    <span className="h2-about">Hardware Maintenance:</span><br />
                    <span className="date-style">I was responsible for troubleshooting computer hardware issues, repairing and replacing faulty components, and ensuring that all systems were operating smoothly. This involved working on various computer components and applying knowledge of hardware maintenance and troubleshooting.</span>
                    <br /><br />
                    <span className="h2-about">Network Management:</span><br />
                    <span className="date-style"> I gained hands-on experience in network administration, where I worked with packet tracing tools like Packet Tracer. I learned key networking concepts, including network configuration, troubleshooting, and managing network traffic. </span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      
    </section>
  );
}
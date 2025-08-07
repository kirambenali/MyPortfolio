import data from "../../data/index.json"
import ScrollToTop from "../Animation/ScrollTop";
import useScrollAnimation from '../Animation/useScrollAnimation';

export default function RobotWise ()
       {
        const [ref, isVisible] = useScrollAnimation();
        
        
        return (
            <>
                        <ScrollToTop />
          <section className="chic-section" ref={ref}>
              <div className={`chic-container-box section-animation ${isVisible ? 'visible' : ''}`}>
                  <div className="chic-container">
                      <div className="chic-section-container">
                          {data?.RobotWise?.map((item, index) => (
                              <div key={index} className="chic-section-card">
                                  <h3 className="chic-section-title">{item.title}</h3>
                                  <p className="chic-desc">{item.description}</p>
                                  <h4 className="feature">Technologies Used:</h4>
                                  <div className="chic-technology">
      {item.technologies.map((tech, index) => (
        <span key={index} className="tech-badge">{tech}</span>
      ))}
    </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
              <div className="other-half-section">
                  <div className="container2">
                      <div className="chic-section-container">
                          {data?.RobotWise?.map((item, index) => (
                              <div key={index} className="chic-img-box">
                               <iframe
  src="https://www.youtube.com/embed/z09CAZsFUl4"
  className="chic-video"
  allow="autoplay; fullscreen; picture-in-picture"
  allowFullScreen
></iframe>


                              </div>
                          ))}
                      </div>
                      <h3 className="feature">Features:</h3>
                      <div className="feature-box">
          
                          {data?.RobotWise?.map((item, index) => (
                              item.features.map((feature, featureIndex) => (
                                  <div className="try" key={featureIndex}>
                                      <strong className="feature-title"> {feature.title}</strong> 
                                      <p className="feature-text">{feature.content}</p> 
                                  </div>
                              ))
                          ))}
                      </div>
                  </div>
              </div>
          </section>
          </>
      );
      
}
       
    

    

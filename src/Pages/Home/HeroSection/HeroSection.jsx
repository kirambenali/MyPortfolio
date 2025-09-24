
import { useRef, useEffect } from "react";
import { Link } from 'react-scroll';
import './StarBorder/StarBorder.css';
import useScrollAnimation from '../../Animation/useScrollAnimation';
export default function HeroSection() {
  
  const splineRef = useRef(null);
const [ref, isVisible] = useScrollAnimation();
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
          <span className="hero-section-title-color">Software</span>
          <br /> Engineer
        </h1>
        <span className="hero-section-title-specialized">Specialized in Mobile Development</span>
      </div>

     
 <div className="hero-section-quote">
  <span className="quote-icon-left">❝</span>
  <p className="quote-text">
    You might not think that programmers are artists, but programming is an extremely creative profession. It’s logic-based creativity.
  </p>
  <p className="writer">John Romero</p>
  <span className="quote-icon-right">❞</span>
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




</section>
  );
};  
  

    
 


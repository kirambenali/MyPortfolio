import { useRef, useState, useEffect } from "react";
import data from "../../data/index.json";
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import useScrollAnimation from "../Animation/useScrollAnimation";

export default function MyPortfolio() {
  const [ref, isVisible] = useScrollAnimation();
  const navigate = useNavigate();

  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNavigation = (index, id) => {
    const paths = [
      `/chic-circle/${id}`,
      `/stepWise/${id}`,
      `/CareWise/${id}`,
      `/RobotWise/${id}`,
      `/Workway/${id}`,
      `/Automation/${id}`,
    ];
    const path = paths[index] || `/chic-circle/${id}`;
    navigate(path);
  };

  // 🔹 detect current card on scroll
  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    };
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);


  const scrollToIndex = (index) => {
    const container = containerRef.current;
    const cardWidth = container.offsetWidth;
    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="MyPortfolio"
      ref={ref}
      className={`portfolio-section section-animation ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="portfolio-container">
        <h3 className="about-title">My Projects</h3>
      </div>

      <div className="portfolio-section-container" ref={containerRef}>
        {data?.portfolio?.map((item, index) => (
          <div
            key={index}
            className="portfolio-section-card"
            onClick={() => handleNavigation(index, item.id)}
          >
            <div className="portfolio-section-img">
              <img
                src={process.env.PUBLIC_URL + "/img/" + item.src}
                alt={item.title || "project preview"}
              />
            </div>
            <div className="portfolio-section-card-content">
              <div>
                <h3 className="portfolio-section-title">{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className="portfolio-links">
                {item.link && (
                  <a
                    className="text-sm-portfolio--link"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> View in GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="dots-container">
        {data?.portfolio?.map((_, index) => (
          <span
            key={index}
            className={`dot ${activeIndex === index ? "active" : ""}`}
            onClick={() => scrollToIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}

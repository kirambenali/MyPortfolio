import React, { useRef, useEffect, useState } from 'react';
import './timeline.css';

const Timeline = ({ data }) => {
  const containerRef = useRef(null);
  const [activeIndexes, setActiveIndexes] = useState([]);

  useEffect(() => {
    const items = containerRef.current.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setActiveIndexes(prev => [...new Set([...prev, index])]);
          } else {
            setActiveIndexes(prev => prev.filter(i => i !== index));
          }
        });
      },
      { threshold: 0.3 }
    );

    items.forEach((item, idx) => {
      item.dataset.index = idx;
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, [data]);

  return (
    <div className="timeline-container" ref={containerRef}>
      <div className="timeline-line"></div> 
      {data.map((item, index) => {
        const isActive = activeIndexes.includes(index);
        return (
          <div
            key={index}
            className={`timeline-item ${isActive ? 'active' : ''}`}
            data-index={index}
          >
            <span className="timeline-date-intern">{item.date}</span>

            <div className="timeline-content">
              <p className='timeline-title'>{item.title}</p>
              
              {item.sous_titre1 && <p className='timeline-title1'>{item.sous_titre1}</p>}
              {item.description1 && <p className='timeline-desc'>{item.description1}</p>}

              {item.sous_titre2 && <p className='timeline-title1'>{item.sous_titre2}</p>}
              {item.description2 && <p className='timeline-desc'>{item.description2}</p>}

              
              {item.description && !item.description1 && !item.description2 &&
                <p className='timeline-desc'>{item.description}</p>
              }
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;

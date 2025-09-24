import React, { useEffect, useRef } from "react";
import './automation.css';
const data = [
  {
    title: "All-in-One Agent",
    description:
      "Designed an intelligent agent that, from a simple voice message on Telegram, automates email management, web search (Tavily), calendar, and databases, centralizing multiple critical tasks into a single instruction.",
    media: "../img/agent.mp4",
    type: "video",
  },
  {
    title: "Telegram Chatbot & X Publishing",
    description:
      "Developed a chatbot capable of searching and validating web content, then automatically publishing it on X (Twitter), optimizing real-time content distribution and engagement.",
    media: "../img/twitter.png",
    type: "image",
  },
  {
    title: "Email Management Automation",
    description:
      "Implemented an intelligent system that automatically classifies emails by content (HR, urgent, finance) and notifies the right people, enhancing responsiveness and organizational efficiency.",
    media: "../img/email.png",
    type: "image",
  },
  {
    title: "RAG Chatbot",
    description:
      "Conversational agent leveraging vector search on documents to generate accurate answers, with conversation persistence in MongoDB.",
    media: "../img/rag.mp4",
    type: "video",
  },
];




function Automation() {
   const rowsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

   
    rowsRef.current.forEach((row) => {
      if (row) observer.observe(row);
    });

    
    return () => {
      rowsRef.current.forEach((row) => {
        if (row) observer.unobserve(row);
      });
    };
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);


  return (
    <div className="scroll-container">
      {data.map((item, index) => (
          <React.Fragment key={index}>
        <div
          className="row"
          key={index}
          ref={(el) => (rowsRef.current[index] = el)}
        >
          <div className="text-container">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>

          <div className="video-container">
            {item.type === "video" ? (
              <video src={item.media} controls autoPlay muted loop />
            ) : (
              <img src={item.media} alt={item.title} />
            )}
          </div>
        </div>
         {index !== data.length - 1 && <div className="divider" />}
        </React.Fragment>
      ))}
    </div>
    
  );
}

export default Automation;

import React from "react";
import "./MainContent.css";

const MainContent = ({ activeTopic, progress }) => {
  const estimatedTime = "8h 15m"; // Replace with actual estimated time logic

  return (
    <div className="main-content">
      <div className="breadcrumb">
        <span>Back to courses</span>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="progress-indicator">
        {progress}% completed in {estimatedTime}
      </div>
      <div className="content">
        <h2>{activeTopic.title}</h2>
        {/* Render subtopics based on activeTopic */}
        <ul>
          {activeTopic.subtopics.map((subtopic) => (
            <li key={subtopic.id}>
              <div>
                <h3>{subtopic.title}</h3>
                {subtopic.type === "text" && (
                  <p>Text content for {subtopic.title}</p>
                )}
                {subtopic.type === "video" && (
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                )}
                {/* Add more content types as needed */}
              </div>
            </li>
          ))}
        </ul>
        <div className="navigation">
          <button>Previous</button>
          <button>Next</button>
        </div>
        <div className="discussion">Discuss (13)</div>
      </div>
    </div>
  );
};

export default MainContent;

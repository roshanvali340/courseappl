import React from "react";
import "./Sidebar.css";

const Sidebar = ({ topics, activeTopic, onTopicClick }) => {
  return (
    <div className="sidebar">
      <h2>Course Contents</h2>
      <ul>
        {topics.map((topic) => (
          <li
            key={topic.id}
            className={topic === activeTopic ? "active" : ""}
            onClick={() => onTopicClick(topic)}
          >
            {topic.title}
            <ul>
              {topic.subtopics.map((subtopic) => (
                <li key={subtopic.id}>{subtopic.title}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

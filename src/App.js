import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const topics = [
  {
    id: 1,
    title: "Introduction",
    subtopics: [
      { id: 101, title: "Welcome Video", type: "video" },
      { id: 102, title: "Course Overview", type: "text" },
    ],
  },
  {
    id: 2,
    title: "Module 1: Getting Started",
    subtopics: [
      { id: 201, title: "Setting Up Environment", type: "text" },
      { id: 202, title: "First Lesson", type: "text" },
    ],
  },
  {
    id: 3,
    title: "Module 1: Getting Started",
    subtopics: [
      { id: 201, title: "Setting Up Environment", type: "text" },
      { id: 202, title: "First Lesson", type: "text" },
    ],
  },
  {
    id: 4,
    title: "Module 1: Getting Started",
    subtopics: [
      { id: 201, title: "Setting Up Environment", type: "text" },
      { id: 202, title: "First Lesson", type: "text" },
    ],
  },
  // Add more topics as needed
];

const App = () => {
  const [activeTopic, setActiveTopic] = useState(topics[0]); // Initially active topic

  // Function to calculate course completion percentage
  const calculateCompletionPercentage = () => {
    const totalSubtopics = topics.reduce(
      (total, topic) => total + topic.subtopics.length,
      0
    );
    const completedSubtopics = topics
      .flatMap((topic) => topic.subtopics)
      .filter((subtopic) => subtopic.completed).length;
    return ((completedSubtopics / totalSubtopics) * 100).toFixed(2);
  };

  return (
    <div className="app-container">
      <Sidebar
        topics={topics}
        activeTopic={activeTopic}
        onTopicClick={setActiveTopic} // Use setActiveTopic directly in Sidebar
      />
      <MainContent
        activeTopic={activeTopic}
        progress={calculateCompletionPercentage()}
      />
    </div>
  );
};

export default App;

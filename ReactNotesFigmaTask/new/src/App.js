
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./FigmaNotes/Home";
import GroupDetails from "./FigmaNotes/GroupDetails";

const App = () => {
  const [groups, setGroups] = useState([
    { name: "My personal grp", color: "#9b59b6" },
    { name: "Javascript grp", color: "#f39c12" },
    { name: "HTML grp", color: "#1abc9c" },
    { name: "CSS Notes", color: "#d35400" },
    { name: "SQL Notes", color: "#3498db" },
    { name: "Python Notes", color: "#8e44ad" },
  ]);

  const addGroup = (group) => setGroups((prevGroups) => [...prevGroups, group]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home groups={groups} addGroup={addGroup} />} />
        <Route path="/group/:groupName" element={<GroupDetails groups={groups} />} />
      </Routes>
    </Router>
  );
};

export default App;

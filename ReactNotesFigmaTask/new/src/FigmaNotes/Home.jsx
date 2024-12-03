
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Home = ({ groups, addGroup }) => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupColor, setGroupColor] = useState("#007bff");

  const handleGroupClick = (name) => {
    navigate(`/group/${name}`);
  };

  const handleCreateGroup = () => {
    if (groupName) {
      addGroup({ name: groupName, color: groupColor});
      setGroupName("");
      setGroupColor("#007bff");
      setShowPopup(false);
    } else {
      alert("Please enter a group name.");
    }
  };


  const getAbbreviation = (name) => {
    return name
      .split(" ") 
      .map((word) => word.charAt(0).toUpperCase()) 
      .join(""); 
  };

  return (
    <div className="container">
      <div className="sidebar">
        <h1>Pocket Notes</h1>
        <ul>
          {groups.map((group, index) => (
            <li
              key={index}
              className="group-item"
              style={{ backgroundColor: group.color }}
              onClick={() => handleGroupClick(group.name)}
            >
            <span className="group-abbreviation">{getAbbreviation(group.name)}</span>
            <span className="group-name">{group.name}</span>
            </li>
          ))}
        </ul>
        <button className="add-btn" onClick={() => setShowPopup(true)}>
          +
        </button>
      </div>

      <div className="main-content">
        <div className="illustration">
          <img
            src="/assets/image-removebg-preview 1 (2).png"
            alt="Illustration"
            width="400px"
          />
        </div>
        <h1>Pocket Notes</h1>
        <p>
          Send and receive messages without keeping your phone online. Use
          Pocket Notes on up to 4 linked devices and 1 mobile phone.
        </p>
        <p className="encryption-note">🔒 End-to-end encrypted</p>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Create a Group</h3>
            <input
              type="text"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="Enter group name"
            />
            <div className="color-options">
              <button
                onClick={() => setGroupColor("#007bff")}
                style={{ backgroundColor: "#007bff" }}
              ></button>
              <button
                onClick={() => setGroupColor("#9b59b6")}
                style={{ backgroundColor: "#9b59b6" }}
              ></button>
              <button
                onClick={() => setGroupColor("#f39c12")}
                style={{ backgroundColor: "#f39c12" }}
              ></button>
              <button
                onClick={() => setGroupColor("#1abc9c")}
                style={{ backgroundColor: "#1abc9c" }}
              ></button>
              <button
                onClick={() => setGroupColor("#d35400")}
                style={{ backgroundColor: "#d35400" }}
              ></button>
            </div>
            <div className="popup-actions">
              <button onClick={handleCreateGroup}>Create</button>
              <button onClick={() => setShowPopup(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

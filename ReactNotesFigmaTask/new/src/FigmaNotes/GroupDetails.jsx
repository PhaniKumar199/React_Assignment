
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";

const GroupDetails = ({ groups }) => {
  const { groupName } = useParams();
  const group = groups.find((g) => g.name === groupName);

  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };

  if (!group) {
    return <h1>Group Not Found</h1>;
  }

  return (
    <div className="group-details">
      <div className="sidebar">
        <h1>Pocket Notes</h1>
        <ul>
          {groups.map((group, index) => (
            <li
              key={index}
              className="group-item"
              style={{ backgroundColor: group.color }}
            >
              {group.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="main-contents">
        <div className="header">
          <h2>{group.name}</h2>
        </div>
        
        <div className="pp">
           <p>Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.</p>
           <span>9 Mar 2023<strong>.</strong>10:10 AM</span>
        </div>
        

        <div className="pp">
           <p>Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.</p>
           <span>9 Mar 2023<strong>.</strong>10:10 AM</span>
        </div>

        
        <div className="pp">
           <p>Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.</p>
           <span>9 Mar 2023<strong>.</strong>10:10 AM</span>
        </div>




        <div className="messages">
          {messages.map((message, index) => (
            <p key={index}>
              {message}
              <br />
              <span>9 Mar 2023<strong>.</strong>10:10 AM</span>
            </p>
          ))}
        </div>

        <div className="input-box">
          <input
            type="text"
            placeholder="Enter your message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;

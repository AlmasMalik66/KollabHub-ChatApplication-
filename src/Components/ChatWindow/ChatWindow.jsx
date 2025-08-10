import React from "react";
import "./ChatWindow.css";

const messages = [
  {
    id: 1,
    sender: "Areeba",
    avatar: "/Areeba.jpeg",
    text: "Hey team, just a reminder about our sprint review tomorrow at 2 PM. Please have your updates ready.",
    side: "left",
  },
  {
    id: 2,
    sender: "Imsha",
    avatar: "/Imsha.jpeg",
    text: "Got it, Areeba. Will be prepared.",
    side: "right",
  },
  {
    id: 3,
    sender: "Almas",
    avatar: "/Almas.jpeg",
    text: "Sounds good, I'll have my progress report ready.",
    side: "left",
  },
  {
    id: 4,
    sender: "Imsha",
    avatar: "/Imsha.jpeg",
    text: "Great! Looking forward to seeing everyone's work.",
    side: "right",
  },
];

export default function ChatWindow() {
  return (
    <div className="chat-window">
      {messages.map((msg) => (
        <div key={msg.id} className={`message-row ${msg.side}`}>
          {msg.side === "left" && <img src={msg.avatar} alt={msg.sender} />}
          <div>
            <span className="sender">{msg.sender}</span>
            <div className={`message ${msg.side === "right" ? "blue" : "dark"}`}>
              {msg.text}
            </div>
          </div>
          {msg.side === "right" && <img src={msg.avatar} alt={msg.sender} />}
        </div>
      ))}
      <div className="chat-input">
        <img src="/Areeba.jpeg" alt="Areeba" />
        <div className="input-box">
          <button>📎</button>
          <input type="text" placeholder=" #Message " />
          <button>😊</button>
          <button> 
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <rect x="9" y="3" width="6" height="12" rx="3" fill="#fff"/>
          <rect x="11" y="17" width="2" height="4" rx="1" fill="#fff"/>
          <path d="M7 11v1a5 5 0 0 0 10 0v-1" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
      </svg></button>
          <button>➤</button>
        </div>
      </div>
    </div>
  );
}
import React from "react";
import "./ChatHeader.css";

export default function ChatHeader() {
  return (
    <div className="chat-header">
      <div className="chat-header-left">
        <img src="/logo.png" alt="KollabHub" />
        <h2>Project Final Year</h2>
      </div>
      <div className="chat-header-actions">
        {/* Voice Call Icon */}
        <button title="Call">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C7.61 22 2 16.39 2 9.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" fill="#2196f3"/>
          </svg>
        </button>
        {/* Video Call Icon */}
        <button title="Video">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#2196f3">
            <rect x="3" y="7" width="13" height="10" rx="2" fill="#2196f3"/>
            <polygon points="17,10 22,7 22,17 17,14" fill="#2196f3"/>
          </svg>
        </button>
        <button title="Info">
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#2196f3">
    <circle cx="12" cy="12" r="10" fill="#2196f3"/>
    <rect x="11" y="10" width="2" height="6" rx="1" fill="#fff"/>
    <rect x="11" y="7" width="2" height="2" rx="1" fill="#fff"/>
  </svg>
</button>
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
}

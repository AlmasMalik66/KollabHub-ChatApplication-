import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="/KollabHub.png" alt="KollabHub" />
        <h2>KollabHub</h2>
      </div>
      <div className="sidebar-menu">
        <button className="active">
          <span className="icon">👥</span>
          Groups
        </button>
        <button>
          <span className="icon">💬</span>
          Direct Messages
        </button>
        <button>
          <span className="icon">➕</span>
          Invite People
        </button>
      </div>
      <div className="spacer"></div> {/* This pushes the footer down */}
      <div className="sidebar-footer">
        <button>
          <span className="icon">👤</span>
          Profile
        </button>
        <button>
          <span className="icon">⚙️</span>
          Settings
        </button>
      </div>
    </div>
  );
}

import { useState } from "react";
import Signup from "./Components/Signup/Signup";
import Sidebar from "./Components/Sidebar/Sidebar";
import ChatHeader from "./Components/ChatHeader/ChatHeader";
import ChatWindow from "./Components/ChatWindow/ChatWindow";
import "./index.css";

function App() {
  const [showSignup, setShowSignup] = useState(false);

  // You can pass setShowSignup to Signup for switching after signup
  return showSignup ? (
    <Signup />
  ) : (
    <div className="app">
      <Sidebar />
      <div className="chat-section">
        <ChatHeader />
        <ChatWindow />
      </div>
    </div>
  );
}

export default App;


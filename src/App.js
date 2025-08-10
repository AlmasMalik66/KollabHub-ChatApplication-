import Sidebar from "./Components/Sidebar/Sidebar";
import ChatHeader from "./Components/ChatHeader/ChatHeader";
import ChatWindow from "./Components/ChatWindow/ChatWindow";
import "./index.css";

function App() {
  return (
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


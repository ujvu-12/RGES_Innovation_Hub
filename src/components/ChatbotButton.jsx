import { useState } from "react";
import "./ChatbotButton.css";

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    // You can add your chatbot logic here
    // For now, this just toggles the button state
    console.log("Chatbot clicked!");
  };

  return (
    <>
      <div
        className={`chatbot-button ${isOpen ? "active" : ""}`}
        onClick={handleClick}
      >
        {isOpen ? (
          // Close icon
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          // Chat icon
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </div>

      {/* Optional: Chat window that appears when clicked */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Chat with us</h3>
          </div>
          <div className="chatbot-body">
            <p>Hello! How can we help you today?</p>
            {/* Add your chatbot interface here */}
          </div>
          <div className="chatbot-footer">
            <input type="text" placeholder="Type your message..." />
            <button>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotButton;

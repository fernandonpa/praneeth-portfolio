import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faUser,
  faBrain,
  faComments,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

const Chat = () => {
  // Chat states
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: "ai",
      message:
        "Hi! I'm Praneeth's digital twin. I can answer questions about his experience, skills, projects, and background. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const newMessage = {
      id: Date.now(),
      type: "user",
      message: chatInput,
      timestamp: new Date(),
    };

    setChatMessages((prev) => [...prev, newMessage]);
    setChatInput("");
    setIsTyping(true);

    // Simulate AI response (replace with actual AI integration)
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        type: "ai",
        message:
          "Thanks for your question! I'll help you learn more about Praneeth. This is where the AI response will appear once integrated.",
        timestamp: new Date(),
      };
      setChatMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.2, 0.75)}
      className="w-full lg:w-3/4 bg-tertiary rounded-2xl p-6 border border-gray-700"
    >
      {/* Enhanced Chat Header */}
      <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 rounded-xl p-4 mb-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <FontAwesomeIcon
                  icon={faComments}
                  className="text-white text-xl"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-green-400 text-xs animate-pulse"
                />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-white text-xl font-bold">Chat Assistant</h3>
              <p className="text-purple-100 text-sm">
                Praneeth's Digital Twin • Online
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon
              icon={faBrain}
              className="text-white text-lg animate-pulse"
            />
            <span className="text-white text-sm font-medium">AI Powered</span>
          </div>
        </div>
      </div>

      {/* Chat Messages Container */}
      <div
        ref={chatContainerRef}
        className="bg-black-100 rounded-lg p-4 h-96 overflow-y-auto mb-4 space-y-4 border border-gray-800"
      >
        {chatMessages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${
              msg.type === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex items-start max-w-[80%] ${
                msg.type === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  msg.type === "user"
                    ? "ml-2 bg-gradient-to-r from-blue-500 to-cyan-500"
                    : "mr-2 bg-gradient-to-r from-purple-500 to-pink-500"
                }`}
              >
                <FontAwesomeIcon
                  icon={msg.type === "user" ? faUser : faBrain}
                  className="text-white text-sm"
                />
              </div>
              <div
                className={`p-3 rounded-lg ${
                  msg.type === "user"
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                    : "bg-gradient-to-r from-gray-700 to-gray-600 text-white border border-purple-500/30"
                }`}
              >
                <p className="text-sm">{msg.message}</p>
                <span className="text-xs opacity-70">
                  {msg.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>
          </motion.div>
        ))}

        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full mr-2 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faBrain}
                  className="text-white text-sm"
                />
              </div>
              <div className="bg-gradient-to-r from-gray-700 to-gray-600 text-white p-3 rounded-lg border border-purple-500/30">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Chat Input */}
      <form onSubmit={handleChatSubmit} className="flex gap-2">
        <input
          type="text"
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          placeholder="Ask me about Praneeth's skills, projects, or experience..."
          className="flex-1 bg-black-100 text-white rounded-lg px-4 py-3 outline-none border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center shadow-lg"
        >
          <FontAwesomeIcon icon={faPaperPlane} />
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Chat;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faMicrophoneSlash,
  faVolumeUp,
  faVolumeMute,
  faHeadset,
  faBrain,
  faWaveSquare,
} from "@fortawesome/free-solid-svg-icons";

const Voice = () => {
  // Voice states
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceText, setVoiceText] = useState(
    "Ready to chat! Click the microphone to start voice conversation with Praneeth's AI"
  );

  const toggleVoiceListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setVoiceText("🎤 Listening... Speak now!");
      // Add speech recognition logic here
    } else {
      setVoiceText("🧠 Processing your voice input...");
      // Process voice input here
    }
  };

  const toggleSpeaking = () => {
    setIsSpeaking(!isSpeaking);
    // Add text-to-speech logic here
  };

  return (
    <motion.div
      variants={fadeIn("left", "spring", 0.4, 0.75)}
      className="w-full lg:w-1/4 bg-tertiary rounded-2xl p-6 border border-gray-700"
    >
      {/* Enhanced Voice Header */}
      <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 rounded-xl p-4 mb-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <FontAwesomeIcon
                  icon={faHeadset}
                  className="text-white text-lg"
                />
              </div>
              <div
                className={`absolute -top-1 -right-1 w-3 h-3 ${
                  isListening ? "bg-red-400 animate-pulse" : "bg-gray-400"
                } rounded-full border-2 border-white`}
              ></div>
            </div>
            <div className="ml-3">
              <h3 className="text-white text-lg font-bold">Voice Agent</h3>
              <p className="text-cyan-100 text-xs">Praneeth's Voice AI</p>
            </div>
          </div>
        </div>
      </div>

      {/* Voice Visualization */}
      <div className="flex flex-col items-center space-y-6">
        <div
          className={`relative w-32 h-32 rounded-full flex items-center justify-center ${
            isListening
              ? "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 animate-pulse"
              : "bg-gradient-to-r from-gray-600 to-gray-800"
          } transition-all duration-300 shadow-lg`}
        >
          <motion.div
            animate={isListening ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-20 h-20 rounded-full bg-white bg-opacity-20 flex items-center justify-center backdrop-blur-sm"
          >
            <FontAwesomeIcon
              icon={isListening ? faWaveSquare : faMicrophoneSlash}
              className={`text-3xl ${
                isListening ? "text-white" : "text-gray-400"
              }`}
            />
          </motion.div>

          {isListening && (
            <>
              <div className="absolute inset-0 rounded-full border-4 border-cyan-300 animate-ping"></div>
              <div
                className="absolute inset-2 rounded-full border-2 border-blue-300 animate-ping"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </>
          )}
        </div>

        {/* Voice Status */}
        <div className="text-center">
          <p className="text-white text-sm mb-4 min-h-[20px]">{voiceText}</p>

          {/* Voice Controls */}
          <div className="flex flex-col space-y-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleVoiceListening}
              className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 shadow-lg ${
                isListening
                  ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white"
                  : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
              }`}
            >
              <FontAwesomeIcon
                icon={isListening ? faMicrophoneSlash : faMicrophone}
                className="mr-2"
              />
              {isListening ? "Stop Listening" : "Start Voice Chat"}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleSpeaking}
              className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 shadow-lg ${
                isSpeaking
                  ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                  : "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white"
              }`}
            >
              <FontAwesomeIcon
                icon={isSpeaking ? faVolumeMute : faVolumeUp}
                className="mr-2"
              />
              {isSpeaking ? "Mute Voice" : "Enable Audio"}
            </motion.button>
          </div>
        </div>

        {/* Voice Features */}
        <div className="w-full">
          <h4 className="text-white text-sm font-semibold mb-2 flex items-center">
            <FontAwesomeIcon icon={faBrain} className="text-cyan-400 mr-2" />
            Voice Features:
          </h4>
          <ul className="text-secondary text-xs space-y-1">
            <li>• Natural conversation</li>
            <li>• Real-time responses</li>
            <li>• Voice recognition</li>
            <li>• Smart audio processing</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Voice;

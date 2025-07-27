import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Education,
  Extracurricular,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
// import Feedbacks from "./components/Feedbacks";
// import AIAssistant from "./components/AIAssistant"; // Import the new component
// import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="div bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education />
        {/* <Experience /> */}
        <Extracurricular />
        <Tech />
        <Works />
        {/* <AIAssistant /> */}
        {/* <Feedbacks /> */}
        <div className="div relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

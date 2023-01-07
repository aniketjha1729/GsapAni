import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
import "./App.css";
import { timeLineData } from "./data";
import TimelineCard from "./TimelineCard";
gsap.registerPlugin(ScrollTrigger);

function App() { 
  return (
    <div>
      <div className="bigB"></div>
      {/* <div ref={elementRef} className="container position-relative">
        <div className="scrollDist position-absolute top-0">hello</div>
      </div> */}
      <div className="container mt-4">
        <div className="TimelineSection">
          {timeLineData.map((el, cardIndex) => (
            <TimelineCard cardIndex={cardIndex} el={el} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

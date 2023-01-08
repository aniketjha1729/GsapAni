import { gsap } from "gsap";
import React, { useEffect } from "react";
import CardListContainer from "./CardListContainer";

const TimelineCard = ({ cardIndex, el }) => {
 

  return (
    <div className={`TimlineCard_${cardIndex} border mt-5 p-5`} key={cardIndex}>
      <div className="row p-0 m-0 border border-primary">
        <div className="col-12 col-md-6 ">
          <h4>{el.heading}</h4>
          <p>{el.subHeading}</p>
        </div>
        <div className=" col-12 col-md-6">
          {el.list.map((list, index) => (
            <CardListContainer list={list} cardListIndex={index} cardIndex={cardIndex}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;

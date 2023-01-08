import { gsap } from "gsap";
import React, { useEffect } from "react";

const TimelineCard = ({ cardIndex, el }) => {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.TimlineCard_${cardIndex}`,
        start: "100px center",
        markers: true,
      },
    });
    tl.fromTo(
      `.TimlineCard_${cardIndex} .gradientLine`,
      { height: "0%" },
      {
        height: "100%",
        duration: el.list.length,
      },
      0
    )
      .fromTo(
        `.TimlineCard_${cardIndex} .movingBall`,
        { top: "0.3%" },
        {
          top: "100%",
          duration: el.list.length,
        },
        0
      )
      .fromTo(
        `.TimlineCard_${cardIndex} .CardListContainer`,
        { opacity: 0.4 },
        { opacity: 1, stagger: 0.8, onStart: () => console.log("hello") },
        0
      )
      .fromTo(
        `.TimlineCard_${cardIndex} .staticBall`,
        { opacity: 0 },
        { opacity: 1, stagger: 0.8 },
        0
      );
  }, []);

  return (
    <div className={`TimlineCard_${cardIndex} border mt-5 p-5`} key={cardIndex}>
      <div className="row p-0 m-0">
        <div className="col-12 col-md-6 ">
          <h4>{el.heading}</h4>
          <p>{el.subHeading}</p>
        </div>
        <div className=" col-12 col-md-6 position-relative">
          <div className="dottedLine" />
          <div className="gradientLine" />
          <div className="movingBall" />
          {el.list.map((list, index) => (
            <div key={index} className="CardListContainer row">
              <div className="circleContainer position-absolute">
                <div className="outerStaticBall">
                  <div className="staticBall" />
                </div>
              </div>
              <div className="col-7">{list}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;

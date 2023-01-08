import { gsap } from "gsap";
import React, { useEffect } from "react";

const CardListContainer = ({ cardIndex, cardListIndex, list }) => {
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
        duration: 1,
        // delay: cardIndex,
        // stagger: 1,
      },
      0
    );
    // .fromTo(
    //   `.TimlineCard_${cardIndex} .movingBall`,
    //   { top: "0%" },
    //   {
    //     top: "100%",
    //     duration: 4,
    //   },
    //   0
    // )
    // .fromTo(
    //   `.TimlineCard_${cardIndex} .CardListContainer`,
    //   { opacity: 0.4 },
    //   { opacity: 1, stagger: 0.9 },
    //   0
    // );
  }, []);
  return (
    <div key={cardListIndex} className="CardListContainer row">
      <div className="col-1 position-relative">
        <div className="dottedLine" />
        <div className={`gradientLine`} />
        <div className="movingBall" />
      </div>
      <div className="col-7">{list}</div>
    </div>
  );
};

export default CardListContainer;

import { Expo, gsap } from "gsap";
import React, { useEffect, useState } from "react";

function Loading({ setShowHeader }) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter) =>
        counter < 100
          ? counter + 1
          : (clearInterval(count), setCounter(100), reveal())
      );
    }, 25);
  }, []);
  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        t1.to(".content", {
          width: "100%",
          ease: Expo.easeInOut,
          duration: 0.3,
        });
        setTimeout(() => {
          setShowHeader(true);
        }, 500);
      },
    });
    t1.to(".follow", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 1.2,
      delay: 0.7,
    })
      .to(".hide", { opacity: 0, duration: 0.3 })
      .to(".hide", { display: "none", duration: 0.3 })
      .to(".follow", {
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
        delay: 0.5,
      });
  };
  return (
    <div className="h-full w-full bg-background-end flex justify-center items-center absolute top-0">
      <div className="follow absolute bg-foreground h-1 w-0 left-0"></div>
      <div
        className="hide absolute left-0 bg-white h-1 w-0 text-8xl transition-all"
        id="progress-bar"
        style={{ width: counter + "%" }}
      ></div>
      <div id="count" className="hide absolute text-9xl max-sm:text-7xl text-white -translate-y-3">
        {counter}%
      </div>
    </div>
  );
}

export default Loading;

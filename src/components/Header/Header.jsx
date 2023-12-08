import React, { useEffect, useLayoutEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { useRef } from "react";
import { useInView } from "framer-motion";
import "./Header.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Header() {
  const typedTextRef = useRef(null);
  const cursorRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const placeholderText = [{ type: "heading1", text: "Aditya Maurya" }];
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  const textArray = [
    "Full Stack Developer.",
    "Competitive Programmer.",
    "Python Developer.",
    "Learner...",
  ];

  let textArrayIndex = 0;
  let charIndex = 0;
  let typeTimeout, eraseTimeout;
  const erase = () => {
    if (isInView) {
      if (charIndex > 0) {
        cursorRef.current.classList.remove("blink");
        typedTextRef.current.textContent = textArray[textArrayIndex].slice(
          0,
          charIndex - 1
        );
        charIndex--;
        eraseTimeout = setTimeout(erase, 80);
      } else {
        cursorRef.current.classList.add("blink");
        textArrayIndex++;
        if (textArrayIndex > textArray.length - 1) {
          textArrayIndex = 0;
        }
        typeTimeout = setTimeout(type, 1000);
      }
    }
  };

  const type = () => {
    if (isInView) {
      if (charIndex <= textArray[textArrayIndex].length - 1) {
        cursorRef.current.classList.remove("blink");
        typedTextRef.current.textContent +=
          textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        typeTimeout = setTimeout(type, 120);
      } else {
        cursorRef.current.classList.add("blink");
        eraseTimeout = setTimeout(erase, 1000);
      }
    }
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "top",
        end: `+=${window.innerHeight}`,
      },
    });

    timeline
      .from(typedTextRef.current, { clipPath: `inset(15%)` })
      .to(ref.current, { height: "400px" }, 0);
  }, []);
  useEffect(() => {
    if (isInView) {
      type();
    }
    return () => {
      clearTimeout(eraseTimeout);
      clearTimeout(typeTimeout);
    };
  }, [isInView]);

  return (
    <main className=" h-screen flex flex-col" ref={ref} id="home">
      {isInView ? (
        <div className="m-auto">
          <motion.div initial="hidden" animate="visible" variants={container}>
            <h1 data-aos="fade-right" className="text-2xl">
              Hi, my name is
            </h1>
            <div className="container" data-scroll data-scroll-speed="0.7">
              {placeholderText.map((item, index) => {
                return <AnimatedText {...item} key={index} />;
              })}
            </div>
          </motion.div>
          <p className="typing-text -mt-4">
            I am a <span className="typed-text" ref={typedTextRef}></span>
            <span className="cursor blink" ref={cursorRef}>
              &nbsp;
            </span>
          </p>
          <div className="flex gap-8 mt-8">
            <a href="https://www.instagram.com/aditya_m3435/" target="_blank">
              <InstagramIcon />
            </a>
            <a href="https://github.com/Aditya3435" target="_blank">
              <GitHubIcon />
            </a>
            <a
              href="https://in.linkedin.com/in/aditya-maurya-490081b4"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="scroll-down flex flex-col items-center">
        <div className=" p-1 rounded-md pointer-events-none">Scroll Down</div>
        <KeyboardArrowDownIcon />
      </div>
    </main>
  );
}

export default Header;

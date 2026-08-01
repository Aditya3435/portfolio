import "./About.scss";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
gsap.registerPlugin(ScrollTrigger);
const phrase =
  "Hi, I’m Aditya. I’m currently pursuing an M.Tech in Computer Science at IIT Tirupati, specializing in AI and Machine Learning. I completed my undergrad at NIT Hamirpur, where I worked as a full-stack developer (MERN) and built web platforms for the college's cultural and tech festivals. I also built a computer vision-based attendance system using OpenCV. I have a strong foundation in algorithms and competitive programming - 900+ problems solved on LeetCode and active on Codeforces. Right now, I'm focused on combining strong software engineering with machine learning. Drop a message if you'd like to collaborate!";
export default function About() {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const CPProfiles = [
    {
      Title: [
        {
          text: "Specialist",
          color: "text-cyan-500",
        },
        {
          text: " at Codeforces (max. Rating 1401)",
        },
      ],
    },
    {
      Title: [
        {
          text: "3 ⭐ at Codechef",
          color: "text-blue-500",
        },
        {
          text: " (max. Rating 1701)",
        },
      ],
    },
    {
      Title: [
        {
          text: "Knight at Leetcode",
          color: "text-orange-500",
        },
        {
          text: " (max. Rating 1864)",
        },
      ],
    },
  ];
  let refs = useRef([]);
  const body = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    createAnimation();
  }, []);
  useEffect(() => {
    document.scrollingElement.scrollTo(0, 0);
    handleScroll();
    return () => {};
  }, []);

  const handleScroll = () => {
    gsap.utils
      .toArray(".main-about .tech-stack-container .scroller section")
      .forEach((section, index) => {
        const wrapper = section.querySelector(".wrapper");
        const [xStart, xEnd] =
          index % 2
            ? ["100%", (wrapper.scrollWidth - section.offsetWidth) * -1]
            : [wrapper.scrollWidth * -1.5, "0%"];
        gsap.fromTo(
          wrapper,
          { x: xStart },
          {
            x: xEnd,
            scrollTrigger: {
              trigger: section,
              scrub: 0.9,
              start: `${isDesktopOrLaptop ? "bottom -240%" : "-1000px top"}'`,
              end: `+=` + (isDesktopOrLaptop ? section.offsetWidth : "600px"),
              // markers: true,
            },
          },
        );
      });
  };

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `${isDesktopOrLaptop ? "100%" : "-1000px -600px"}'`,
        end:
          `+=` + (isDesktopOrLaptop ? container.current.offsetHeight : "500px"),
        // markers: true,
      },
      opacity: 1,
      color: "#008080",
      ease: "none",
      stagger: 0.1,
      duration: 1,
    });
  };

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i}>{letters}</p>);
    });
    return body;
  };

  const splitLetters = (word) => {
    let letters = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el);
          }}
        >
          {letter}
        </span>,
      );
    });
    return letters;
  };

  return (
    <div
      id="about"
      ref={container}
      className="flex flex-col justify-center items-center main-about"
    >
      <div
        className=" text-7xl mt-16 mb-4 font-bold max-sm:text-4xl"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        ABOUT ME
      </div>
      <main className="aboutMain">
        <div ref={body} className="aboutBody">
          {splitWords(phrase)}
        </div>
      </main>
      <div className="tech-stack-container flex flex-col gap-8">
        <div
          className=" text-7xl mt-8 mb-8 m-auto font-bold max-sm:text-4xl"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          TECH STACK
        </div>
        <div className="scroller  overflow-x-hidden">
          {[1, 2, 3].map((el) => (
            <section key={el}>
              <div className="wrapper flex items-center gap-12 max-sm:gap-2 font-medium border-t-2 border-b-2">
                {[1, 2, 3, 4, 5, 6].map((el2) => (
                  <Image
                    key={el2}
                    className="w-16 h-fit rounded-xl m-2 transition-all hover:scale-105 drop-shadow-teal "
                    src={`/images/techstack/languages/${el}_${el2}.svg`}
                    alt="tech-stack"
                    width={isDesktopOrLaptop ? 80 : 30}
                    height={isDesktopOrLaptop ? 50 : 15}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
      <div className="tech-stack-container flex flex-col gap-8 mt-20">
        <div
          className=" text-7xl m-auto font-bold mt-24 max-sm:text-4xl"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {" "}
          CP PROFILES{" "}
        </div>
        <div
          className={`scroller flex items-center justify-center gap-4 max-sm:gap-2 text-xl  `}
        >
          <a
            href="https://anilist.co/user/aditya3435/"
            target="_blank"
            title="anilist easter egg(please don't click :)"
            className="absolute left-2 text-background-end"
          >
            Anilist
          </a>
          {[1].map((el) => (
            <section key={el}>
              <div className="wrapper flex items-center  gap-12 max-sm:gap-4 text-xl font-medium max-sm:flex-col max-sm:justify-center max-sm:items-center">
                {[1, 2, 3].map((el2 /* change to [1,2,3] to add cf */) => (
                  <a
                    className="flex flex-col justify-center"
                    href={
                      el2 == 1
                        ? "https://codeforces.com/profile/aditya3435/"
                        : el2 == 2
                          ? "https://codechef.com/users/aditya3435"
                          : "https://leetcode.com/aditya3435/"
                    }
                    key={el2}
                    target="_blank"
                  >
                    <p className="text-center mb-4">
                      {CPProfiles[el2 - 1].Title.map((el3, index) => (
                        <span
                          key={index}
                          className={el3.color ? el3.color : "text-foreground"}
                        >
                          {el3.text}
                        </span>
                      ))}
                    </p>
                    <Image
                      className={`w-64 rounded-md p-2 h-20 m-auto transition-all hover:scale-105 z-10 drop-shadow-teal ${el2 == 2 ? "w-32" : ""}`}
                      src={`/images/cp_profiles/${el2}.svg`}
                      alt="cp-profile"
                      width={isDesktopOrLaptop ? 100 : 40}
                      height={isDesktopOrLaptop ? 20 : 10}
                    />
                  </a>
                ))}
              </div>
            </section>
          ))}
          <a
            href="https://www.instagram.com/am_proton/"
            target="_blank"
            title="am_proton easter egg(please don't click)"
            className="absolute right-2 text-background-end max-sm:hidden"
          >
            {" "}
            am_proton{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

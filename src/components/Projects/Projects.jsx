import React, { useEffect, useRef } from "react";
import "./Projects.scss";
import gsap from "gsap";
import { CSSPlugin } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useInView } from "framer-motion";
import Image from "next/image";
gsap.registerPlugin(CSSPlugin);

function Projects() {
  const contentData = [
    {
      id: "0",
      title: "Attendance system using face recognition",
      description:
        "This project utilizes openCV's face recognition model to create an advanced attendance system. It captures user photos, automatically updating attendance records in a spreadsheet. With a user-friendly interface, emphasis on security, and continuous improvement, it offers a reliable and efficient solution for organizations seeking streamlined attendance tracking.",
      img: "opencv",
      link: "https://github.com/Aditya3435/Attendance-System-using-Face-Recognition",
      gitubLink: 'https://github.com/Aditya3435/Attendance-System-using-Face-Recognition'
    },
    {
      id: "1",
      title: "Nimbus Technical Fest Website",
      description:
      "This college technical fest website, developed using React.js, SASS, Canvajs, ThreeJs, and pnpm packages, boasts an engaging design featuring captivating animations across six distinct pages. Each page is thoughtfully crafted with a unique layout style, contributing to an immersive and visually appealing user experience.",
      img: "nimbus",
      link: "https://festnimbus.nith.ac.in/",
      gitubLink: 'https://github.com/pixonoids/Nimbus-2k23'
    },
    {
      id: "2",
      title: "Hillffair Cultural Fest Website",
      description:
      "Made this cultural fest website with my team using Reactjs showcasing NIT hamirpur cultural fest thoroughly.",
      img: "hillffair",
      link: "https://www.hillffairnith.com/",
      gitubLink: 'https://github.com/pixonoids/Hillfair-2022-Mirage'
    },
    {
      id: "3",
      title: "Pomodoro Web App",
      description:
      "To enhance productivity, I developed a Pomodoro timer web app using HTML, CSS, and JavaScript. The app offers the flexibility of setting time manually or using default settings, catering to individual preferences. Additionally, it provides three distinct color themes to optimize the user experience, making it a versatile and visually appealing tool for efficient time management.",
      img: "pomodoro",
      link: "https://aditya3435.github.io/pomodoro-app/",
      gitubLink: 'https://github.com/Aditya3435/pomodoro-app'
    },
    {
      id: "4",
      title: "Password Generator using Terminal",
      description:
      "Scripted a password generator for the terminal using a Bash script, ensuring ease of use, and 100% secure random password by providing clear instructions in a well-documented README, guiding users through the installation and usage of the script.",
      img: "password",
      link: "https://github.com/Aditya3435/generate_password_using_terminal",
      gitubLink: 'https://github.com/Aditya3435/pomodoro-app'
    },

    // change desktopPhotos class bottom 77% to more if increase project
  ];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const refsAndViews = {};
  contentData.forEach((item) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const view = useInView(ref);
    refsAndViews[item.id] = { ref, view };
  });
  useEffect(() => {
    const desktopPhotosElement = document.querySelector(".desktopPhotos");
    const projectsCount = Object.keys(refsAndViews).length;
    document.querySelector(":root").style.setProperty('--projectcount', projectsCount);
  
    // Combine the 'view' values of all refs except the first and last
    const inview = Object.values(refsAndViews)
      .slice(1, -1) // Exclude the first and last elements
      .reduce((accumulator, { view }) => accumulator || view, false);
  
    const { view: view0 } = refsAndViews["0"];
  
    desktopPhotosElement.classList.toggle("right-fixed", inview);
    desktopPhotosElement.classList.toggle("right-relative", (!inview && view0));
  }, [refsAndViews]);
  

  useEffect(() => {
    const details = gsap.utils.toArray(
      ".desktopContentSection:not(:first-child)"
    );
    const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");

    gsap.set(photos, { yPercent: 101 });

    const allPhotos = gsap.utils.toArray(".desktopPhoto");

    let mm = gsap.matchMedia();

    mm.add("(min-width: 600px)", () => {
      details.forEach((detail, index) => {
        let headline = detail.querySelector("h1");
        let animation = gsap
          .timeline()
          .to(photos[index], { yPercent: 0 })
          .set(allPhotos[index], { autoAlpha: 0 });
        ScrollTrigger.create({
          trigger: headline,
          start: "bottom 100%",
          end: "+=80px 60%",
          animation: animation,
          scrub: true,
          // markers:true,
        });
      });

      return () => {};
    });
  }, []);

  
  return (
    <div className="mt-20" id="projects">
      <div
        className=" text-7xl m-auto w-full flex justify-center font-bold first-letter:text-teal  max-sm:text-4xl"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        PROJECTS
      </div>
      <div className="gallery">
        <div className="left">
          <div className="desktopContent">
            {contentData.map((item) => (
              <div
                className="desktopContentSection"
                key={item.id}
                ref={refsAndViews[item.id].ref}
              >
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <a href={item.gitubLink} target="_blank" className="text-teal md:text-2xl md:mt-4"> - Github Link</a>
              </div>
            ))}
          </div>
        </div>

        <div className="right">
          <div className="mobileContent">
            {contentData.map((item) => (
              <div className={`mobilePhoto`} key={item.id} data-aos='fade-up'>
                <h1 className="first-letter:text-xl"data-aos='fade-up'>{item.title}</h1>
                <a href={item.link} target="_blank"><Image src={`/images/projects/${item.img}.png`} alt='project-photo' width={150} height={150}/></a>
                <p data-aos='fade-up'>{item.description}</p>
                <a href={item.gitubLink} target="_blank" className="text-teal md:text-2xl md:mt-4"> - GitHub Link</a>
              </div>
            ))}
          </div>

          <div className="desktopPhotos">
            {contentData.map((item) => (
              <a
                className={`desktopPhoto ${item.img} hover:brightness-95`}
                target="_blank"
                href={item.link}
                key={item.id}
              >
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

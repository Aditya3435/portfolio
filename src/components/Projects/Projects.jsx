import React, { useEffect, useRef } from 'react'
import './Projects.scss'
import gsap from 'gsap'
import { CSSPlugin } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useInView } from 'framer-motion';
gsap.registerPlugin(CSSPlugin);

function Projects() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref0 = useRef(null);
    const view0 = useInView(ref0);
    const view1 = useInView(ref1);
    const view2 = useInView(ref2);
    const view3 = useInView(ref3);
    const view4 = useInView(ref4);
    let inview = view1 || view2|| view3;
    useEffect(()=> {
        if(inview) {
            console.log("2 3 or 4")
            document.querySelector('.desktopPhotos').classList.add('right-fixed');
            document.querySelector('.desktopPhotos').classList.remove('right-relative');
        }
        else {
            if(view0){
                console.log("view0")
                document.querySelector('.desktopPhotos').classList.add('right-relative');
            }
            else if(view4){
                document.querySelector('.desktopPhotos').classList.remove('right-relative');
            }   
            document.querySelector('.desktopPhotos').classList.remove('right-fixed');
        }
    },[inview,view0, view4]);
    useEffect(() => {
        const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)")
        const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)")


        gsap.set(photos, { yPercent: 101 })

        const allPhotos = gsap.utils.toArray(".desktopPhoto")


        let mm = gsap.matchMedia();

        mm.add("(min-width: 600px)", () => {
            details.forEach((detail, index) => {

                let headline = detail.querySelector("h1")
                let animation = gsap.timeline()
                    .to(photos[index], { yPercent: 0 })
                    .set(allPhotos[index], { autoAlpha: 0 })
                ScrollTrigger.create({
                    trigger: headline,
                    start: "top 150%",
                    end: "bottom 100%",
                    animation: animation,
                    scrub: true,
                    // markers: true
                })
            })



            return () => { 
                console.log("mobile")
            };
        });

    }, [])
    return (
        <div className='border-b-2 border-gray-50' id='projects'>
            <div className="gallery">
                <div className="left">
                    <div className="desktopContent">
                        <div className="desktopContentSection" ref={ref0}>
                            <h1>Attendance system using face recognition</h1>
                            <p>This project utilizes openCV&apos;s face recognition model to create an advanced attendance system. It captures user photos, automatically updating attendance records in a spreadsheet. With a user-friendly interface, emphasis on security, and continuous improvement, it offers a reliable and efficient solution for organizations seeking streamlined attendance tracking.</p>
                        </div>
                        <div className="desktopContentSection"  ref={ref1}>
                            <h1>Nimbus Technical Fest Website</h1>
                            <p>This college technical fest website, developed using React.js, SASS, Canvajs, ThreeJs, and pnpm packages, boasts an engaging design featuring captivating animations across six distinct pages. Each page is thoughtfully crafted with a unique layout style, contributing to an immersive and visually appealing user experience. </p>
                        </div>
                        <div className="desktopContentSection" ref={ref2}>
                            <h1>Hillffair Cultural Fest Website</h1>
                            <p>Made this cultural fest website with my team using Reactjs showcasing NIT hamirpur cultural fest thoroughly.</p>
                        </div>
                        <div className="desktopContentSection" ref={ref3}>
                            <h1>Pomodoro Web App</h1>
                            <p>To enhance productivity, I developed a Pomodoro timer web app using HTML, CSS, and JavaScript. The app offers the flexibility of setting time manually or using default settings, catering to individual preferences. Additionally, it provides three distinct color themes to optimize the user experience, making it a versatile and visually appealing tool for efficient time management.</p>
                        </div>
                        <div className="desktopContentSection" ref={ref4}>
                            <h1>Password Generator using Terminal</h1>
                            <p>Scripted a password generator for the terminal using a Bash script, ensuring ease of use, and 100% secure random password by providing clear instructions in a well-documented README, guiding users through the installation and usage of the script..</p>
                        </div>


                    </div>
                </div>

                <div className="right">

                    <div className="mobileContent">
                        <div className="mobilePhoto opencv" ></div>
                        <h1>Red</h1>
                        <p>Red is a color often associated with strong emotions such as passion, love, and anger. Its a bold and attention-grabbing color that can evoke feelings of excitement, warmth, and energy.</p>

                        <div className="mobilePhoto nimbus"></div>
                        <h1>Green</h1>
                        <p>Green is a color that is often associated with nature, growth, and harmony. It is a calming and relaxing color that can evoke feelings of balance, stability, and freshness. In color psychology, green is said to represent balance and stability, making it a popular choice for branding and marketing in the health and wellness industry. </p>

                        <div className="mobilePhoto hillffair"></div>
                        <h1>Pink</h1>
                        <p>Pink is a color that is often associated with femininity, romance, and sweetness. It is a softer and more delicate shade of red that can evoke feelings of warmth, love, and nurturing. In the world of branding and marketing, pink is often used to target a female audience or to promote products that are associated with beauty, love, or romance.</p>

                        <div className="mobilePhoto pomodoro"></div>
                        <h1>Blue</h1>
                        <p>Blue is a color that is often associated with calmness, trust, and reliability. It is a peaceful and serene color that can evoke feelings of stability, security, and professionalism. In color psychology, blue is said to represent loyalty and trust, making it a popular choice for branding and marketing in the finance and technology industries.</p>
                    </div>


                    <div className="desktopPhotos"  >
                        <a href='https://github.com/Aditya3435/Attendance-System-using-Face-Recognition' target='_blank' className="desktopPhoto opencv"></a>
                        <a href='https://festnimbus.nith.ac.in/' target='_blank' className="desktopPhoto nimbus"></a>
                        <a href='https://www.hillffairnith.com/' target='_blank' className="desktopPhoto hillffair"></a>
                        <a href='https://aditya3435.github.io/pomodoro-app/' target='_blank' className="desktopPhoto pomodoro"></a>
                        <a href='https://github.com/Aditya3435/generate_password_using_terminal' target='_blank' className="desktopPhoto password"></a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects
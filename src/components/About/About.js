import styles from './About.module.scss'
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import Image from 'next/image';
import { useTheme } from '../Theme/Theme';
gsap.registerPlugin(ScrollTrigger);
const phrase = "I'm Aditya Maurya, a third-year student at NIT Hamirpur, Himachal Pradesh, India. I am Full Stack developer utilizing MERN stack developed websites for both cultural and technical festivals at my college. Additionally, I have built an \"Attendance System,\" leveraging OpenCV face recognition technology in Python. I am also an active competitive programmer, regularly participating in contests on Codeforces and various other platforms. My problem-solving skills are reflected in having successfully solved over 700 problems on LeetCode. Additionally, I'm also a expert typist on typeracer with the speed of 100+ words per minute.";

export default function About() {
    const { isLightTheme } = useTheme();
    let refs = useRef([]);
    const body = useRef(null);
    const container = useRef(null);

    useEffect(() => {
        createAnimation();
    }, [])
    useEffect(() => {
        document.scrollingElement.scrollTo(0, 0);
        handleScroll();
        return () => { };
    }, []);

    const handleScroll = () => {
        gsap.utils.toArray('.main-about .tech-stack-container .scroller section').forEach((section, index) => {
            const wrapper = section.querySelector('.wrapper');
            const [xStart, xEnd] =
                index % 2
                    ? ['100%', (wrapper.scrollWidth - section.offsetWidth) * -1]
                    : [wrapper.scrollWidth * -1.5, '0%'];
            gsap.fromTo(
                wrapper,
                { x: xStart },
                {
                    x: xEnd,
                    scrollTrigger: {
                        trigger: section,
                        scrub: 0.9,
                        start: `-1000px`,
                        end: `+=600px`,
                    },
                }
            );
        });
    };

    const createAnimation = () => {
        gsap.to(refs.current, {
            scrollTrigger: {
                trigger: container.current,
                scrub: true,
                start: `-600px`,
                end: `+=500px`,
            },
            opacity: 1,
            color: '#008080',
            ease: "none",
            stagger: 0.1,
            duration: 1,
        })
    }

    const splitWords = (phrase) => {
        let body = [];
        phrase.split(" ").forEach((word, i) => {
            const letters = splitLetters(word);
            body.push(<p key={word + "_" + i}>{letters}</p>)
        })
        return body
    }

    const splitLetters = (word) => {
        let letters = []
        word.split("").forEach((letter, i) => {
            letters.push(<span key={letter + "_" + i} ref={el => { refs.current.push(el) }}>{letter}</span>)
        })
        return letters;
    }

    return (
        <div className='flex flex-col justify-center items-center main-about border-t-2 border-white' ref={container} >
            <div className='  text-7xl mt-8' data-aos='fade-down' data-aos-duration='100'>About me</div>
            <main className={styles.aboutMain}>
                <div ref={body} className={styles.aboutBody}>
                    {
                        splitWords(phrase)
                    }
                </div>
            </main>
            <div className='tech-stack-container flex flex-col gap-8'>
                <div className=' text-7xl mt-8 m-auto'>Tech Stack</div>
                <div className="scroller overflow-auto  overflow-x-hidden">
                    {[1, 2, 3].map((el) => (
                        <section key={el}>
                            <div className="wrapper flex items-center gap-12 font-medium border-t-2 border-b-2">
                                {[1, 2, 3, 4, 5, 6].map((el2) => (
                                    <Image
                                        key={el2}
                                        className=" w-auto h-fit rounded-xl m-2 transition-all hover:scale-105"
                                        src={`/images/techstack/languages/${el}_${el2}.png`}
                                        alt="tech-stack"
                                        width={80}
                                        height={50}
                                    />

                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
            <div className='tech-stack-container flex flex-col gap-8 mt-20 '>
                <div className=' text-7xl m-auto'>CP Profiles</div>
                <div className={`scroller overflow-auto text-xl overflow-x-hidden ${isLightTheme ? "bg-gray-200" :"bg-slate-900"}`}>
                    {[1].map((el) => (
                        <section key={el}>
                            <div className="wrapper flex items-center gap-12 text-xl font-medium ">
                                {[1, 2, 3].map((el2) => (
                                    <a href={el2==1 ? "https://codeforces.com/profile/aditya3435/" : el2 == 2 ? "https://codechef.com/users/aditya3435" : "https://leetcode.com/aditya3435/"} key={el2} target='_blank'>
                                        <Image
                                            className="w-auto h-fit rounded-xl m-2 transition-all hover:scale-105 z-10"
                                            src={`/images/cp_profiles/${el2}.png`}
                                            alt="cp-profile"
                                            width={250}
                                            height={50}
                                        /></a>

                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    )
}


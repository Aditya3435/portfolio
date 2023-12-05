import styles from './About.module.scss'
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const phrase = "I'm Aditya Maurya, a third-year student at NIT Hamirpur, Himachal Pradesh, India. I am Full Stack developer utilizing MERN stack developed websites for both cultural and technical festivals at my college. Additionally, I have built an \"Attendance System,\" leveraging OpenCV face recognition technology in Python. I am also an active competitive programmer, regularly participating in contests on Codeforces and various other platforms. My problem-solving skills are reflected in having successfully solved over 700 problems on LeetCode. Additionally, I'm also a expert typist on typeracer with the speed of 100+ words per minute.";

export default function About() {

  let refs = useRef([]);
  const body = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, [])

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `-200px`,
        end: `-50px`,
        markers: true,
      },
      opacity: 1,
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
    <div className='bg-black flex flex-col justify-center items-center' ref={container} >
      <div className=' text-white text-8xl mt-8'>About me</div>
      <main className={styles.aboutMain}>
        <div ref={body} className={styles.aboutBody}>
          {
            splitWords(phrase)
          }
        </div>
      </main>
    </div>
  )
}

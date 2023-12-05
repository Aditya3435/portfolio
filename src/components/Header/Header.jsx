import React, { useEffect } from 'react'
import AOS from 'aos'; import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { useRef } from "react";
import { useInView } from "framer-motion";
import './Header.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import InfiniteText from '../InfinteText/InfiniteText';

function Header() {
    const typedTextRef = useRef(null)
    const cursorRef = useRef(null);
    const ref = useRef(null);
    const isInView = useInView(ref);
    const placeholderText = [
        { type: "heading1", text: "Aditya Maurya" },
    ];
    const container = {
        visible: {
            transition: {
                staggerChildren: 0.025
            }
        }
    };


    const textArray = ["Full Stack Developer.", "Competitive Programmer.", "Python Developer.", "Learner..."];

    let textArrayIndex = 0;
    let charIndex = 0;
    let typeTimeout, eraseTimeout;
    const erase = () => {
        if (isInView) {
          if (charIndex > 0) {
            cursorRef.current.classList.remove('blink');
            typedTextRef.current.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
            charIndex--;
            eraseTimeout = setTimeout(erase, 80);
          } else {
            cursorRef.current.classList.add('blink');
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
            cursorRef.current.classList.remove('blink');
            typedTextRef.current.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            typeTimeout = setTimeout(type, 120);
          } else {
            cursorRef.current.classList.add('blink');
            eraseTimeout = setTimeout(erase, 1000);
          }
        }
      };
      
    useEffect(() => {
        if (isInView) {
            type()
        }
        return () => {
            clearTimeout(eraseTimeout);
            clearTimeout(typeTimeout);
          };
    }, [isInView]);
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false,
        });

    }, [])

    return (
        <main className='bg-black h-screen flex flex-col gap-1 text-white' ref={ref}>
            {isInView ? <div data-scroll data-scroll-speed="0.3" className='m-auto mt-40'>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={container}
                >
                    <div className="container">
                        {placeholderText.map((item, index) => {
                            return <AnimatedText {...item} key={index} />;
                        })}
                    </div>
                </motion.div>
                <p className='typing-text'>I am a <span className="typed-text" ref={typedTextRef}></span><span className="cursor blink" ref={cursorRef}>&nbsp;</span></p>
            </div> : ''}
            {/* <InfiniteText/> */}
            <div className='scroll-down flex flex-col items-center'>
                <div className='text-white p-1 rounded-md pointer-events-none'>Scroll Down</div>
                <KeyboardArrowDownIcon />
            </div>

        </main>
    )
}

export default Header
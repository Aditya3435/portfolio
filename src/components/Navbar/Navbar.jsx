import { useEffect, useRef, useState } from "react";
import Nav from "./nav/NavItems";
import { AnimatePresence } from "framer-motion";
import './Navbar.scss'
export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const prevScrollPosition = useRef({ x: 0, y: 0 });
  useEffect(()=> {
    if(isActive) {
      prevScrollPosition.current = { x: window.scrollX, y: window.scrollY };
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 1000);
      document.body.style.overflow = "hidden";
    }
    else {
      const { x, y } = prevScrollPosition.current;
      window.scrollTo(x, y);
      document.body.style.overflow = "auto";
    }
  }, [isActive])

  return (
    <div>
      <div className='main'>
        <div className='header'>
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className='button'
          >
            <div
              className={`burger ${
                isActive ? 'burgerActive' : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </AnimatePresence>
    </div>
  );
}

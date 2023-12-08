import styles from "./Navbar.module.scss";
import { useEffect, useRef, useState } from "react";
import Nav from "./nav/NavItems";
import { AnimatePresence } from "framer-motion";

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
      <div className={styles.main}>
        <div className={styles.header}>
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={styles.button}
          >
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
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

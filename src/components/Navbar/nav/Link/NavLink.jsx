import styles from "./NavLink.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "../../anim";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function NavLink({ data, isActive, setModal, setIsActive, id }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    // console.log(element);
    if(id=="contact") {
        setTimeout(() => {
            const scrollHeight = document.body.scrollHeight;
            window.scrollTo({
                top: scrollHeight,
                left: 0,
                behavior: "smooth",
              });
          }, 500);
    }
    else if (element) {
      const offset = -500; // Adjust the offset as needed
      const targetPosition = element.offsetTop + offset;
      setTimeout(() => {
        window.scrollTo({
            top: targetPosition,
            left: 0,
            behavior: "smooth",
          });
      }, 500);
    }
  };
  const { title, href, index } = data;

  return (
    <Link
      href=""
      className={styles.link}
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      onClick={() => {
        scrollToSection(id);
        setIsActive(false);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div>{title}</div>
      <div className={styles.rightArrow}>
        <ArrowForwardIcon />
      </div>
    </Link>
  );
}

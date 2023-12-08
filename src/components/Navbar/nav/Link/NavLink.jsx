import styles from "./NavLink.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "../../anim";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useMediaQuery } from "react-responsive";
export default function NavLink({ data, isActive, setModal, setIsActive, id }) {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
     if (element) {
      const offset = -100; 
      let targetPosition = element.offsetTop + offset + (isDesktopOrLaptop ? (id=="about"?2700:0) : 0);
      if(id == "contact") targetPosition = document.body.scrollHeight;
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

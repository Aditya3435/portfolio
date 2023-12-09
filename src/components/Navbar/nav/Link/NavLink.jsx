import "./NavLink.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "../../anim";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useMediaQuery } from "react-responsive";
export default function NavLink({ data,  setModal, setIsActive }) {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const {href} = data;
  const scrollToSection = (href) => {
    const element = document.getElementById(href);
     if (element) {
      const offset = -100; 
      let targetPosition = element.offsetTop + offset + (isDesktopOrLaptop ? (href=="about"?2700:0) : 0);
      if(href == "contact") targetPosition = document.body.scrollHeight;
      setTimeout(() => {
        window.scrollTo({
            top: targetPosition,
            left: 0,
            behavior: "smooth",
          });
      }, 500);
    }
  };
  const { title,  index } = data;

  return (
    <Link
      href=""
      className='link'
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      onClick={() => {
        scrollToSection(href);
        setIsActive(false);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div>{title}</div>
      <div className='rightArrow'>
        <ArrowForwardIcon />
      </div>
    </Link>
  );
}

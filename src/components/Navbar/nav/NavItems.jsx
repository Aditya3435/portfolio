import React, { useState } from 'react'
import styles from './NavItems.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../anim';
import Link from './Link/NavLink';
import Curve from './Curve/Curve';
import NavFooter from './NavFooter/NavFooter';
import Modal from './modal/Modal';

const navItems = [
  {
    title: "Home",
    href: "/",
    src: "home.png",
    color: "#003459"

  },
  {
    title: "About",
    href: "#about",
    src: "about.png",
    color: "#118ab2"
  },
  {
    title: "Projects",
    href: "#projects",
    src: "projects.png",
    color: "#023047"
  },
  {
    title: "Contact Me",
    href: "#contact",
    src: "contact.png",
    color: "#3d5a80"
  },
]

export default function NavItems({setIsActive}) {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  const [modal, setModal] = useState({ active: false, index: 0 })

  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={styles.menu}>
      <div className={styles.body}>
        <div onMouseLeave={() => { setSelectedIndicator(pathname) }} className={styles.nav}>
          {
            navItems.map((data, index) => {
              return <Link key={index} data={{ ...data, index }} setModal={setModal} isActive={selectedIndicator == data.href} setSelectedIndicator={setSelectedIndicator}  setIsActive={setIsActive}></Link>
            })
          }
        </div>
        <NavFooter />
      </div>
      <Curve />
        <Modal modal={modal} projects={navItems} />
    </motion.div>
  )
}
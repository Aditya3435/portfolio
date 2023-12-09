import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { menuSlide } from '../anim';
import Link from './Link/NavLink';
import NavFooter from './NavFooter/NavFooter';
import Modal from './modal/Modal';
import './NavItems.scss'
const navItems = [
  {
    title: "Home",
    href: "home",
    src: "home.png",

  },
  {
    title: "About",
    href: "about",
    src: "about.png",
  },
  {
    title: "Projects",
    href: "projects",
    src: "projects.png",
  },
  {
    title: "Contact Me",
    href: "contact",
    src: "contact.png",
  },
]

export default function NavItems({setIsActive}) {

  const [modal, setModal] = useState({ active: false, index: 0 })
  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className='menu'>
      <div className='body'>
        <div className='nav'>
          {
            navItems.map((data, index) => {
              return <Link key={index} data={{ ...data, index }} setModal={setModal}  setIsActive={setIsActive}></Link>
            })
          }
        </div>
        <NavFooter />
      </div>
        <Modal modal={modal} projects={navItems} />
    </motion.div>
  )
}
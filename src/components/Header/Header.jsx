'use client';
import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)

function Header() {
  useEffect(()=> {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll =  new LocomotiveScroll();
      }
    )
  },[])
  return (
    <main className='flex flex-col gap-3'>
    </main>
  )
}

export default Header
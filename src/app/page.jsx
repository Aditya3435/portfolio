"use client";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import CursorPointer from "@/components/Cursor";
import { gsap } from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeProvider } from "@/components/Theme/Theme";
import ThemeToggle from "@/components/ToggleTheme/ToggleTheme";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import ScrollTrigger from "gsap/ScrollTrigger";
import Experience from "@/components/Experience/Experience";
import About from "@/components/About/About";
import Loading from "@/components/Loading/Loading";
import { useMediaQuery } from 'react-responsive';
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
	const component = useRef();
	const slider = useRef();
	const [showHeader, setShowHeader] = useState(false); // false
	const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
  	// const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

	useLayoutEffect(() => {
		if (showHeader && isDesktopOrLaptop) {
			let ctx = gsap.context(() => {
				let panels = gsap.utils.toArray(".scroll-panel");
				gsap.to(panels, {
					xPercent: -100 * (panels.length - 1),
					ease: "none",
					scrollTrigger: {
						trigger: slider.current,
						pin: true,
						scrub: 1,
						// snap: 1 / (panels.length - 1),
						end: () => "+=" + slider.current.offsetWidth,
						// markers:true,
					},
				});
			});
			return () => ctx.revert();
		}
	}, [component, showHeader]);
	useEffect(() => {
		AOS.init({
			once: false,
		});
	}, []);


	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	useEffect(() => {
		const handleMouseMovement = (e) => {
			setX(e.clientX);
			setY(e.clientY);
		};
		document.addEventListener("mousemove", handleMouseMovement);
		return () => {
			document.removeEventListener("mousemove", handleMouseMovement);
		};
	}, [x, y]);
	return (
		<ThemeProvider>
			<main>
				{showHeader ? (
					<div className="content" ref={component}>
						 <Navbar />
						 <Header />
						<About />
						<Projects />
						<div className="page-container" ref={slider}>
							<div className="scroll-panel">
								<Experience />
							</div>
							<div className="scroll-panel">
								<Contact />
							</div>
						</div>
						<ThemeToggle />
					</div>
				) : (
					<Loading setShowHeader={setShowHeader}/>
				)}
				{showHeader && isDesktopOrLaptop && <CursorPointer x={x} y={y} />} 
			</main>
		</ThemeProvider>
	);
}

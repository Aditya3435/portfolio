'use client';
import { useEffect, useRef, useState, useLayoutEffect } from 'react'
import Header from '@/components/Header/Header'
import Navbar from '@/components/Navbar/Navbar';
import CursorPointer from '@/components/Cursor';
import styled from "styled-components";
import { gsap, Expo } from "gsap";
import About from '@/components/About/About';
import AOS from 'aos'; import 'aos/dist/aos.css';
import { ThemeProvider } from '@/components/Theme/Theme';
import ThemeToggle from '@/components/ToggleTheme/ToggleTheme';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';
import ScrollTrigger from "gsap/ScrollTrigger";
import Experience from '@/components/Experience/Experience';
gsap.registerPlugin(ScrollTrigger);


export default function Home() {
	const component = useRef();
	const slider = useRef();
	const [counter, setCounter] = useState(0);
	const [showHeader, setShowHeader] = useState(false);// false
	useLayoutEffect(() => {
		if (showHeader) {
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
					}
				});
			});
			return () => ctx.revert();
		}
	}, [component, showHeader]);
	useEffect(() => {
		AOS.init({
			once: false,
		})
	}
	);

	// }, [])
	// useEffect(() => {
	// (
	// async () => {
	// const LocomotiveScroll = (await import('locomotive-scroll')).default
	// const locomotiveScroll = new LocomotiveScroll();
	// }
	// )()

	// }, [])

	useEffect(() => {
		const count = setInterval(() => {
			setCounter((counter) =>
				counter < 100
					? counter + 1
					: (clearInterval(count), setCounter(100), reveal())
			);
		}, 25);
	}, []);
	const reveal = () => {
		const t1 = gsap.timeline({
			onComplete: () => {
				t1.to(".content", { width: "100%", ease: Expo.easeInOut, duration: 0.3 });
				setTimeout(() => {
					setShowHeader(true)
				}, 1000);
			},
		});
		t1.to(".follow", {
			width: "100%",
			ease: Expo.easeInOut,
			duration: 1.2,
			delay: 0.7,
		})
			.to(".hide", { opacity: 0, duration: 0.3 })
			.to(".hide", { display: "none", duration: 0.3 })
			.to(".follow", {
				height: "100%",
				ease: Expo.easeInOut,
				duration: 0.7,
				delay: 0.5,
			})
	};
	const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	useEffect(() => {
		const handleMouseMovement = (e) => {
			setX(e.clientX)
			setY(e.clientY)
		}
		document.addEventListener('mousemove', handleMouseMovement);
		return () => {
			document.removeEventListener('mousemove', handleMouseMovement);
		}
	}, [x, y])
	return (
		<ThemeProvider>
			<main >
				{
					showHeader ?
						<Content className="content" ref={component}>
							<Navbar />
							<Header />
							<About />
							<Projects />
							<div className='page-container' ref={slider}>
								<div className='scroll-panel'><Experience /></div>
								<div className='scroll-panel' id='contact'><Contact /></div>
							</div>
							<ThemeToggle />
						</Content>
						:
						<Loading>
							<Follow className="follow"></Follow>
							<ProgressBar
								className="hide"
								id="progress-bar"
								style={{ width: counter + "%" }}
							></ProgressBar>
							<Count id="count" className="hide">
								{counter}%
							</Count>
						</Loading>
				}
				<CursorPointer x={x} y={y}/>

			</main>
		</ThemeProvider>
	)
}
const Loading = styled.div`
  height: 100%;
  width: 100%;
  background-color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;
const Follow = styled.div`
  position: absolute;
  background-color: #000;
  height: 2px;
  width: 0;
  left: 0;
`;

const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  background-color: #fff;
  height: 2px;
  width: 0;
  transition: 0.4s ease-out;
`;

const Count = styled.p`
  position: absolute;
  font-size: 130px;
  color: #fff;
  transform: translateY(-15px);
  font-weight: 500;
`;
const Content = styled.div``;
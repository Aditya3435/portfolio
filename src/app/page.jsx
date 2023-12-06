'use client';
import { useEffect, useState } from 'react'
import Header from '@/components/Header/Header'
import Navbar from '@/components/Navbar/Navbar';
import CursorPointer from '@/components/Cursor';
import styled from "styled-components";
import { gsap, CSSPlugin, Expo } from "gsap";
import About from '@/components/About/About';
gsap.registerPlugin(CSSPlugin);

export default function Home() {
	useEffect(() => {
		(
			async () => {
				const LocomotiveScroll = (await import('locomotive-scroll')).default
				const locomotiveScroll = new LocomotiveScroll();
			}
		)()
	}, [])
	const [counter, setCounter] = useState(0);
	const [showHeader, setShowHeader] = useState(false);// false
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
				setShowHeader(true)
				t1.to(".content", { width: "100%", ease: Expo.easeInOut, duration: 0.3 });

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
		<main>
			{/* <Loading>
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
			{
				showHeader ?
					<Content className="content"> */}
						<Navbar />
						<Header />
						<About />
						<div className='h-screen bg-black'></div>
						<CursorPointer
							x={x}
							y={y}
						/>
					{/* </Content> : ''} */}


		</main>
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
  background-color: #fff;
  height: 2px;
  width: 0;
  left: 0;
  z-index: 2;
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
const Content = styled.div`
  position: absolute;
  width:0;
  left: 0;
  top: 0;
  z-index: 2;
`;
'use client';
import { useEffect } from 'react'
import Header from '@/components/Header/Header'
import Navbar from '@/components/Navbar/Navbar';

export default function Home() {
	useEffect(() => {
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default;
                const locomotiveScroll = new LocomotiveScroll();
            }
        )
    }, [])	
	return (
		<main>
			<Navbar/>
			<Header/>
			<div className='h-screen'></div>
			<div className='h-screen'></div>
			<div className='h-screen'></div>
		</main>
	)
}

import Header from '@/components/Header/Header'
import { gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'

export default function Home() {
	gsap.registerPlugin(CSSPlugin)
	return (
		<main>
			<Header/>
		</main>
	)
}

import styles from './NavLink.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '../../anim';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function NavLink({ data, isActive, setModal, setIsActive }) {
    const { title, href, index } = data;

    return (
        <Link href={href} className={styles.link} onMouseEnter={() => {setModal({active: true, index}) }} onMouseLeave={() => {setModal({active: false, index})}} onClick={()=>{setIsActive(false)}} custom={index} variants={slide} initial="initial" animate="enter" exit="exit">
            <div >{title}</div>
            <div className={styles.rightArrow}><ArrowForwardIcon/></div>
        </Link>
    )
}
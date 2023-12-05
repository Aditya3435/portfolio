import styles from './NavLink.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '../../anim';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function NavLink({ data, isActive, setModal }) {

    const { title, href, index } = data;

    return (
        <motion.div className={styles.link} onMouseEnter={() => {setModal({active: true, index}) }} onMouseLeave={() => {setModal({active: false, index})}} custom={index} variants={slide} initial="initial" animate="enter" exit="exit">
            <Link href={href}>{title}</Link>
            <div className={styles.rightArrow}><ArrowForwardIcon/></div>
        </motion.div>
    )
}
import styles from './NavFooter.module.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MagneticGSAP from '../../magneticGsap';

export default function NavFooter() {
  return (
    <div className='flex justify-between'>
      <div className='pointer-events-none created'>Created by <span>Aditya</span></div>
      <div className={styles.footer}>
        <a href='https://github.com/Aditya3435'><MagneticGSAP><GitHubIcon/></MagneticGSAP></a>
        <a href='https://in.linkedin.com/in/aditya-maurya-490081b4'><MagneticGSAP><button className="hover:bg-black-100 text-white font-semibold py-1 px-2 border border-gray-400 rounded shadow">Resume</button></MagneticGSAP></a>
        <a href='https://in.linkedin.com/in/aditya-maurya-490081b4'><MagneticGSAP><LinkedInIcon/></MagneticGSAP></a>
    </div>
    </div>
  )
}

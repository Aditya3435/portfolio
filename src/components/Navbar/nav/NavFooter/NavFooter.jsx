import styles from "./NavFooter.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MagneticGSAP from "../../magneticGsap";
import FavoriteIcon from '@mui/icons-material/Favorite';
export default function NavFooter() {
  return (
    <div className="flex justify-between items-center  max-sm:flex-col-reverse max-sm:gap-8">
      <div className="pointer-events-none created text-xl">
        Made with <span><FavoriteIcon/></span>
      </div>
      <div className={styles.footer}>
        <a href="https://github.com/Aditya3435">
          <MagneticGSAP>
            <GitHubIcon />
          </MagneticGSAP>
        </a>
        <a href="https://in.linkedin.com/in/aditya-maurya-490081b4">
          <MagneticGSAP>
            <button className="hover:bg-black-100  font-semibold py-1 px-2 border border-gray-400 rounded shadow">
              Resume
            </button>
          </MagneticGSAP>
        </a>
        <a href="https://in.linkedin.com/in/aditya-maurya-490081b4">
          <MagneticGSAP>
            <LinkedInIcon />
          </MagneticGSAP>
        </a>
      </div>
    </div>
  );
}

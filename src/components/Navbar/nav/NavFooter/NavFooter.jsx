import styles from "./NavFooter.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MagneticGSAP from "../../magneticGsap";
import FavoriteIcon from '@mui/icons-material/Favorite';
export default function NavFooter() {
  const links = [
    {
      href: "https://github.com/Aditya3435",
      icon: <GitHubIcon />,
    },
    {
      href: "https://drive.google.com/file/d/1b9jUlytEqOYwDJW9mY3DRjrmsalGSWb8/view",
      icon: null,
    },
    {
      href: "https://in.linkedin.com/in/aditya-maurya-490081b4",
      icon: <LinkedInIcon />,
    },
  ];
  return (
    <div className="flex justify-between items-center max-sm:flex-col-reverse max-sm:gap-8">
      <div className="pointer-events-none created text-xl">
        Made with <span><FavoriteIcon/></span>
      </div>
      <div className={styles.footer}>
      {links.map((link, index) => (
        <a key={index} href={link.href} target="_blank">
          <MagneticGSAP>
            {link.icon != null ? link.icon : <button className="hover:bg-black-100  font-semibold py-1 px-2 border border-gray-400 rounded shadow">Resume</button>}
          </MagneticGSAP>
        </a>
      ))}
      </div>
    </div>
  );
}

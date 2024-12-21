import React,{useState} from 'react';
import styles from "./Navbar.module.css";

import  {getImageUrl} from "../../utils";

export const Navbar = () => {
  const [menuOpen , setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
         <a className={styles.title} href="/"><img src="https://us.123rf.com/450wm/pleasantmode/pleasantmode2310/pleasantmode231002650/215272368-portfolio-bold-text-typography-lettering-vector-design-quote.jpg?ver=6" height="80px" width="230px" /></a>
         <div className={styles.menu}>
          <img className={styles.menuBtn} src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} alt="menu-button" onClick={()=> setMenuOpen(!menuOpen)}/>
          <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={()=> setMenuOpen(false)}>
            <li><a href="#about" style={{color:"#19376d"}}>About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects" >Projects</a></li>
            <li><a href="#Certifications" >Certifications</a></li>

            <li><a href="#contact">Contact</a></li>

          </ul>
         </div>
    </nav>
  )
}


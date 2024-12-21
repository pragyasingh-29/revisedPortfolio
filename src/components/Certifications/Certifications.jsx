import React from 'react';
import styles from "./Certifications.module.css";
import {getImageUrl} from "../../utils";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const Certifications = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    
    <section className={styles.container} data-aos="fade-left" id="Certifications">
        <h2 className={styles.title}>Certfications</h2>
       <div className={styles.content}>
            <img src={getImageUrl("certifications/certifications.png")}  className={styles.image}/>
            <a href="https://drive.google.com/file/d/1vZCvlPpE6GB1ju5YFNq7TF4ZI3YoCg-1/view?usp=drive_link">Click to view &nbsp;&#187;</a>
       </div>

    </section>
  )
}

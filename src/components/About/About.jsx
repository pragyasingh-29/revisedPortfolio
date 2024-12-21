import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './About.module.css';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export const About = () =>{
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className={styles.container} id="about" data-aos="fade-up">
        <h2 className={styles.title}>About</h2>
         <div className={styles.content} >
          <img src={getImageUrl("about/aboutImage.png")} alt="Image sitting with laptop" className={styles.aboutImage}/>
          <ul className={styles.aboutItems}>


            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/cursorIcon.png")} alt="cursor" />
              <div className={styles.aboutItemText}>
                <h3 style={{marginBottom:"12px"}}>Front-end Developer</h3>
                <p style={{lineHeight:"37px"}}>I am a full-stack developer with experience in building responsive and optimized projects.</p>
              </div>
            </li>

            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/serverIcon.png")} alt="cursor" />
              <div  className={styles.aboutItemText}>
                <h3 style={{marginBottom:"12px"}}>Back-end Developer</h3>
                <p style={{lineHeight:"35px"}}>I have an experience of building fast and optimized backend systems and API's.</p>
              </div>
            </li>


          </ul>
         </div>
    </section>
  )
}


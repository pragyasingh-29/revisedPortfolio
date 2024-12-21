import React from 'react';
import {getImageUrl} from "../../utils";
import styles from "./Contact.module.css";


export const Contact = () => {
  return (
    <footer className={styles.container} id='contact'>
        <div style={{marginTop:"120px"}}>

        <div className={styles.text}>
            <h3>Contact Me <img src={getImageUrl("contact/phone.png")} /></h3>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="email icon"/>
                <a href="mailto:pragyaaa.singh22@gmail.com">pragyaaa.singh22@gmail.com</a>
            </li>
            <li className={styles.link} >
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon"/>
                <a href="https://www.linkedin.com/in/pragya-singh-093507253/">linkedin.com/in/pragya-singh-093507253/</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon" />
                <a href="https://github.com/pragyasingh-29/">github.com/pragyasingh-29/</a>
            </li>
           
        </ul>

        </div>

        <div style={{marginTop:"43px"}}>
            <img src={getImageUrl("contact/call.webp")} className={styles.img} alt="contact image"/>
        </div>
        
    </footer>
  )
}

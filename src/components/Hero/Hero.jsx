import React from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className={styles.container}>
        <div className={styles.content} data-aos="fade-right">
        <h1 className={styles.title}>Hello, I am <span>Pragya</span></h1>
        <p className={styles.description}>
            Full-stack Developer with an experience of 8 months in Backend Development using PHP and MySQL Database. Reach out if you'd like to learn more!
        </p>
        <a className={styles.contactBtn} href="mailto:pragyaaa.singh22@gmail.com">Contact Me</a>
        </div>

        <img src={getImageUrl("hero/heroImage.png")} alt="Image of me" className={styles.heroImg} data-aos="fade-left"/>

        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>

        </section>

  )
}

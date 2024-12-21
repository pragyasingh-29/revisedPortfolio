import React from 'react';
import {getImageUrl} from "../../utils";
import styles from "./ProjectCard.module.css";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export const ProjectCard = ({project: {title, imageSrc, description , skills, demo , source}}) => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
         <div className={styles.container} data-aos="fade-up">
                   <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image}/>
                   <h3 className={styles.title}>{title}</h3>
                   <p className={styles.description}>{description}</p>
                   <ul className={styles.skills}>
                    {
                        skills.map((skill , id) =>{
                         return(<li key={id} className={styles.skill}>{skill}</li>);
                        })
                    }
                   </ul>

                   <div className={styles.links}>
                    {/* <a href={demo} className={styles.link}>Demo</a> */}
                    <a href={source} className={styles.link} >Source</a>

                    </div>       

                </div>
  )}
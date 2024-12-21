import React from 'react';
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import styles from "./Experience.module.css";
import { getImageUrl } from '../../utils';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section id="experience" className={styles.container}>
         <h2 className={styles.title}>Experience</h2>
         <div className={styles.content}>
           
            <ul className={styles.history}>
              {history.map((historyItem , id)=>{
                  return <li key={id} className={styles.historyItem} data-aos="fade-right">
                    {/* <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} Logo`} /> */}
                    <div className={styles.historyItemDetails} >
                      <h3>{`${historyItem.organisation}`}</h3>
                      <p style={{fontStyle:"italic", fontSize:"15px"}}>{`${historyItem.role}`}</p>
                      <p  style={{fontSize:"17px"}}>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                      <ul>{historyItem.experiences.map((experience , id) =>{
                           return  <li key={id}>{experience}</li>
                      })}</ul>
                    </div>


                  </li>
                })
              }
            </ul>
         </div>
    </section>
  )
}


// <div className={styles.skills}>
// {skills.map((skill, id) =>{
//     return(
//     <div key={id} className={styles.skill}>
//       <div className={styles.skillImageContainer}>
//         <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
//       </div>
//       <p>{skill.title}</p>
//     </div>
//     )

//   })
// }
// </div>
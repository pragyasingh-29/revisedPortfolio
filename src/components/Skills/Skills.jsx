import React from 'react'
import styles from "./Skills.module.css";
import {getImageUrl} from "../../utils";
// SliderComponent.js
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export const Skills = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  const images = [

    { src: 'html.png', text: 'HTML' },
    { src: 'css.png', text: 'CSS' },
    { src: 'js.png', text: 'Javascript' },
    { src: 'bootstrap.png', text: 'Bootstrap' },
    { src: 'node.png', text: 'NodeJs' },
    { src: 'mongodb.png', text: 'MongoDB' },
    { src: 'react.png', text: 'ReactJs' },
    { src: 'express.png', text: 'Express' },
    { src: 'java.png', text: 'Java' }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
     
    ]

  };

  return (

    <div className={styles.container} data-aos="fade-up" >

      <h2 className={styles.title}>Skills</h2>

      <div className={styles.content}>

      <Slider {...settings} className={styles.slider}>
        {images.map((image, index) => (
          <div key={index}>
            <span>
            <img src={getImageUrl(`skills/${image.src}`)} alt={`Slide ${index + 1}`} /><br/>
            <p className={styles.text}>{image.text}</p>
            </span>
          </div>
        ))}
      </Slider>

      </div>

     
    </div>
  );
};


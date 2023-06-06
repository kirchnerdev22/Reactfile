import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import porscheImage from '../assets/porsche.jpg';
import css3Image from '../assets/css3.png';
import html5Image from '../assets/html5.png';
import javascriptImage from '../assets/javascript.png';

export default function Portfolio() {
  const projects = [
    {
      name: 'Project 1',
      image: porscheImage,
      link: 'https://project1.com',
      description: 'Description for Project 1',
    },
    {
      name: 'Project 2',
      image: css3Image,
      link: 'https://project2.com',
      description: 'Description for Project 2',
    },
    {
      name: 'Project 3',
      image: html5Image,
      link: 'https://project3.com',
      description: 'Description for Project 3',
    },
    {
      name: 'Project 4',
      image: javascriptImage,
      link: 'https://project4.com',
      description: 'Description for Project 4',
    },
  ];

  return (
    <div className="portfolio-container">
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
      
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="project-slide">
            <a href={project.link}>
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
              <div className="project-title">{project.name}</div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

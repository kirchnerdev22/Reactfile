import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import Furbnb from '../assets/Furbnb.png';
import KRN from '../assets/KRN.png';

export default function Portfolio() {
  const projects = [
    {
      name: 'Furbnb boarding',
      image: Furbnb,
      link: 'https://furbnbcare.herokuapp.com/',
      description: 'Backend Work',
    },
    {
      name: 'KRN Fitness',
      image: KRN,
      link: 'https://pacific-sierra-02565.herokuapp.com/',
      description: 'Backend Work',
    },
  ];

  return (
    <div className="portfolio-page"> {/* Add the portfolio-page class to the parent container */}
      <h1 className="portfolio-title">Creative Works</h1>
      <div className="portfolio-container">
        <Swiper spaceBetween={10} slidesPerView={1.8}>
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="project-slide">
              <a href={project.link}>
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image"
                />
                <div className="project-title">
                  {project.name}
                  <br />
                  ({project.description})
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}



import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules"; 
import styles from "./Carousel.module.css";
import "swiper/css";

import Carouselleft from "./Carouselleft/Carouselleft";
import Carouselright from "./Carouselright/Carouselright";

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0); 
  }, [data, swiper]);

  return null;
};

function Carousel({ data, renderComponent }) {
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
        navigation 
      >
        <Controls data={data} />
        
       
        <Carouselleft />
        <Carouselright />

       
        {data.map((ele, index) => (
          <SwiperSlide key={index}>
            {renderComponent(ele)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
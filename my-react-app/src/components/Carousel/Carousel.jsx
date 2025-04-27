// import React, { useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
// import { useSwiper } from "swiper/react";
// import styles from "./Carousel.module.css";
// import "swiper/css";
// import Carouselleft from "./Carouselleft/Carouselleft";
// import Carouselright from "./Carouselright/Carouselright";

// const Controls = ({ data }) => {
//   const swiper = useSwiper();

//   useEffect(() => {
//     swiper.slideTo(0);
//   }, [data]);

//   return <></>;
// };

// function Carousel({ data, renderComponent }) {
//   return (
//     <div className={styles.wrapper}>
//       <Swiper
//         style={{ padding: "0px 20px" }}
//         initialSlide={0}
//         modules={[Navigation]}
//         slidesPerView={"auto"}
//         spaceBetween={40}
//         allowTouchMove
//       >
//         <Controls data={data} />
//         <div>
//           <Carouselleft />
//           <Carouselright />
//         </div>
//         {data.map((ele) => (
//           <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default Carousel;

import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules"; // Only Navigation used
import styles from "./Carousel.module.css";
import "swiper/css";

import Carouselleft from "./Carouselleft/Carouselleft";
import Carouselright from "./Carouselright/Carouselright";

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0); // Reset to first slide when data changes
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
        navigation // enable Swiper's navigation
      >
        <Controls data={data} />
        
        {/* Your custom left and right buttons */}
        <Carouselleft />
        <Carouselright />

        {/* Render slides */}
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
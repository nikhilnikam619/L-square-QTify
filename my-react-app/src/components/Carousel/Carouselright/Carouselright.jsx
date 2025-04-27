import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./Carouselright.module.css";
import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";

export default function CarouselRightNavigation() {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    const handleSlideChange = () => {
      setIsEnd(swiper.isEnd);
    };

    swiper.on("slideChange", handleSlideChange);

    // Cleanup when component unmounts
    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
}
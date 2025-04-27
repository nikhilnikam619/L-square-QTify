import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./Carouselleft.module.css";
import { ReactComponent as LeftArrow } from "../../../assets/LeftArrow.svg";

export default function CarouselLeftNavigation() {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
console.log(LeftArrow);
  useEffect(() => {
    const handleSlideChange = () => {
      setIsBeginning(swiper.isBeginning);
    };

    swiper.on("slideChange", handleSlideChange);

    // Cleanup when component unmounts
    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
}
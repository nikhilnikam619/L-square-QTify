import React from "react";
import styles from "./Hero.module.css";
import headphoneimg from "../../assets/hero_headphones.png";
import Navbar from "../Navbar/Navbar.jsx"

import Cardi from "../Card/Card";

function Hero() {
  return (
   <>
    <div className={styles.hero}>
     
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img
          src={headphoneimg}
          width={212}
          alt="headphones"
        />
      </div>

    </div>
    
    
    </>
  );
}

export default Hero;

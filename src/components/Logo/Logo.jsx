import React from "react";
import LogoImage from "../../assets/logo.png";
import Styles from "./Logo.module.css"

export default function Logo() {
  return <img src={LogoImage} className={Styles.logo} alt="logo" width={67} />;
}

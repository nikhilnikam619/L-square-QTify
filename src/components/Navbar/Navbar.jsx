import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button.jsx";
import Logo from "../Logo/Logo.jsx";
import Search from "../Search/Search.jsx";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
     
      <Button>Give Feedback</Button>
     
    </nav>
  );
}

export default Navbar;

import React from "react";
import styles from "./Header.module.css";
import imagesMorty from "../../Logo/icons8-morty-smith.svg";
import imagesRick from "../../Logo/icons8-rick-sanchez.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_block}>
        <div>
          <NavLink to="/jupiter">
            <img src={imagesMorty}></img>
          </NavLink>
        </div>
        <div className={styles.header_description}>
          <h1>The Rick and Morty characters</h1>
        </div>
        <div className={styles.header_btn_contact}>
          <a
            target="_blank"
            href="https://hh.ru/resume/8ac4e48aff08e59a610039ed1f674139614f35"
          >
            <img src={imagesRick}></img>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

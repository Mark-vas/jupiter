import React from "react";
import styles from "./Header.module.css";
import images from "../../Logo/icons8-morty-smith.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_block}>
        <div>
          <a>
            <img src={images}></img>
            <p>The Rick and Morty</p>
          </a>
        </div>
        <div className={styles.header_navigation_block}>
          <a>About</a>
          <a>Services</a>
          <a>Pricing</a>
          <a>Blog</a>
        </div>
        <div className={styles.header_btn_contact}>
          <button>CONTACT</button>
        </div>
      </div>
      <div className={styles.header_description}>
        <h1>Heroes serial</h1>
        <p>
          Rick and Morty is an American adult animated science fiction sitcom
          created by Justin Roiland and Dan Harmon for Cartoon Network's
          nighttime programming block Adult Swim. The series follows the
          misadventures of cynical mad scientist Rick Sanchez and his
          good-hearted but fretful grandson Morty Smith, who split their time
          between domestic life and interdimensional adventures.
        </p>
      </div>
    </header>
  );
};

export default Header;

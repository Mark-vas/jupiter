import React from "react";
import styles from "./Images.module.css";
import { useState } from "react";

const Images = (props) => {
  const [border, clickImg] = useState(false);

  const borderON = {
    border: "solid",
    borderRadius: "6px",
    borderColor: "green",
  };

  const borderOFF = {
    border: "solid",
    borderRadius: "6px",
    borderColor: "transparent",
  };

  const delON = {
    position: "absolute",
    right: "10px",
    top: "10px",
  };
  const delOFF = {
    display: "none",
  };

  const clickStatus = (e) => {
    e.target.innerText == "Alive"
      ? props.aliveImgs()
      : e.target.innerText == "Dead"
      ? props.deadImgs()
      : props.unkImgs();
  };

  const clickDel = (e) => {
    let id = Number(e.target.id);
    props.delImgs(id);
  };

  return (
    <div className={styles.images}>
      <div className={styles.images_block}>
        <button onClick={clickStatus}>{props.status}</button>
        <p>{props.name}</p>
      </div>
      <div style={border ? delON : delOFF}>
        <button id={props.id} onClick={clickDel}>
          X
        </button>
      </div>
      <img
        style={border ? borderON : borderOFF}
        onClick={() => {
          clickImg((border) => !border);
        }}
        src={props.img}
      ></img>
    </div>
  );
};

export default Images;

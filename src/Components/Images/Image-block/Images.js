import React from "react";
import styles from "./Images.module.css";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

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
      ? props.aliveImgs(e)
      : e.target.innerText == "Dead"
      ? props.deadImgs(e)
      : props.unkImgs(e);
  };

  const clickDel = (e) => {
    let id = Number(e.currentTarget.id);
    props.delImgs(id);
  };

  return (
    <div
      className={styles.images}
      onMouseOver={() => clickImg((border) => !border)}
      onMouseOut={() => clickImg((border) => !border)}
    >
      <div className={styles.images_block}>
        <button onClick={clickStatus}>{props.img.status}</button>
        <p>{props.img.name}</p>
      </div>
      <div style={border ? delON : delOFF}>
        <IconButton
          className={styles.images_delBtn}
          id={props.img.id}
          onClick={clickDel}
        >
          <DeleteIcon />
        </IconButton>
      </div>
      <img
        style={border ? borderON : borderOFF}
        id={props.img.id}
        src={props.img.image}
      ></img>
    </div>
  );
};

export default Images;

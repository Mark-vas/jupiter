import React from "react";
import style from "./CharacterCard.module.css";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { NavLink } from "react-router-dom";

const CharacterCard = (props) => {
  const [border, mouseOnOff] = useState(false);

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

  const statusAlive = {
    backgroundColor: "#90ee90",
  };
  const statusDead = {
    backgroundColor: "#ff4c5b",
  };
  const statusUnknown = {
    backgroundColor: "#bbbbbb",
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
      className={style.images}
      onMouseOver={() => mouseOnOff((border) => !border)}
      onMouseOut={() => mouseOnOff((border) => !border)}
    >
      <div className={style.images_block}>
        <button
          style={
            props.img.status == "Alive"
              ? statusAlive
              : props.img.status == "Dead"
              ? statusDead
              : statusUnknown
          }
          onClick={clickStatus}
        >
          {props.img.status}
        </button>
        <p>{props.img.name}</p>
      </div>
      <div style={border ? delON : delOFF}>
        <IconButton
          className={style.images_delBtn}
          id={props.img.id}
          onClick={clickDel}
        >
          <DeleteIcon />
        </IconButton>
      </div>
      <NavLink to={`/jupiter/${props.img.id}`}>
        <img
          style={border ? borderON : borderOFF}
          id={props.img.id}
          src={props.img.image}
        ></img>
      </NavLink>
    </div>
  );
};

export default CharacterCard;

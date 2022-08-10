import React from "react";
import errorImg from "../../Images/err.png";
import style from "./ErrorBlock.module.css";

const ErrorBlock = () => {
  debugger;
  return (
    <div className={style.error_block}>
      <img src={errorImg}></img>
      <p>Error...</p>
    </div>
  );
};

export default ErrorBlock;

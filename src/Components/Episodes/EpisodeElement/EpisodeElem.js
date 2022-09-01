import React from "react";
import { NavLink } from "react-router-dom";
import style from "./EpisodeElement.module.css";

const EpisodeElem = ({ elem }) => {
  // debugger;
  return (
    <>
      <hr className={style.episode_hr} />
      <div className={style.episode}>
        <div className={style.episode_title}>
          <h1>{elem.id}</h1>
        </div>
        <div>
          <NavLink to={`/jupiter/episodes/${elem.id}`}>
            <h1 style={{ color: "black" }}>{elem.name}</h1>
          </NavLink>
          {/* <h1 style={{ color: "black" }}>{elem.name}</h1> */}
          <p>{elem.air_date}</p>
        </div>
      </div>
    </>
  );
};

export default EpisodeElem;

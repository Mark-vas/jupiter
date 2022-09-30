import React from "react";
import { NavLink } from "react-router-dom";
import style from "./EpisodeElement.module.css";

const EpisodeElem = ({ elem }) => {
  return (
    <>
      <hr className={style.episode_hr} />
      <li className={style.episode}>
        <div className={style.episode_title}>
          <NavLink to={`/jupiter/episodes/${elem.id}`}>
            <h1>
              {elem.episode} - {elem.name}
            </h1>
          </NavLink>
          <p>{elem.air_date}</p>
        </div>
      </li>
    </>
  );
};

export default EpisodeElem;

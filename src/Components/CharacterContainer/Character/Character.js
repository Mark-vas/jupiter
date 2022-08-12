import React from "react";
import style from "./Character.module.css";
import { NavLink } from "react-router-dom";

const Character = ({ character, episodeName }) => {
  // Реализовать запрос названия последней известной локации character.location.name

  return (
    <div className={style.character_block}>
      <img src={character.image}></img>
      <div className={style.character_inf}>
        <h1>{character.name}</h1>
        <p>Species: {character.species}</p>
        <p>Status: {character.status}</p>
        <p>Gender: {character.gender}</p>
        <p>
          Last known location:{" "}
          {character.location ? character.location.name : "No data"}
        </p>
        <p>
          First seen in:{" "}
          <NavLink to={`/jupiter/episodes/${character.id}`}>
            {episodeName.name}
          </NavLink>
        </p>
      </div>
    </div>
  );
};
export default Character;

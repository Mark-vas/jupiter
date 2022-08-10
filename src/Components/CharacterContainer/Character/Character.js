import React from "react";
import style from "./Character.module.css";

const CharacterContainer = ({ character }) => {
  // Реализовать запрос названия первого упоминания {character.episode[0]}

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
          First seen in: {character.episode ? character.episode[0] : "No data"}
        </p>
      </div>
    </div>
  );
};
export default CharacterContainer;

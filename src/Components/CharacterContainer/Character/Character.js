import React from "react";
import style from "./Character.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getEpisodeTC } from "../../../Store/Episodes/action";
import { episodeSelector } from "../../../Store/Episodes/EpisodesSelector";
import { useEffect } from "react";

const Character = ({ character }) => {
  const episode = useSelector(episodeSelector);
  const dispatch = useDispatch();
  const requestEpisode = async (url) => {
    dispatch(getEpisodeTC(url));
  };

  useEffect(() => {
    if (character.episode) {
      requestEpisode(character.episode[0].slice(-1));
    }
  }, [character.episode]);

  return (
    <div className={style.character}>
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
            {character.episode ? (
              <NavLink
                to={`/jupiter/episodes/${character.episode[0].slice(-1)}`}
              >
                First seen in: {episode.name}
              </NavLink>
            ) : (
              "No data"
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Character;

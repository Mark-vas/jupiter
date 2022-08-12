import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  selectCharacter,
  selectError,
} from "../../Store/Character/characterSelector";
import { getCharacterTC } from "../../Store/Character/action";
import ErrorBlock from "../ErrorBlock/ErrorBlock";
import Character from "./Character/Character";
import { episodeSelector } from "../../Store/Episodes/EpisodesSelector";
import { getEpisodeTC } from "../../Store/Episodes/action";

const CharacterContainer = () => {
  const character = useSelector(selectCharacter);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const requestCharacter = async (id) => {
    dispatch(getCharacterTC(id));
    dispatch(getEpisodeTC(id));
  };
  let { id } = useParams();
  useEffect(() => {
    requestCharacter(id);
  }, []);

  const episode = useSelector(episodeSelector);

  return (
    <>
      {error ? (
        <ErrorBlock />
      ) : (
        <div>
          <Character character={character} episodeName={episode} />
        </div>
      )}
    </>
  );
};
export default CharacterContainer;

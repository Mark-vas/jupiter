import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getEpisodeTC } from "../../../Store/Episodes/action";
import {
  episodeSelector,
  errorSelector,
} from "../../../Store/Episodes/EpisodesSelector";
import ErrorBlock from "../../ErrorBlock/ErrorBlock";
import EpisodePageCharacter from "./EpisodePageCharacter/EpisodePageCharacter";
import { getEpisodeChatacterTC } from "../../../Store/Character/action";
import { selectCharacter } from "../../../Store/Character/characterSelector";
import { api } from "../../../API/api";

const EpisodePage = () => {
  const episode = useSelector(episodeSelector);
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();
  const requestEpisode = async (id) => {
    dispatch(getEpisodeTC(id));
  };
  let { id } = useParams();
  useEffect(() => {
    requestEpisode(id);
  }, []);

  // episode - массив данных выбранного эпизода. Необходимо красиво его разместить на странице

  let characterEpisode = [];
  // characterEpisode = episode.characters;
  // const elem = characterEpisode.map((img, index) => {
  //    debugger;
  //   return <EpisodePageCharacter image={img} key={index} />;
  // });

  episode.characters
    ? (characterEpisode = episode.characters.map((img, index) => {
        // debugger;
        return <EpisodePageCharacter image={img} key={index} />;
      }))
    : (characterEpisode = "loading");

  console.log(episode);

  return (
    <>
      {!episode ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {episode.name}
          <div>{characterEpisode}</div>
        </div>
      )}
    </>
  );
};

export default EpisodePage;

import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getEpisodeTC } from "../../../Store/Episodes/action";
import { episodeSelector } from "../../../Store/Episodes/EpisodesSelector";
import EpisodePageCharacter from "./EpisodePageCharacter/EpisodePageCharacter";

const EpisodePage = () => {
  const episode = useSelector(episodeSelector);
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
  episode.characters
    ? (characterEpisode = episode.characters.map((img, index) => {
        return (
          <EpisodePageCharacter
            episode={episode}
            image={img}
            key={index}
            index={index}
          />
        );
      }))
    : (characterEpisode = "loading");

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

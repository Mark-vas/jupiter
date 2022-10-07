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

  let characterEpisode = [];
  episode.characters
    ? (characterEpisode = <EpisodePageCharacter arr={episode.characters} />)
    : (characterEpisode = "loading");

  return (
    <>
      {!episode ? (
        <h1>Loading...</h1>
      ) : (
        <div style={{ paddingLeft: "10px" }}>
          <h1 style={{ color: "black" }}>{episode.name}</h1>
          <p>Episode: {episode.episode}</p>
          <p>Air date: {episode.air_date}</p>
          <div>{characterEpisode}</div>
        </div>
      )}
    </>
  );
};

export default EpisodePage;

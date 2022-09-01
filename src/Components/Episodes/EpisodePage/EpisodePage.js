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

const EpisodePage = () => {
  debugger;
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
  // episode - массив выбранного эпизода. Необходимо красиво его разместить на странице
  // console.log(episode);

  return <>{error ? <ErrorBlock /> : <div>{episode.name}</div>}</>;
};

export default EpisodePage;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getEpisodesTC, loadEpisodesTC } from "../../Store/Episodes/action";
import {
  episodesSelector,
  errorSelector,
  infoSelector,
} from "../../Store/Episodes/EpisodesSelector";
import ErrorBlock from "../ErrorBlock/ErrorBlock";
import EpisodeElem from "./EpisodeElement/EpisodeElem";
import Pagination from "@mui/material/Pagination";
import style from "./EpisodesContainer.module.css";

const EpisodesContainer = () => {
  const episodes = useSelector(episodesSelector);
  const info = useSelector(infoSelector);
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();
  const requestEpisodes = async () => {
    dispatch(getEpisodesTC());
  };
  useEffect(() => {
    requestEpisodes();
  }, []);

  const episodeElem = episodes.map((e) => {
    return <EpisodeElem key={Number(e.id)} elem={e} />;
  });

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    dispatch(loadEpisodesTC(value));
  };

  // episodes - массив всех эпизодов. Необходимо красиво их разместить на странице

  return (
    <>
      {error ? (
        <ErrorBlock />
      ) : (
        <div className={style.block}>
          <p>Total episodes: {info.count}</p>
          <div className={style.episodes}>
            <div>{episodeElem}</div>
            <div>
              <Pagination
                count={info.pages}
                page={page}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EpisodesContainer;

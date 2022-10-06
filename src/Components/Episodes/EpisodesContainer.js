import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getEpisodesTC, episodeSeasonAC } from "../../Store/Episodes/action";
import {
  episodesSelector,
  errorSelector,
  infoSelector,
} from "../../Store/Episodes/EpisodesSelector";
import ErrorBlock from "../ErrorBlock/ErrorBlock";
import EpisodeElem from "./EpisodeElement/EpisodeElem";
import style from "./EpisodesContainer.module.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

const EpisodesContainer = () => {
  const episodes = useSelector(episodesSelector);
  const season = useSelector(infoSelector);
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();
  const requestEpisodes = async () => {
    dispatch(getEpisodesTC());
  };
  useEffect(() => {
    requestEpisodes();
  }, []);

  let episodeElem = [];

  season == "ONE"
    ? (episodeElem = episodes.episodesOneSeason.map((e, index) => {
        return <EpisodeElem key={index} elem={e} />;
      }))
    : season == "TWO"
    ? (episodeElem = episodes.episodesTwoSeason.map((e, index) => {
        return <EpisodeElem key={index} elem={e} />;
      }))
    : season == "THREE"
    ? (episodeElem = episodes.episodesThreeSeason.map((e, index) => {
        return <EpisodeElem key={index} elem={e} />;
      }))
    : season == "FOUR"
    ? (episodeElem = episodes.episodesFourSeason.map((e, index) => {
        return <EpisodeElem key={index} elem={e} />;
      }))
    : (episodeElem = episodes.episodesFiveSeason.map((e, index) => {
        return <EpisodeElem key={index} elem={e} />;
      }));

  const buttons = document.querySelectorAll("button");

  const clickBtnSeason = (e) => {
    for (let i = 0; i < buttons.length; i++) {
      [...buttons].forEach((el) => {
        el.style.backgroundColor = "transparent";
      });

      e.target.style.backgroundColor = "peachpuff";
    }
    dispatch(episodeSeasonAC(e.target.innerText));
  };

  return (
    <>
      {error ? (
        <ErrorBlock />
      ) : (
        <div className={style.block}>
          <div className={style.episodes}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                "& > *": {
                  m: 1,
                },
              }}
            >
              <ButtonGroup
                onClick={clickBtnSeason}
                variant="text"
                aria-label="text button group"
              >
                <Button
                  style={{
                    backgroundColor: "peachpuff",
                    color: "black",
                    fontWeight: "bold",
                    fontFamily: "cursive",
                  }}
                >
                  One
                </Button>
                <Button
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontFamily: "cursive",
                  }}
                >
                  Two
                </Button>
                <Button
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontFamily: "cursive",
                  }}
                >
                  Three
                </Button>
                <Button
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontFamily: "cursive",
                  }}
                >
                  Four
                </Button>
                <Button
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontFamily: "cursive",
                  }}
                >
                  Five
                </Button>
              </ButtonGroup>
            </Box>
            <ul>{episodeElem}</ul>
          </div>
        </div>
      )}
    </>
  );
};

export default EpisodesContainer;

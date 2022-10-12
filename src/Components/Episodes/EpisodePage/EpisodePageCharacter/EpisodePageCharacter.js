import React from "react";
import { getEpisodeChatacterTC } from "../../../../Store/Character/action";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCharactersEpisode } from "../../../../Store/Character/characterSelector";
import OneEpisode from "./OneEpisode";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const EpisodePageCharacter = (props) => {
  const imageCharacter = useSelector(selectCharactersEpisode);
  const dispatch = useDispatch();
  const requestImageCharacter = async (image) => {
    dispatch(getEpisodeChatacterTC(image));
  };
  useEffect(() => {
    requestImageCharacter(props.arr);
  }, [imageCharacter]);

  return (
    <>
      {imageCharacter[0] ? (
        <OneEpisode imageCharacter={imageCharacter} />
      ) : (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
    </>
  );
};

export default EpisodePageCharacter;

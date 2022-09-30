import React from "react";
import {
  getEpisodeChatacterTC,
  cleanAC,
} from "../../../../Store/Character/action";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCharactersEpisode } from "../../../../Store/Character/characterSelector";
import OneEpisode from "./OneEpisode";

const EpisodePageCharacter = (props) => {
  const imageCharacter = useSelector(selectCharactersEpisode);
  const dispatch = useDispatch();
  const requestImageCharacter = async (image) => {
    // debugger;
    // dispatch(cleanAC());
    dispatch(getEpisodeChatacterTC(image));
  };
  useEffect(() => {
    requestImageCharacter(props.arr);
  }, [props]);

  return (
    <>
      {imageCharacter[0] ? (
        <OneEpisode imageCharacter={imageCharacter} />
      ) : (
        <>loading...</>
      )}
    </>
  );
};

export default EpisodePageCharacter;

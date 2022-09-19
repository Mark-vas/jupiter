import React from "react";
import { getEpisodeChatacterTC } from "../../../../Store/Character/action";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCharactersEpisode } from "../../../../Store/Character/characterSelector";

const EpisodePageCharacter = (props) => {
  const imageCharacter = useSelector(selectCharactersEpisode);
  const dispatch = useDispatch();
  const requestImageCharacter = async (image) => {
    dispatch(getEpisodeChatacterTC(image));
  };
  useEffect(() => {
    requestImageCharacter(props.image);
  }, []);

  return (
    <>
      {imageCharacter ? (
        <div>{imageCharacter[props.index]}</div>
      ) : (
        <>loading...</>
      )}
    </>
  );
};

export default EpisodePageCharacter;

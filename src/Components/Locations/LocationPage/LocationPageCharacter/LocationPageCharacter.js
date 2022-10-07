import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const LocationPageCharacter = (props) => {
  const dispatch = useDispatch();
  const requestImageCharacter = async (image) => {
    // dispatch(getEpisodeChatacterTC(image));
  };
  useEffect(() => {
    requestImageCharacter(props.arr);
  }, [props]);
};

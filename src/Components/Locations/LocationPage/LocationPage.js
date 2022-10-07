import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const LocationPage = () => {
  const dispatch = useDispatch();
  const requestEpisode = async (id) => {
    // dispatch(getEpisodeTC(id));
  };
  let { id } = useParams();
  useEffect(() => {
    requestEpisode(id);
  }, []);

  return <>LocationPage</>;
};

export default LocationPage;

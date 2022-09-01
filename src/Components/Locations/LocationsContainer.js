import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { locationsTC } from "../../Store/Locations/action";
import {
  errorSelector,
  locationsSelector,
  infoSelector,
} from "../../Store/Locations/LocationsSelector";
import ErrorBlock from "../ErrorBlock/ErrorBlock";

const LocationsContainer = () => {
  const locations = useSelector(locationsSelector);
  const error = useSelector(errorSelector);
  const info = useSelector(infoSelector);
  const dispatch = useDispatch();
  const requestLocations = async () => {
    dispatch(locationsTC());
  };
  useEffect(() => {
    requestLocations();
  }, []);
  // console.log(locations);
  // console.log(info);
  return <>{error ? <ErrorBlock /> : <>LocationsContainer</>}</>;
};
export default LocationsContainer;

import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { locationCharacterTC } from "../../../../Store/Locations/action";
import { locationCharacterSelector } from "../../../../Store/Locations/LocationsSelector";
import LocationCharacterImg from "./LocationCharacter";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const LocationPageCharacter = (props) => {
  const locationCharacter = useSelector(locationCharacterSelector);
  const dispatch = useDispatch();
  const requestImageCharacter = async (image) => {
    dispatch(locationCharacterTC(image));
  };

  useEffect(() => {
    requestImageCharacter(props.arr);
  }, [props.arr]);

  return (
    <>
      {locationCharacter[0] ? (
        <LocationCharacterImg
          locationCharacter={locationCharacter}
        ></LocationCharacterImg>
      ) : (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
    </>
  );
};
export default LocationPageCharacter;

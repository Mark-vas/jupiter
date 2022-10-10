import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { locationTC } from "../../../Store/Locations/action";
import { locationSelector } from "../../../Store/Locations/LocationsSelector";
import LocationPageCharacter from "./LocationPageCharacter/LocationPageCharacter";

const LocationPage = () => {
  const location = useSelector(locationSelector);
  const dispatch = useDispatch();
  let { id } = useParams();
  const requestImageCharacter = async (id) => {
    dispatch(locationTC(id));
  };

  useEffect(() => {
    requestImageCharacter(id);
  }, []);

  let locationCharacter = [];
  if (location.residents) {
    locationCharacter = <LocationPageCharacter arr={location.residents} />;
  }

  return (
    <>
      {!location ? (
        <h1>Loading...</h1>
      ) : (
        <div style={{ paddingLeft: "10px" }}>
          <h1 style={{ color: "black" }}>{location.name}</h1>
          <p>Dimension: {location.dimension}</p>
          <p>Type: {location.type}</p>
          <div>{locationCharacter}</div>
        </div>
      )}
    </>
  );
};

export default LocationPage;

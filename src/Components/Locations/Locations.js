import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Locations.module.css";

const Locations = (props) => {
  debugger;
  const locations = props.locations.map((location, index) => {
    debugger;
    return (
      <div key={index}>
        <NavLink to={`/jupiter/locations/${location.id}`}>
          <h1>{location.name}</h1>
        </NavLink>
        <p>Type: {location.type}</p>
      </div>
    );
  });
  return <>{locations}</>;
};
export default Locations;

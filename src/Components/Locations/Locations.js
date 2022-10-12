import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Locations.module.css";

const Locations = (props) => {
  const locations = props.locations.map((location, index) => {
    return (
      <div key={index}>
        <hr className={style.location_hr} />
        <li className={style.location}>
          <div className={style.location_title}>
            <NavLink to={`/jupiter/locations/${location.id}`}>
              <h1>{location.name}</h1>
            </NavLink>
            <p>Type: {location.type}</p>
          </div>
        </li>
      </div>
    );
  });
  return <>{locations}</>;
};
export default Locations;

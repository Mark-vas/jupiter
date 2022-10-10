import React from "react";
import { NavLink } from "react-router-dom";

const LocationCharacterImg = (props) => {
  let styleImg = {
    border: "solid transparent",
    borderRadius: "6px",
  };

  let styleDiv = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  };

  let locationCharacters = props.locationCharacter.map((item, index) => {
    return (
      <li id={item.id} key={index} style={{ listStyleType: "none" }}>
        <NavLink to={`/jupiter/${item.id}`}>
          <img style={styleImg} src={item.image} />
        </NavLink>
      </li>
    );
  });

  return <div style={styleDiv}>{locationCharacters}</div>;
};
export default LocationCharacterImg;

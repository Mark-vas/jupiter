import React from "react";
import { NavLink } from "react-router-dom";

const OneEpisode = (props) => {
  let styleImg = {
    border: "solid transparent",
    borderRadius: "6px",
  };

  let styleDiv = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  };

  let episodeCharacters = props.imageCharacter.map((item, index) => {
    return (
      <li id={item.id} key={index} style={{ listStyleType: "none" }}>
        <NavLink to={`/jupiter/${item.id}`}>
          <img style={styleImg} src={item.image} />
        </NavLink>
      </li>
    );
  });

  return <div style={styleDiv}>{episodeCharacters}</div>;
};
export default OneEpisode;

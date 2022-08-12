import React from "react";

const EpisodeElem = ({ elem }) => {
  return (
    <>
      <h1 style={{ color: "black" }}>{elem.name}</h1>
      <p>{elem.air_date}</p>
    </>
  );
};

export default EpisodeElem;

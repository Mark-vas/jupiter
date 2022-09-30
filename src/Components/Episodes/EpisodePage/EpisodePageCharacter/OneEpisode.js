import React from "react";

const OneEpisode = (props) => {
  //   const dispatch = useDispatch();
  //   const requestImageCharacter = async () => {
  //     dispatch(cleanAC());
  //   };

  //   useEffect(() => {
  //     requestImageCharacter();
  //   }, []);
  //   debugger;
  let styleImg = {
    // width: "100px",
  };
  //
  // display: "flex";
  // flexWrap: "wrap";

  let styleDiv = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };

  const fff = (a) => {
    debugger;
  };

  let episodeCharacters = props.imageCharacter.map((item, index) => {
    return (
      <li
        onClick={fff}
        id={item.id}
        key={index}
        style={{ listStyleType: "none" }}
      >
        <img style={styleImg} src={item.image}></img>
      </li>
    );
  });

  return <div style={styleDiv}>{episodeCharacters}</div>;
};
export default OneEpisode;

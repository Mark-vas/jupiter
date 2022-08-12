import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  selectImages,
  selectError,
} from "../../Store/Characters/CharactersSelector";
import {
  getImagesTC,
  loadImagesTC,
  aliveImagesAC,
  deadImagesAC,
  unkImagesAC,
  delImagesAC,
  showAllImgsAC,
} from "../../Store/Characters/action";
import CharacterCard from "./CharacterCard/CharacterCard";
import style from "./CharactersContainer.module.css";
import ErrorBlock from "../ErrorBlock/ErrorBlock";

const CharactersContainer = () => {
  const images = useSelector(selectImages);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const requestImages = async () => {
    dispatch(getImagesTC());
  };
  useEffect(() => {
    requestImages();
  }, []);

  let arr = [];
  images.type == "Alive"
    ? (arr = images.aliveImages)
    : images.type == "Dead"
    ? (arr = images.deadImages)
    : images.type == "unknown"
    ? (arr = images.unkImages)
    : (arr = images.images);

  const [count, setCount] = useState(1);
  const loadImgs = (e) => {
    let num = count + 1;
    if (num <= 42) {
      dispatch(loadImagesTC(num));
    } else {
      e.target.parentElement.style.display = "none";
    }
  };

  const aliveImgs = () => {
    dispatch(aliveImagesAC());
  };

  const deadImgs = () => {
    dispatch(deadImagesAC());
  };

  const unkImgs = () => {
    dispatch(unkImagesAC());
  };

  const showImgs = (e) => {
    e.target.innerHTML == "Alive"
      ? dispatch(aliveImagesAC())
      : e.target.innerHTML == "Dead"
      ? dispatch(deadImagesAC())
      : e.target.innerHTML == "unknown"
      ? dispatch(unkImagesAC())
      : dispatch(showAllImgsAC());
  };

  const delImgs = (id) => {
    dispatch(delImagesAC(id));
    images.type == "Alive"
      ? dispatch(aliveImagesAC())
      : images.type == "Dead"
      ? dispatch(deadImagesAC())
      : images.type == "unknown"
      ? dispatch(unkImagesAC())
      : dispatch(showAllImgsAC);
  };

  const imgElem = arr.map((img) => {
    return (
      <CharacterCard
        delImgs={delImgs}
        aliveImgs={aliveImgs}
        deadImgs={deadImgs}
        unkImgs={unkImgs}
        key={Number(img.id)}
        img={img}
      />
    );
  });

  let buttonGroup = ["All", "Alive", "Dead", "unknown"];
  const buttonElem = buttonGroup.map((btn) => {
    return (
      <button
        key={btn}
        onClick={showImgs}
        style={btn == images.type ? { color: "green" } : {}}
      >
        {btn}
      </button>
    );
  });

  return (
    <>
      {error ? (
        <ErrorBlock />
      ) : (
        <main className={style.characters}>
          <div className={style.button_group}>{buttonElem}</div>
          <div className={style.container}>{imgElem}</div>
          {images.type == "All" ? (
            <div className={style.btn_load}>
              <button
                onClick={(e) => {
                  setCount(count + 1);
                  loadImgs(e);
                }}
              >
                LOAD MORE
              </button>
            </div>
          ) : (
            <></>
          )}
        </main>
      )}
    </>
  );
};
export default CharactersContainer;

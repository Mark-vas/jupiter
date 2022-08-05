import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  selectImages,
  selectError,
} from "../../Store/Portfolio/imagesSelector";
import {
  getImagesTC,
  loadImagesTC,
  aliveImagesAC,
  deadImagesAC,
  unkImagesAC,
  delImagesAC,
  showAllImgsAC,
} from "../../Store/Portfolio/action";
import Images from "./Image-block/Images";
import style from "./ImagesContainer.module.css";
import errorImg from "../../Images/err.png";

const ImagesContainer = () => {
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

  const changeBtnColor = (e) => {
    let btn_group = document.getElementsByClassName("btn_category");
    for (let i = 0; i < btn_group.length; i++) {
      e.target.innerHTML == btn_group[i].innerHTML
        ? (btn_group[i].style.color = "green")
        : (btn_group[i].style.color = "");
    }
  };

  const showAllImgs = (e) => {
    dispatch(showAllImgsAC());
    changeBtnColor(e);
  };

  const [count, setCount] = useState(1);
  const loadImgs = (e) => {
    let num = count + 1;
    if (num <= 42) {
      dispatch(loadImagesTC(num));
    } else {
      e.target.parentElement.style.display = "none";
    }
  };

  const aliveImgs = (e) => {
    dispatch(aliveImagesAC());
    changeBtnColor(e);
  };

  const deadImgs = (e) => {
    dispatch(deadImagesAC());
    changeBtnColor(e);
  };

  const unkImgs = (e) => {
    dispatch(unkImagesAC());
    changeBtnColor(e);
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
      <Images
        delImgs={delImgs}
        aliveImgs={aliveImgs}
        deadImgs={deadImgs}
        unkImgs={unkImgs}
        key={Number(img.id)}
        img={img}
      />
    );
  });

  const styleError = {
    color: "red",
  };

  return (
    <>
      {error ? (
        // <p>OOPS...</p>
        <div className={style.error_block}>
          <img src={errorImg}></img>
          <p>Error...</p>
        </div>
      ) : (
        <main className={style.characters}>
          <div className={style.button_group}>
            <button className="btn_category" id="1" onClick={showAllImgs}>
              Show All
            </button>
            <button className="btn_category" id="2" onClick={aliveImgs}>
              Alive
            </button>
            <button className="btn_category" id="3" onClick={deadImgs}>
              Dead
            </button>
            <button className="btn_category" id="4" onClick={unkImgs}>
              unknown
            </button>
          </div>
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
export default ImagesContainer;

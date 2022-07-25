import React from "react";
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

const ImagesContainer = () => {
  const images = useSelector(selectImages);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  let num = 1;
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

  const loadImgs = () => {
    if (num < 42) {
      num++;
      dispatch(loadImagesTC(num));
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
      : dispatch(unkImagesAC());
  };

  const imgElem = arr.map((img) => {
    return (
      <Images
        delImgs={delImgs}
        aliveImgs={aliveImgs}
        deadImgs={deadImgs}
        unkImgs={unkImgs}
        key={img.id}
        img={img.image}
        status={img.status}
        name={img.name}
        id={img.id}
      />
    );
  });

  return (
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
      <div className={style.btn_load}>
        <button onClick={loadImgs}>LOAD MORE</button>
      </div>
    </main>
  );
};
export default ImagesContainer;

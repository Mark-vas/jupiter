import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  selectImages,
  selectError,
} from "../../Store/Characters/CharactersSelector";
import {
  aaaAC,
  cleanSearchImagesAC,
  getImagesTC,
  loadImagesTC,
  aliveImagesAC,
  deadImagesAC,
  unkImagesAC,
  delImagesAC,
  showAllImgsAC,
  searchCharacterAC,
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
    if (images.mainArr.length === 0) {
      requestImages();
    }
  }, []);

  let arr = [];

  const searchCharacters = (elem, type) => {
    // dispatch(getImagesTC());
    // let value = elem.currentTarget.value
    if (elem !== "") {
      const regexp = new RegExp(elem, "i");
      let newSearchCharacters = images.mainArr.filter((nameCharacter) =>
        regexp.test(nameCharacter.name)
      );
      let obj = new Object();
      type == "All"
        ? (obj.characters = newSearchCharacters)
        : (obj.characters = newSearchCharacters.filter((sts) => {
            return sts.status == type;
          }));

      obj.type = type;
      debugger;
      // dispatch(getImagesTC());
      dispatch(searchCharacterAC(obj));
    } else {
      dispatch(cleanSearchImagesAC());
      images.type == "Alive"
        ? dispatch(aliveImagesAC())
        : images.type == "Dead"
        ? dispatch(deadImagesAC())
        : images.type == "unknown"
        ? dispatch(unkImagesAC())
        : dispatch(showAllImgsAC());
    }
  };

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
      e.currentTarget.outerHTML = `<h1 class=${style.footer_end}>END</h1>`;
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

  // const [input, setInput] = useState(true);

  const showImgs = (e) => {
    let inputSearch = document.getElementById("search");
    // inputSearch.value = "";
    searchCharacters(inputSearch.value, e.target.innerHTML);
    // searchCharacters("");
    // dispatch(getImagesTC());
    // requestImages(e.target.innerHTML);
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
      : dispatch(aaaAC());
  };

  // let imgElem;

  // if (images.type == "All") {
  //   imgElem = arr.map((img, index) => {
  //     return (
  //       <CharacterCard
  //         delImgs={delImgs}
  //         aliveImgs={aliveImgs}
  //         deadImgs={deadImgs}
  //         unkImgs={unkImgs}
  //         key={index}
  //         img={img}
  //       />
  //     );
  //   });
  // } else {
  //   imgElem = arrStatus.map((img, index) => {
  //     return (
  //       <CharacterCard
  //         delImgs={delImgs}
  //         aliveImgs={aliveImgs}
  //         deadImgs={deadImgs}
  //         unkImgs={unkImgs}
  //         key={index}
  //         img={img}
  //       />
  //     );
  //   });
  // }

  const imgElem = arr.map((img, index) => {
    return (
      <CharacterCard
        delImgs={delImgs}
        aliveImgs={aliveImgs}
        deadImgs={deadImgs}
        unkImgs={unkImgs}
        key={index}
        img={img}
      />
    );
  });

  let buttonGroup = ["All", "Alive", "Dead", "unknown"];
  const buttonElem = buttonGroup.map((btn) => {
    return (
      <button
        key={btn}
        onClick={(e) => {
          // setInput(!input);
          showImgs(e);
        }}
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
          {/* {images.type == "All" ? ( */}
          <input
            id="search"
            type="search"
            onChange={(e) => {
              let elem = e.currentTarget.value;
              searchCharacters(elem, images.type);
            }}
            placeholder="Search"
            autoFocus
          ></input>
          {/* ) : (
            <></>
          )} */}

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

import { api } from "../../API/api";

export const IMAGES = "IMAGES";
export const ERROR = "ERROR";
export const LOADIMAGES = "LOADIMAGES";
export const ALIVEIMAGES = "ALIVEIMAGES";
export const DEADIMAGES = "DEADIMAGES";
export const UNKNOWNIMAGES = "UNKNOWNIMAGES";
export const DELIMAGES = "DELIMAGES";
export const SHOWALLIMAGES = "SHOWALLIMAGES";

const getImagesAC = (images) => ({ type: IMAGES, images });
const errorAC = (errMessage) => ({ type: ERROR, errMessage });
const loadImagesAC = (loadImages) => ({ type: LOADIMAGES, loadImages });
export const aliveImagesAC = () => ({ type: ALIVEIMAGES });
export const deadImagesAC = () => ({ type: DEADIMAGES });
export const unkImagesAC = () => ({ type: UNKNOWNIMAGES });
export const delImagesAC = (id) => ({ type: DELIMAGES, id });
export const showAllImgsAC = () => ({ type: SHOWALLIMAGES });

export const getImagesTC = () => {
  return (dispatch) => {
    api
      .getImages()
      .then((res) => dispatch(getImagesAC(res.results)))
      .catch((err) => dispatch(errorAC(err.message)));
  };
};

export const loadImagesTC = (num) => {
  return (dispatch) => {
    api
      .loadImages(num)
      .then((res) => dispatch(loadImagesAC(res.results)))
      .catch((err) => dispatch(errorAC(err.message)));
  };
};

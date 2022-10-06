import { api } from "../../API/api";

export const IMAGES = "IMAGES";
export const ERROR = "ERROR";
export const LOADIMAGES = "LOADIMAGES";
export const ALIVEIMAGES = "ALIVEIMAGES";
export const DEADIMAGES = "DEADIMAGES";
export const UNKNOWNIMAGES = "UNKNOWNIMAGES";
export const DELIMAGES = "DELIMAGES";
export const SHOWALLIMAGES = "SHOWALLIMAGES";
export const SEARCHCHARACTER = "SEARCHCHARACTER";
export const AAA = "AAA";
export const CLEAN = "CLEAN";

const getImagesAC = (images) => ({ type: IMAGES, images });
const errorAC = (errMessage) => ({ type: ERROR, errMessage });
const loadImagesAC = (loadImages) => ({ type: LOADIMAGES, loadImages });
export const aliveImagesAC = () => ({ type: ALIVEIMAGES });
export const deadImagesAC = () => ({ type: DEADIMAGES });
export const unkImagesAC = () => ({ type: UNKNOWNIMAGES });
export const delImagesAC = (id) => ({ type: DELIMAGES, id });
export const showAllImgsAC = () => ({ type: SHOWALLIMAGES });
export const searchCharacterAC = (obj) => ({ type: SEARCHCHARACTER, obj });
export const aaaAC = () => ({ type: AAA });
export const cleanSearchImagesAC = () => ({ type: CLEAN });

export const getImagesTC = () => async (dispatch) => {
  try {
    const res = await api.getImages();
    dispatch(getImagesAC(res.results));
  } catch (err) {
    dispatch(errorAC(err.message));
  }
};

export const loadImagesTC = (num) => async (dispatch) => {
  try {
    const res = await api.loadImages(num);
    dispatch(loadImagesAC(res.results));
  } catch (err) {
    dispatch(errorAC(err.message));
  }
};

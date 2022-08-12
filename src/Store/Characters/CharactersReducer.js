import {
  IMAGES,
  ERROR,
  LOADIMAGES,
  ALIVEIMAGES,
  DEADIMAGES,
  UNKNOWNIMAGES,
  DELIMAGES,
  SHOWALLIMAGES,
} from "./action";

const initialState = {
  images: [],
  errMessage: "",
  aliveImages: [],
  deadImages: [],
  unkImages: [],
  type: "All",
};
const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGES:
      if (state.images.length == 0) {
        return { ...state, images: action.images, type: "All" };
      } else {
        return { ...state };
      }
    case LOADIMAGES:
      let loadImages = [...state.images, ...action.loadImages];
      return { ...state, images: loadImages, type: "All" };
    case ALIVEIMAGES:
      let aliveArr = state.images.filter((img) => img.status == "Alive");
      return { ...state, aliveImages: aliveArr, type: "Alive" };
    case DEADIMAGES:
      let deadeArr = state.images.filter((img) => img.status == "Dead");
      return { ...state, deadImages: deadeArr, type: "Dead" };
    case UNKNOWNIMAGES:
      let unkArr = state.images.filter((img) => img.status == "unknown");
      return { ...state, unkImages: unkArr, type: "unknown" };
    case SHOWALLIMAGES:
      return { ...state, type: "All" };
    case DELIMAGES:
      let delArr = state.images.filter((item) => {
        return action.id !== item.id;
      });
      state.aliveImages = delArr;
      state.deadImages = delArr;
      state.unkImages = delArr;
      return { ...state, images: delArr };
    case ERROR:
      return { ...state, errMessage: action.errMessage };
    default:
      return state;
  }
};
export default imagesReducer;

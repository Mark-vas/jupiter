import {
  IMAGES,
  ERROR,
  LOADIMAGES,
  ALIVEIMAGES,
  DEADIMAGES,
  UNKNOWNIMAGES,
  DELIMAGES,
  SHOWALLIMAGES,
  SEARCHCHARACTER,
  CLEAN,
} from "./action";

const initialState = {
  mainArr: [],
  images: [],
  errMessage: "",
  aliveImages: [],
  deadImages: [],
  unkImages: [],
  searchImages: [],
  type: "All",
};
const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGES:
      return {
        ...state,
        mainArr: action.images,
        images: action.images,
      };
    case LOADIMAGES:
      let loadImages = [...state.images, ...action.loadImages];
      return { ...state, mainArr: loadImages, images: loadImages };
    case ALIVEIMAGES:
      let aliveArr = [];
      state.searchImages.length > 0
        ? (aliveArr = state.searchImages.filter((img) => img.status == "Alive"))
        : (aliveArr = state.mainArr.filter((img) => img.status == "Alive"));
      return { ...state, aliveImages: aliveArr, type: "Alive" };
    case DEADIMAGES:
      let deadeArr = [];
      state.searchImages.length > 0
        ? (deadeArr = state.searchImages.filter((img) => img.status == "Dead"))
        : (deadeArr = state.mainArr.filter((img) => img.status == "Dead"));
      return { ...state, deadImages: deadeArr, type: "Dead" };
    case UNKNOWNIMAGES:
      let unkArr = [];
      state.searchImages.length > 0
        ? (unkArr = state.searchImages.filter((img) => img.status == "unknown"))
        : (unkArr = state.mainArr.filter((img) => img.status == "unknown"));
      return { ...state, unkImages: unkArr, type: "unknown" };
    case SHOWALLIMAGES:
      return {
        ...state,
        images:
          state.searchImages.length > 0 ? state.searchImages : state.mainArr,
        type: "All",
      };
    case DELIMAGES:
      let delArr = state.images.filter((item) => {
        return action.id !== item.id;
      });
      let delMainArr = state.mainArr.filter((item) => {
        return action.id !== item.id;
      });
      return {
        ...state,
        mainArr: delMainArr,
        images: delArr,
        aliveImages: delArr,
        deadImages: delArr,
        unkImages: delArr,
        searchImages: delArr,
      };
    case SEARCHCHARACTER:
      if (action.obj.characters.length == 0) {
        state.searchImages = ["noData"];
      } else state.searchImages = action.obj.characters;
      action.obj.type == "All"
        ? (state = { ...state, images: action.obj.characters })
        : action.obj.type == "Alive"
        ? (state = { ...state, aliveImages: action.obj.characters })
        : action.obj.type == "Dead"
        ? (state = { ...state, deadImages: action.obj.characters })
        : (state = { ...state, unkImages: action.obj.characters });
      return state;
    case CLEAN:
      return { ...state, searchImages: [] };
    case ERROR:
      return { ...state, errMessage: action.errMessage };
    default:
      return state;
  }
};
export default imagesReducer;

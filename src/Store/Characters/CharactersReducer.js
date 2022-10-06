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
      debugger;
      // console.log(delArr);
      // aliveArr = state.images.filter((img) => img.status == "Alive");
      // let arr = [];
      // state.delImages.length > 0
      //   ? (arr = {
      //       ...state,
      //       images: state.delImages,
      //       aliveImages: state.delImages.filter((img) => img.status == "Alive"),
      //       deadImages: state.delImages.filter((img) => img.status == "Dead"),
      //       unkImages: state.delImages.filter((img) => img.status == "unknown"),
      //       // type:
      //       //   action.typeCharacters !== undefined ? action.typeCharacters : "All",
      //     })
      //   : (arr = {
      //       ...state,
      //       images: action.images,
      //       aliveImages: state.images.filter((img) => img.status == "Alive"),
      //       deadImages: state.images.filter((img) => img.status == "Dead"),
      //       unkImages: state.images.filter((img) => img.status == "unknown"),
      //     });
      // return arr;
      return {
        ...state,
        mainArr: action.images,
        images: action.images,
        // aliveImages: state.images.filter((img) => img.status == "Alive"),
        // deadImages: state.images.filter((img) => img.status == "Dead"),
        // unkImages: state.images.filter((img) => img.status == "unknown"),
        //   // type:
        //   //   action.typeCharacters !== undefined ? action.typeCharacters : "All",
      };
    case LOADIMAGES:
      let loadImages = [...state.images, ...action.loadImages];
      return { ...state, mainArr: loadImages, images: loadImages };
    case ALIVEIMAGES:
      let aliveArr = [];
      state.searchImages.length > 0
        ? (aliveArr = state.searchImages.filter((img) => img.status == "Alive"))
        : (aliveArr = state.mainArr.filter((img) => img.status == "Alive"));
      // let aliveArr = state.mainArr.filter((img) => img.status == "Alive");
      // return { ...state, aliveImages: aliveArr, type: "Alive" };
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
      // return { ...state, type: "All" };
      return { ...state, images: state.mainArr, type: "All" };
    case DELIMAGES:
      let delArr = state.images.filter((item) => {
        return action.id !== item.id;
      });
      let delMainArr = state.mainArr.filter((item) => {
        return action.id !== item.id;
      });
      // state.delImages = delArr;
      return {
        ...state,
        mainArr: delMainArr,
        images: delArr,
        aliveImages: delArr,
        deadImages: delArr,
        unkImages: delArr,
      };
    case SEARCHCHARACTER:
      state.searchImages = action.obj.characters;
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

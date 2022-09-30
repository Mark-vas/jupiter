import { CHARACTER, ERROR, CHARACTERS_EPISODE_IMG, CLEAN } from "./action";

const initialState = {
  character: [],
  errMessage: "",
  charactersEpisodeImg: [],
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARACTER:
      return { ...state, character: action.character };
    case CHARACTERS_EPISODE_IMG:
      // let arr = state.charactersEpisodeImg.map((item) => {
      //   debugger;
      //   if (item !== action.charactersEpisodeImg.image) {
      //     return action.charactersEpisodeImg.image;
      //   }
      // });
      // debugger;
      // state.charactersEpisodeImg = [];
      // debugger;
      // return {
      //   ...state,
      //   charactersEpisodeImg: [
      //     ...state.charactersEpisodeImg,
      //     action.charactersEpisodeImg.image,
      //   ],
      // };

      // if (
      //   !state.charactersEpisodeImg.includes(action.charactersEpisodeImg.image)
      // ) {
      //   state.charactersEpisodeImg.push(action.charactersEpisodeImg.image);
      // }

      // let arr = [];

      // state.charactersEpisodeImg.includes(action.charactersEpisodeImg.image)
      //   ? (arr = state.charactersEpisodeImg)
      //   : state.charactersEpisodeImg.push(action.charactersEpisodeImg.image);

      // return {
      //   ...state,
      //   charactersEpisodeImg: arr,
      // };
      debugger;
      //Теперь в action.charactersEpisodeImg уже прилетает массив
      return {
        ...state,
        charactersEpisodeImg: action.charactersEpisodeImg,
      };

    // return {
    //   ...state,
    //   charactersEpisodeImg: state.charactersEpisodeImg.includes(
    //     action.charactersEpisodeImg.image
    //   )
    //     ? state.charactersEpisodeImg
    //     : [...state.charactersEpisodeImg, action.charactersEpisodeImg.image],
    // };

    case CLEAN:
      // debugger;
      return { ...state, charactersEpisodeImg: [] };
    case ERROR:
      return { ...state, errMessage: action.errMessage };
    default:
      return state;
  }
};
export default characterReducer;

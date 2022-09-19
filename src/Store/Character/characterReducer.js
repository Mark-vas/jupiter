import { CHARACTER, ERROR, CHARACTERS_EPISODE_IMG } from "./action";

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
      return {
        ...state,
        charactersEpisodeImg: [
          ...state.charactersEpisodeImg,
          action.charactersEpisodeImg.image,
        ],
      };
    case ERROR:
      return { ...state, errMessage: action.errMessage };
    default:
      return state;
  }
};
export default characterReducer;

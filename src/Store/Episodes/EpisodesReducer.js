import { EPISODES, ERROR, EPISODE, LOADEPISODES } from "./action";

const initialState = {
  episodes: [],
  episode: [],
  errMessage: "",
  info: "",
};

const episodesReducer = (state = initialState, action) => {
  switch (action.type) {
    case EPISODES:
      return {
        ...state,
        episodes: action.episodes.results,
        info: action.episodes.info,
      };
    case EPISODE:
      return { ...state, episode: action.episode };
    case ERROR:
      return { ...state, errMessage: action.errMessage };
    default:
      return state;
  }
};
export default episodesReducer;

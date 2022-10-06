import { EPISODES, ERROR, EPISODE, EPISODE_SEASON } from "./action";

const initialState = {
  episodes: [],
  episode: [],
  errMessage: "",
  season: "",
  episodesOneSeason: [],
  episodesTwoSeason: [],
  episodesThreeSeason: [],
  episodesFourSeason: [],
  episodesFiveSeason: [],
};

const episodesReducer = (state = initialState, action) => {
  switch (action.type) {
    case EPISODES:
      let arrOneSeason = action.episodes.filter((elem) => {
        return "S01" == elem.episode.substring(0, 3);
      });
      return {
        ...state,
        episodes: action.episodes,
        episodesOneSeason: arrOneSeason,
        season: "ONE",
      };
    case EPISODE:
      return { ...state, episode: action.episode };
    case EPISODE_SEASON:
      if (action.season == "TWO") {
        state.episodesTwoSeason = state.episodes.filter(
          (elem) => "S02" == elem.episode.substring(0, 3)
        );
      } else if (action.season == "THREE") {
        state.episodesThreeSeason = state.episodes.filter((elem) => {
          return "S03" == elem.episode.substring(0, 3);
        });
      } else if (action.season == "FOUR") {
        state.episodesFourSeason = state.episodes.filter(
          (elem) => "S04" == elem.episode.substring(0, 3)
        );
      } else if (action.season == "FIVE") {
        state.episodesFiveSeason = state.episodes.filter(
          (elem) => "S05" == elem.episode.substring(0, 3)
        );
      }
      return { ...state, season: action.season };
    case ERROR:
      return { ...state, errMessage: action.errMessage };
    default:
      return state;
  }
};
export default episodesReducer;

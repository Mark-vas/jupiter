export const episodesSelector = (state) => {
  return state.episodesReducer;
};
export const infoSelector = (state) => state.episodesReducer.season;
export const errorSelector = (state) => state.episodesReducer.errMessage;
export const episodeSelector = (state) => state.episodesReducer.episode;

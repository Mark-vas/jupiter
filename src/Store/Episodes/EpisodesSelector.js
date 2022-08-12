export const episodesSelector = (state) => {
  return state.episodesReducer.episodes;
};
export const infoSelector = (state) => state.episodesReducer.info;
export const errorSelector = (state) => state.episodesReducer.errMessage;
export const episodeSelector = (state) => state.episodesReducer.episode;

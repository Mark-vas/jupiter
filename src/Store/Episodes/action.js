import { api } from "../../API/api";

export const EPISODES = "EPISODES";
export const ERROR = "ERROR";
export const EPISODE = "EPISODE";
export const EPISODE_SEASON = "EPISODE_SEASON";

const getEpisodesAC = (episodes, season) => ({
  type: EPISODES,
  episodes,
  season,
});
const errorAC = (errMessage) => ({ type: ERROR, errMessage });
const getEpisodeAC = (episode) => ({ type: EPISODE, episode });
export const episodeSeasonAC = (season) => ({ type: EPISODE_SEASON, season });

export const getEpisodesTC = (season) => async (dispatch) => {
  try {
    let arr = [];
    for (let i = 1; i <= 3; i++) {
      const res = await api.loadEpisodes(i);
      arr = [...arr, ...res.results];
    }
    dispatch(getEpisodesAC(arr, season));
  } catch (err) {
    dispatch(errorAC(err.message));
  }
};

export const getEpisodeTC = (id) => async (dispatch) => {
  try {
    const res = await api.getEpisode(id);
    dispatch(getEpisodeAC(res));
  } catch (err) {
    dispatch(errorAC(err.message));
  }
};

export const loadEpisodesTC = (num) => async (dispatch) => {
  try {
    const res = await api.loadEpisodes(num);
    dispatch(getEpisodesAC(res));
  } catch (err) {
    dispatch(errorAC(err.message));
  }
};

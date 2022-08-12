import { api } from "../../API/api";

export const EPISODES = "EPISODES";
export const ERROR = "ERROR";
export const EPISODE = "EPISODE";

const getEpisodesAC = (episodes) => ({ type: EPISODES, episodes });
const errorAC = (errMessage) => ({ type: ERROR, errMessage });
const getEpisodeAC = (episode) => ({ type: EPISODE, episode });

export const getEpisodesTC = () => async (dispatch) => {
  try {
    const res = await api.getEpisodes();
    dispatch(getEpisodesAC(res));
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

import { api } from "../../API/api";

export const CHARACTER = "CHARACTER";
export const ERROR = "ERROR";
export const CHARACTERS_EPISODE_IMG = "CHARACTERS_EPISODE_IMG";

const getCharacterAC = (character) => ({ type: CHARACTER, character });
const getEpisodeCharacterAC = (charactersEpisodeImg) => ({
  type: CHARACTERS_EPISODE_IMG,
  charactersEpisodeImg,
});
const errorAC = (errMessage) => ({ type: ERROR, errMessage });

export const getCharacterTC = (id) => async (dispatch) => {
  try {
    const res = await api.getCharacter(id);
    dispatch(getCharacterAC(res));
  } catch (err) {
    dispatch(errorAC(err.message));
  }
};

export const getEpisodeChatacterTC = (url) => async (dispatch) => {
  try {
    const res = await api.getEpisodeChatacter(url);
    dispatch(getEpisodeCharacterAC(res));
  } catch (err) {
    dispatch(errorAC(err.message));
  }
};

export const selectCharacter = (state) => {
  return state.characterReducer.character;
};

export const selectError = (state) => state.characterReducer.errMessage;

export const selectCharactersEpisode = (state) =>
  state.characterReducer.charactersEpisodeImg;

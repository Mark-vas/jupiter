export const selectImages = (state) => {
  return state.imagesReducer;
};
export const selectError = (state) => state.imagesReducer.errMessage;

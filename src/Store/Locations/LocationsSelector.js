export const locationsSelector = (state) => state.locationsReducer.locations;
export const errorSelector = (state) => state.locationsReducer.errMessage;
export const locationSelector = (state) => state.locationsReducer.location;
export const infoSelector = (state) => state.locationsReducer.info;
export const locationCharacterSelector = (state) =>
  state.locationsReducer.locationCharacter;
export const numberPageSelector = (state) => state.locationsReducer.numberPage;

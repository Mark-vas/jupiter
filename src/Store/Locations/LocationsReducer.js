import { LOCATIONS, ERROR, LOCATION, LOCATION_CHARACTER } from "./action";

const initialState = {
  locations: [],
  info: "",
  errMessage: "",
  location: [],
  locationCharacter: [],
  numberPage: 1,
};

const locationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOCATIONS:
      debugger;
      return {
        ...state,
        locations: action.locations.results,
        info: action.locations.info,
        numberPage: action.num ? action.num : 1,
      };
    case ERROR:
      return { ...state, errMessage: action.errMessage };
    case LOCATION:
      return { ...state, location: action.location };
    case LOCATION_CHARACTER:
      return { ...state, locationCharacter: action.locationCharacter };
    default:
      return state;
  }
};
export default locationsReducer;

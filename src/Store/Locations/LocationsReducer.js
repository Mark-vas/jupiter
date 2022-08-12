import { LOCATIONS, ERROR, LOCATION } from "./action";

const initialState = {
  locations: [],
  info: "",
  errMessage: "",
  location: [],
};

const locationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOCATIONS:
      return {
        ...state,
        locations: action.locations.results,
        info: action.locations.info,
      };
    case ERROR:
      return { ...state, errMessage: action.errMessage };
    case LOCATION:
      return { ...state, location: action.location };
    default:
      return state;
  }
};
export default locationsReducer;

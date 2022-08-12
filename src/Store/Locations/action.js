import { api } from "../../API/api";

export const LOCATIONS = "LOCATIONS";
export const ERROR = "ERROR";
export const LOCATION = "LOCATION";

const locationsAC = (locations) => ({ type: LOCATIONS, locations });
const errorAC = (errMessage) => ({ type: ERROR, errMessage });
const locationAC = (location) => ({ type: LOCATION, location });

export const locationsTC = () => async (dispatch) => {
  try {
    const res = await api.getLocations();
    dispatch(locationsAC(res));
  } catch (err) {
    dispatch(errorAC(err.message));
  }
};

export const loadLocationsTC = (num) => async (dispatch) => {
  try {
    const res = await api.loadLocations(num);
    dispatch(locationsAC(res));
  } catch (err) {
    dispatch(errorAC(err.message));
  }
};

export const locationTC = (id) => async (dispatch) => {
  try {
    const res = await api.getLocation(id);
    dispatch(locationAC(res));
  } catch (err) {
    dispatch(errorAC(err.message));
  }
};

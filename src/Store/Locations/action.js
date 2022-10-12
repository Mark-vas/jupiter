import { api } from "../../API/api";

export const LOCATIONS = "LOCATIONS";
export const ERROR = "ERROR";
export const LOCATION = "LOCATION";
export const LOCATION_CHARACTER = "LOCATION_CHARACTER";

const locationsAC = (locations, num) => ({ type: LOCATIONS, locations, num });
const errorAC = (errMessage) => ({ type: ERROR, errMessage });
const locationAC = (location) => ({ type: LOCATION, location });
const locationCharacterAC = (locationCharacter) => ({
  type: LOCATION_CHARACTER,
  locationCharacter,
});

export const locationsTC = (num) => async (dispatch) => {
  try {
    const res = await api.getLocations(num);
    dispatch(locationsAC(res, num));
  } catch (err) {
    dispatch(errorAC(err.message));
  }
};

export const loadLocationsTC = (num) => async (dispatch) => {
  try {
    const res = await api.loadLocations(num);
    dispatch(locationsAC(res, num));
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

export const locationCharacterTC = (url) => async (dispatch) => {
  try {
    let arr = [];
    for (let i = 0; i < url.length; i++) {
      const res = await api.getEpisodeChatacter(url[i]);
      let obj = new Object();
      obj.image = res.image;
      obj.id = res.id;
      if (!arr.includes(res.image)) {
        arr.push(obj);
      }
    }
    dispatch(locationCharacterAC(arr));
  } catch (err) {
    dispatch(errorAC(err.message));
  }
};

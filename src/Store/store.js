import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import imagesReducer from "./Characters/CharactersReducer";
import characterReducer from "./Character/characterReducer";
import episodesReducer from "./Episodes/EpisodesReducer";
import locationsReducer from "./Locations/LocationsReducer";

const store = createStore(
  combineReducers({
    imagesReducer,
    characterReducer,
    episodesReducer,
    locationsReducer,
  }),
  applyMiddleware(thunk)
);

export default store;

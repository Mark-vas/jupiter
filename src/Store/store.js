import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import imagesReducer from "./Portfolio/imagesReducer";
import characterReducer from "./Character/characterReducer";

const store = createStore(
  combineReducers({ imagesReducer, characterReducer }),
  applyMiddleware(thunk)
);

export default store;

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import imagesReducer from "./Portfolio/imagesReducer";

const store = createStore(imagesReducer, applyMiddleware(thunk));

export default store;

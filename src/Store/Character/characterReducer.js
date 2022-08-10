import { CHARACTER, ERROR } from "./action";

const initialState = {
  character: [],
  errMessage: "",
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARACTER:
      return { ...state, character: action.character };
    case ERROR:
      return { ...state, errMessage: action.errMessage };
    default:
      return state;
  }
};
export default characterReducer;

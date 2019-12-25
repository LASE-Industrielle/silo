import {CHANGE_LANGUAGE} from "../Actions";

const languageReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
};
export default languageReducer;

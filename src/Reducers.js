import {
  AUTH_ERROR,
  AUTH_START,
  AUTH_SUCCESS,
  STATUS_LOAD_ERROR,
  STATUS_LOAD_START,
  STATUS_LOAD_SUCCESS,
} from './Actions';


const statusReducer = (state, action) => {
  switch (action.type) {
    case STATUS_LOAD_START:
      return { ...state, loading: true };
    case STATUS_LOAD_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case STATUS_LOAD_ERROR:
      return {
        ...state,
        errorMessage: 'failed',
        loading: false,
      };
    default:
      return state;
  }
};

const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_START:
      return { ...state, loading: true };
    case AUTH_SUCCESS:
      return { ...state, token: action.payload, loading: false };
    case AUTH_ERROR:
      return {
        ...state,
        errorMessage: 'failed',
        loading: false,
      };
    default:
      return state;
  }
};

export { statusReducer, authReducer };

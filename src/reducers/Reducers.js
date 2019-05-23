import {
  AUTH_ERROR,
  AUTH_START,
  AUTH_SUCCESS,
  MEASUREMENTS_ERROR,
  MEASUREMENTS_START,
  MEASUREMENTS_SUCCESS,
  SILOS_LOAD_ERROR,
  SILOS_LOAD_START,
  SILOS_LOAD_SUCCESS,
} from '../Actions';


const silosReducer = (state, action) => {
  switch (action.type) {
    case SILOS_LOAD_START:
      return {
        ...state,
        loading: true
      };
    case SILOS_LOAD_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case SILOS_LOAD_ERROR:
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
      return {
        ...state,
        loading: true
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.payload,
        loading: false
      };
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

const measurementsReducer = (state, action) => {
  switch (action.type) {
    case MEASUREMENTS_START:
      return {
        ...state,
        loading: true
      };
    case MEASUREMENTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case MEASUREMENTS_ERROR:
      return {
        ...state,
        errorMessage: 'failed',
        loading: false,
      };
    default:
      return state;
  }
};

export { silosReducer, authReducer, measurementsReducer };

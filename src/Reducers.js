import {
  STATUS_LOAD_START,
  STATUS_LOAD_SUCCESS,
  STATUS_LOAD_ERROR,
} from './Actions';

const statusReducer = (state, action) => {
  switch (action.type) {
    case STATUS_LOAD_START:
      return { ...state, loading: true };
    case STATUS_LOAD_SUCCESS:
      return { ...state, percentage: action.payload, loading: false };
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

export default statusReducer;

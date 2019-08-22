import { MEASUREMENTS_ERROR, MEASUREMENTS_START, MEASUREMENTS_SUCCESS } from '../Actions';

const measurementsReducer = (state, action) => {
  switch (action.type) {
    case MEASUREMENTS_START:
      return {
        ...state,
        loading: true,
      };
    case MEASUREMENTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
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
export default measurementsReducer;

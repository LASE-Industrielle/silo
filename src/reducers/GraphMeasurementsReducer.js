import {GRAPH_MEASUREMENTS_ERROR, GRAPH_MEASUREMENTS_START, GRAPH_MEASUREMENTS_SUCCESS} from '../Actions';

const graphMeasurementsReducer = (state, action) => {
  switch(action.type) {
    case GRAPH_MEASUREMENTS_START:
      return {
        ...state,
        loading: true,
      };
    case GRAPH_MEASUREMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GRAPH_MEASUREMENTS_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: 'failed',
      };
    default:
      return state;
  };
};

export default graphMeasurementsReducer;
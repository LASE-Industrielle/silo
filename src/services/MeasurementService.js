import axios from 'axios';
import {
  GRAPH_MEASUREMENTS_ERROR,
  GRAPH_MEASUREMENTS_START,
  GRAPH_MEASUREMENTS_SUCCESS,
  MEASUREMENTS_ERROR,
  MEASUREMENTS_START,
  MEASUREMENTS_SUCCESS,
} from '../Actions';
import {measurementsPeriodUrl, measurementsUrl} from '../Urls';

const getAllMeasurements = (dispatch, id) => {
  dispatch({ type: MEASUREMENTS_START });
  axios.get(measurementsUrl + id + '/')
    .then(response => dispatch({
      type: MEASUREMENTS_SUCCESS,
      payload: response.data,
    }))
    .catch((err) => {
      dispatch({
        type: MEASUREMENTS_ERROR,
        error: err,
      });
    });
};

const filterMeasurements = (dispatch, id, startDate, endDate) => {
  dispatch({ type: GRAPH_MEASUREMENTS_START });
  axios.get(measurementsPeriodUrl + id + '/' + startDate +'/' + endDate)
    .then(response => dispatch({
      type: GRAPH_MEASUREMENTS_SUCCESS,
      payload: response.data,
    }))
    .catch((err) => {
      dispatch({
        type: GRAPH_MEASUREMENTS_ERROR,
        error: err
      });
    });
};

const getPeriodMeasurements = (dispatch, id, period) => {
  dispatch({ type: GRAPH_MEASUREMENTS_START });
    axios.get(measurementsPeriodUrl + id + '/' + period + '/')
      .then(response => dispatch({
        type: GRAPH_MEASUREMENTS_SUCCESS,
        payload: response.data,
      }))
      .catch((err) => {
        dispatch({
          type: GRAPH_MEASUREMENTS_ERROR,
          error: err
        });
      });
};

export {getAllMeasurements, filterMeasurements, getPeriodMeasurements};

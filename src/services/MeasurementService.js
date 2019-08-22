import axios from 'axios';
import { MEASUREMENTS_ERROR, MEASUREMENTS_START, MEASUREMENTS_SUCCESS } from '../Actions';
import { measurementsUrl } from '../Urls';

const getAllMeasurements = (dispatch, id) => {
  dispatch({ type: MEASUREMENTS_START });
  axios
    .get(measurementsUrl + id)
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
  dispatch({ type: MEASUREMENTS_START });
  axios
    .get(`${measurementsUrl + id}/${startDate}/${endDate}`)
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

export { getAllMeasurements, filterMeasurements };

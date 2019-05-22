import axios from 'axios';
import { MEASUREMENTS_ERROR, MEASUREMENTS_START, MEASUREMENTS_SUCCESS, } from '../Actions';
import { measurementsApiUrl } from '../Urls';

const getAllMeasurements = (dispatch, id) => {
    dispatch({ type: MEASUREMENTS_START });
    axios.get(measurementsApiUrl + id)
        .then(response => dispatch({
            type: MEASUREMENTS_SUCCESS,
            payload: response.data,
        }))
        .catch((err) => {
            dispatch({
                type: MEASUREMENTS_ERROR,
                error: err
            });
        });
};

export default getAllMeasurements;

import axios from 'axios';
import {
  STATUS_LOAD_START,
  STATUS_LOAD_SUCCESS,
  STATUS_LOAD_ERROR,
} from '../Actions';
import { statusApiUrl } from '../Urls';

const downloadData = (dispatch, token) => {
  dispatch({ type: STATUS_LOAD_START });
  axios.get(statusApiUrl, {
    headers: {
      Authorization: `Token ${token}`,
    }
  })
    .then(response => dispatch({
      type: STATUS_LOAD_SUCCESS,
      payload: response.data.percentage,
    }))
    .catch((err) => {
      dispatch({ type: STATUS_LOAD_ERROR, error: err });
    });
};

export default downloadData;

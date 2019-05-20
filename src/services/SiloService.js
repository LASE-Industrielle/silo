import axios from 'axios';
import { STATUS_LOAD_ERROR, STATUS_LOAD_START, STATUS_LOAD_SUCCESS, } from '../Actions';
import { siloApiUrl } from '../Urls';

const downloadData = (dispatch) => {
  dispatch({ type: STATUS_LOAD_START });
  axios.get(siloApiUrl)
    .then(response => dispatch({
      type: STATUS_LOAD_SUCCESS,
      payload: response.data,
    }))
    .catch((err) => {
      dispatch({
        type: STATUS_LOAD_ERROR,
        error: err
      });
    });
};

export default downloadData;

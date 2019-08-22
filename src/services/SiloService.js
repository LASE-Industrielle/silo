import axios from 'axios';
import { SILOS_LOAD_ERROR, SILOS_LOAD_START, SILOS_LOAD_SUCCESS } from '../Actions';
import { siloUrl } from '../Urls';

const getSilos = (dispatch) => {
  dispatch({ type: SILOS_LOAD_START });
  axios.get(siloUrl)
    .then(response => dispatch({
      type: SILOS_LOAD_SUCCESS,
      payload: response.data,
    }))
    .catch((err) => {
      dispatch({
        type: SILOS_LOAD_ERROR,
        error: err,
      });
    });
};

export default getSilos;

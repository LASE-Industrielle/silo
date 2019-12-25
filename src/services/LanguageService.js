import {
  CHANGE_LANGUAGE
} from '../Actions';
import i18n from '../../i18n'

const changeLanguage = (dispatch, language) => {
  i18n.changeLanguage(language);
  dispatch({ type: CHANGE_LANGUAGE, payload: language });

};

export default changeLanguage;

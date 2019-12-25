import authReducer from './AuthReducer';
import measurementsReducer from './MeasurementsReducer';
import profileReducer from './ProfileReducer';
import silosReducer from './SilosReducer';
import notificationReducer from './NotificationReducer';
import graphMeasurementsReducer from './GraphMeasurementsReducer';
import {lang} from "moment";
import languageReducer from "./LanguageReducer";

const mainReducer = ({ auth, measurements, profile, silos, notifications, graphMeasurements, language }, action) => ({
    auth: authReducer(auth, action),
    measurements: measurementsReducer(measurements, action),
    profile: profileReducer(profile, action),
    silos: silosReducer(silos, action),
    notifications: notificationReducer(notifications, action),
    graphMeasurements: graphMeasurementsReducer(graphMeasurements, action),
    language: languageReducer(language,action),
});

export default mainReducer;

import {authReducer} from './AuthReducer';
import {measurementsReducer} from './MeasurementsReducer';
import {profileReducer} from './ProfileReducer';
import {silosReducer} from './SilosReducer';

export const mainReducer = ({ auth, measurements, profile, silos }, action) => ({
    auth: authReducer(auth, action),
    measurements: measurementsReducer(measurements, action),
    profile: profileReducer(profile, action),
    silos: silosReducer(silos, action),
});
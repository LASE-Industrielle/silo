import {authReducer} from './AuthReducer';
import {measurementsReducer} from './MeasurementsReducer';
import {profileReducer} from './ProfileReducer';
import {silosReducer} from './SilosReducer';
import {notificationReducer} from './NotificationReducer';

export const mainReducer = ({ auth, measurements, profile, silos, notifications }, action) => ({
    auth: authReducer(auth, action),
    measurements: measurementsReducer(measurements, action),
    profile: profileReducer(profile, action),
    silos: silosReducer(silos, action),
    notifications: notificationReducer(notifications, action)
});

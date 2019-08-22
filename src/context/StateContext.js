import React, { useContext, useReducer, createContext } from 'react';

export const StateContext = createContext('');

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStore = () => useContext(StateContext);

export const initialState = {
    auth: {
        token: '',
        errorMessage: '',
        loading: false,
    },
    profile: {
        username: '',
    },
    measurements: {
        data: {},
        errorMessage: '',
        loading: false,
    },
    silos: {
        data: [],
        errorMessage: '',
        loading: false,
    },
    notifications: {
        data: [],
        errorMessage: '',
        loading: false,
    },
    graphMeasurements: {
        data: {},
        errorMessage: '',
        loading: true,
    },
};

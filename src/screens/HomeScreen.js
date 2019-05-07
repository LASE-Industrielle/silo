import React, { useEffect, useReducer } from 'react';
import { View, Text } from 'react-native';

import statusReducer from '../Reducers';
import downloadData from '../services/StatusService';

import styles from '../Styles';

const initialState = {
  percentage: 0,
  errorMessage: '',
  loading: false,
};


const HomeScreen = () => {
  const [state, dispatch] = useReducer(statusReducer, initialState);

  useEffect(() => {
    downloadData(dispatch);
  }, []);

  return (
    <View style={styles.default}>
      <Text>{`${state.percentage}%`}</Text>
    </View>
  );
};

export default HomeScreen;

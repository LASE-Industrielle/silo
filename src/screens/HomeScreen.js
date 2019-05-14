import React, { useEffect, useReducer, useContext } from 'react';
import { View, Text } from 'react-native';

import { statusReducer } from '../Reducers';
import downloadData from '../services/StatusService';
import UserContext from '../context/UserContext';
import styles from '../Styles';

const initialState = {
  percentage: 0,
  errorMessage: '',
  loading: false,
};

const HomeScreen = () => {
  const [state, dispatch] = useReducer(statusReducer, initialState);
  const { token } = useContext(UserContext);

  useEffect(() => {
    downloadData(dispatch, token);
  }, []);

  return (
    <View style={styles.default}>
      <Text>{`${state.percentage}%`}</Text>
    </View>
  );
};

export default HomeScreen;

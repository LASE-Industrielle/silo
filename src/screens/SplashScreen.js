import React, { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

import LinearGradient from 'react-native-linear-gradient';

import SiloLogoSvg from '../components/SiloLogoSvg';

const resetAction = path => StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: path })],
});

const style = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontWeight: '100',
    color: 'white',
    fontFamily: 'arial',
    letterSpacing: 10,
  },
});

const SplashScreen = ({ navigation }) => {
  const checkToken = async () => {
    // setTimeout(async () => {
    const token = await AsyncStorage.getItem('token').catch(() => {
      navigation.dispatch(resetAction('Login'));
    });
    if (token !== null) {
      axios.defaults.headers.common.Authorization = `Token ${token}`;
      navigation.dispatch(resetAction('App'));
    } else {
      navigation.dispatch(resetAction('Login'));
    }
    // }, 750);
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <LinearGradient style={style.gradientContainer} colors={['#6CC799', '#3A7F78']}>
      <SiloLogoSvg />
      <Text style={style.logoText}>SILO</Text>
    </LinearGradient>
  );
};

export default SplashScreen;

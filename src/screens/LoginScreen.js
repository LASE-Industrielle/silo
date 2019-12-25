import React, { useEffect, useState } from 'react';
import {
  Alert,
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Container, Content, Spinner } from 'native-base';
import { NavigationActions, StackActions } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from 'react-navigation-hooks';
import { useStore } from '../context/StateContext';
import authCall from '../services/AuthService';

import SiloLogoSvg from '../components/SiloLogoSvg';
import {useTranslation} from "react-i18next";

const appAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'App' })],
});

const inactiveText = '#C5C5C5';
const white = '#FFFFFF';
const blackTextColor = '#797979';
const greyText = '#AAA9A9';
const greenIconColor = '#02A04E';
const transparentColor = 'transparent';

const style = StyleSheet.create({
  loginText: {
    color: greyText,
    fontSize: 24,
    marginBottom: 10,
  },
  credentialsText: {
    color: greyText,
    marginTop: 20,
  },
  credentialsTextInput: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: inactiveText,
    marginTop: 10,
    color: blackTextColor,
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === 'ios' ? 15 : 10,
  },
  forgotPasswordText: {
    marginTop: 15,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    color: greenIconColor,
  },
  loginButton: {
    color: white,
    fontSize: 14,
  },
  loginTouchableOpacity: {
    marginTop: 40,
    backgroundColor: greenIconColor,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  dontHaveAccountText: {
    fontStyle: 'italic',
    marginTop: 30,
    alignSelf: 'center',
    color: greyText,
  },
  signUpText: {
    fontStyle: 'normal',
    color: greenIconColor,
  },
  keyboardAwoidingView: {
    height: 440,
    backgroundColor: transparentColor,
    marginTop: 50,
    marginBottom: 20,
    borderRadius: 15,
    marginHorizontal: 10,
    alignSelf: 'stretch',
  },
  loginView: {
    backgroundColor: white,
    padding: 20,
    borderRadius: 15,
  },
});

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [{ auth }, dispatch] = useStore();
  const {t} = useTranslation()

  useEffect(() => {
    if (__DEV__ === true) {
      setUsername('demo');
      setPassword('codecentriccclabs2');
    }
  }, []);

  useEffect(() => {
    if (auth.token !== '' && auth.token !== undefined) {
      AsyncStorage.setItem('token', auth.token)
        .then(() => {
          navigation.dispatch(appAction);
        })
        .catch(() => {
          console.log('failed to set token');
        });
    }
  }, [auth.token]);

  useEffect(() => {
    if (auth.errorMessage !== '') {
      Alert.alert(
        'Failed',
        'Failed to login with provided credentials',
        [
          {
            text: 'OK',
            onPress: () => {
              auth.errorMessage = '';
            },
          },
        ],
        { cancelable: false },
      );
    }
  }, [auth.errorMessage]);

  const login = () => {
    authCall(dispatch, username, password);
  };

  if (auth.loading) {
    return (
      <Container>
        <Content contentContainerStyle={style.default}>
          <Spinner />
        </Content>
      </Container>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      <LinearGradient
        style={{
          backgroundColor: greenIconColor,
          flex: 1,
          width: Dimensions.get('window').width,
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 30,
          borderBottomRightRadius: 30,
        }}
        colors={['#6CC799', '#3A7F78']}
      >
        <SiloLogoSvg style={{ backgroundColor: 'red' }} />
        <Text
          style={{
            fontWeight: '100',
            color: 'white',
            alignSelf: 'center',
            fontFamily: 'arial',
            letterSpacing: 10,
          }}
        >
          SILO
        </Text>
      </LinearGradient>
      <KeyboardAvoidingView
        style={style.keyboardAwoidingView}
        behavior={Platform.OS === 'ios' ? 'position' : null}
      >
        <View style={style.loginView}>
          <Text style={style.loginText}>{t('Sign In')}</Text>
          <TextInput
            style={style.credentialsTextInput}
            placeholder="xyz@gmail.com"
            placeholderTextColor={greyText}
            autoCapitalize="none"
            value={username}
            onChangeText={text => setUsername(text)}
          />
          <TextInput
            secureTextEntry
            placeholder={
              '\u002A \u002A \u002A \u002A \u002A \u002A \u002A \u002A \u002A \u002A \u002A'
            }
            style={style.credentialsTextInput}
            placeholderTextColor={greyText}
            autoCapitalize="none"
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Text style={style.forgotPasswordText}>{t('Forgot Password')}</Text>
          <TouchableOpacity style={style.loginTouchableOpacity} onPress={login}>
            <Text style={style.loginButton}>{t('LOG IN')}</Text>
          </TouchableOpacity>
          <Text style={style.dontHaveAccountText}>
            {t("Don't have an account?")}
            {' '}
            <Text style={style.signUpText}>{t('Sign up')}</Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

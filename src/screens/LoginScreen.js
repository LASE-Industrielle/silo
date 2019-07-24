import React, { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  Button, Container, Content, Input, Item, Spinner,
} from 'native-base';
import { NavigationActions, StackActions } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import { useStateValue } from '../context/StateContext';
import authCall from '../services/AuthService';

import laseLogo from '../../assets/img/lase.jpeg';
import SiloLogoSvg from '../components/SiloLogoSvg';

const appAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'App' })],
});

const primary = '#01A04E';
const secondary = '#01A000';
const primaryText = '#606060';
const inactiveText = '#C5C5C5';

const white = '#FFFFFF';
const blackTextColor = '#797979';
const greyText = '#AAA9A9';

const iconColor = '#FFF';
const greenIconColor = '#02A04E';

const orange = '#F1B950';
const blue = '#3498DB';
const red = '#F18382';
const black = '#262626';

const bgColor = '#F2F2F2';
const bgGradientStart = '#84CFA8';
const bgGradientEnd = '#539A88';
const bgGradientStartLogin = '#83CEA7';

const statusColorGreen = '#6CC799';
const statusColorRed = '#F19B93';

const bottomBorder = '#3A7F78';
const whiteBorder = '#E8E6EA';

const transparentColor = 'transparent';

const styles = StyleSheet.create({
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

const LoginScreen = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [{ auth }, dispatch] = useStateValue();

  useEffect(() => {
    if (__DEV__ === true) {
      setUsername('demo');
      setPassword('codecentriccclabs2');
    }
  }, []);

  useEffect(() => {
    if (auth.token !== '') {
      props.navigation.dispatch(appAction);
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
            onPress: () => (auth.errorMessage = ''),
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
        <Content contentContainerStyle={styles.default}>
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
        backgroundColor: 'white'
      }}
    >
      <LinearGradient
        style={{
          backgroundColor: greenIconColor,
          flex: 1,
          width: Dimensions.get('window').width,
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 30
        }}
        colors={['#6CC799', '#3A7F78']}
      >
        <SiloLogoSvg style={{ backgroundColor: 'red'}} />
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
        style={styles.keyboardAwoidingView}
        behavior={Platform.OS === 'ios' ? 'position' : null}
      >
        <View style={styles.loginView}>
          <Text style={styles.loginText}>Sign In</Text>
          <TextInput
            style={styles.credentialsTextInput}
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
            style={styles.credentialsTextInput}
            placeholderTextColor={greyText}
            autoCapitalize="none"
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          <TouchableOpacity style={styles.loginTouchableOpacity} onPress={login}>
            <Text style={styles.loginButton}>SIGN IN</Text>
          </TouchableOpacity>
          <Text style={styles.dontHaveAccountText}>
            Don&apos;t have an account?
            {' '}
            <Text style={styles.signUpText}>Sign up</Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

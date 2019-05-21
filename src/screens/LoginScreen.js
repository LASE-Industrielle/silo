import React, { useContext, useEffect, useReducer, useState, } from 'react';
import { Alert, Image } from 'react-native';
import PropTypes from 'prop-types';
import { Button, Container, Content, Input, Item, Spinner, Text } from 'native-base';

import { authReducer } from '../reducers/Reducers';
import UserContext from '../context/UserContext';
import authCall from '../services/AuthService';

import styles from '../Styles';
import laseLogo from '../../assets/img/lase.jpeg';
import { NavigationActions, StackActions } from 'react-navigation';

const appAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'App' })],
});

const initialState = {
  token: '',
  errorMessage: '',
  loading: false,
};

const LoginScreen = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser } = useContext(UserContext);
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    if (state.token !== '') {
      loginUser(username, state.token);
      props.navigation.dispatch(appAction);
    }
  }, [state.token]);

  useEffect(() => {
    if (state.errorMessage !== '') {
      Alert.alert(
        'Failed',
        'Failed to login with provided credentials',
        [
          {
            text: 'OK',
            onPress: () => state.errorMessage = ''
          },
        ],
        { cancelable: false },
      );
    }
  }, [state.errorMessage]);

  const login = () => {
    authCall(dispatch, username, password);
  };

  if (state.loading) {
    return (
      <Container>
        <Content contentContainerStyle={styles.default}>
          <Spinner/>
        </Content>
      </Container>);
  }

  return (
    <Container>
      <Content contentContainerStyle={styles.default}>
        <Item>
          <Image style={styles.image} source={laseLogo}/>
        </Item>
        <Item rounded style={styles.inputItem}>
          <Input autoCapitalize="none" onChangeText={(text) => {
            setUsername(text);
          }} placeholder="Username" style={styles.placeholder}/>
        </Item>
        <Item rounded style={styles.inputItem}>
          <Input secureTextEntry onChangeText={(text) => {
            setPassword(text);
          }} placeholder="Password" style={styles.placeholder}/>
        </Item>
        <Button
          block
          primary
          onPress={login}
          style={styles.buttonStyle}
        >
          <Text style={{
            color: 'white',
            fontSize: 14
          }}>Log in</Text>
        </Button>
      </Content>
    </Container>
  );
};

LoginScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default LoginScreen;

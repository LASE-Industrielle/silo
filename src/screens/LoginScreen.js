import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
} from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import {
  Container,
  Content,
  Item,
  Input,
  Button,
  Text,
} from 'native-base';

import { authReducer } from '../Reducers';
import UserContext from '../context/UserContext';
import authCall from '../services/AuthService';

import styles from '../Styles';
import laseLogo from '../../assets/img/lase.jpeg';

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
      props.navigation.navigate('App');
    }
  }, [state.token]);

  const login = () => {
    authCall(dispatch, username, password);
  };

  return (
    <Container>
      <Content contentContainerStyle={styles.default}>
        <Item>
          <Image style={styles.image} source={laseLogo} />
        </Item>
        <Item rounded style={styles.inputItem}>
          <Input autoCapitalize="none" onChangeText={(text) => { setUsername(text); }} placeholder="Email" style={styles.placeholder} />
        </Item>
        <Item rounded style={styles.inputItem}>
          <Input secureTextEntry onChangeText={(text) => { setPassword(text); }} placeholder="Password" style={styles.placeholder} />
        </Item>
        <Button
          block
          primary
          onPress={login}
          style={styles.buttonStyle}
        >
          <Text style={{ color: 'white', fontSize: 14 }}>Log in</Text>
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

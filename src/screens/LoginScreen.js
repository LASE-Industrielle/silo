import React, { useState, useEffect, useContext } from 'react';
import { Image, Alert } from 'react-native';
import PropTypes from 'prop-types';
import {
  Container,
  Content,
  Item,
  Input,
  Button,
  Text,
} from 'native-base';

import styles from '../Styles';
import laseLogo from '../../assets/img/lase.jpeg';
import UserContext from '../context/UserContext';

const LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginUserMock } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      props.navigation.navigate('App');
    }
  }, [loggedIn]);

  const login = () => {
    if (email.length < 3 && password.length < 3) {
      loginUserMock(email);
      setLoggedIn(true);
    } else if (email.length >= 3 && password.length >= 3) {
      Alert.alert(
        '',
        'Please enter valid email and password',
        [
          { text: 'OK' },
        ],
        { cancelable: false },
      );
    }
  };

  return (
    <Container>
      <Content contentContainerStyle={styles.default}>
        <Item>
          <Image style={styles.image} source={laseLogo} />
        </Item>
        <Item rounded style={styles.inputItem}>
          <Input onChangeText={(text) => { setEmail(text); }} placeholder="Email" style={styles.placeholder} />
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

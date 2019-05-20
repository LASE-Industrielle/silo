import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import ccLogo from '../../assets/img/cc.jpg';


import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Left,
  ListItem,
  Right,
  Switch,
  Text,
  Thumbnail
} from 'native-base';

import UserContext from '../context/UserContext';
import resetAction from '../utils/NavigationUtils';

import { primary } from '../Colors';

const styles = StyleSheet.create({
  default: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ProfileScreen = (props) => {

  const { username, logoutUser } = useContext(UserContext);
  const [ sync, setSync ] = useState(false);

  const logout = () => {
    logoutUser();
    props.navigation.dispatch(resetAction);
  };

  return (
    <Container>
      <Header />
      <Text>{username}</Text>
      <View style={styles.default}>
        <Thumbnail large source={ccLogo} />
      </View>
      <Button
        block
        style={{ margin: 20, backgroundColor: primary }}
        onPress={logout}
      >
        <Text>Logout</Text>
      </Button>
      <Content>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: primary }} onPress={() => setSync(!sync)}>
              <Icon active name="sync" />
            </Button>
          </Left>
          <Body>
          <Text>Syncronization</Text>
          </Body>
          <Right>
            <Switch value={sync} />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: primary }}>
              <Icon active name="wifi" />
            </Button>
          </Left>
          <Body>
          <Text>Wi-Fi</Text>
          </Body>
          <Right>
            <Text>GeekyAnts</Text>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: primary }}>
              <Icon active name="bluetooth" />
            </Button>
          </Left>
          <Body>
          <Text>Bluetooth</Text>
          </Body>
          <Right>
            <Text>On</Text>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
      </Content>
    </Container>
  );
};

ProfileScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};

export default ProfileScreen;

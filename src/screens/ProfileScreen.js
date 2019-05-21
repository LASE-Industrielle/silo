import React, { useContext, useState } from 'react';
import { StyleSheet, View, Switch } from 'react-native';
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
  Text,
  Thumbnail,
  Title
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
  const [sync1, setSync1] = useState(true);
  const [sync2, setSync2] = useState(false);

  const logout = () => {
    logoutUser();
    props.navigation.dispatch(resetAction);
  };

  return (
    <Container>
      <Header><Title>{username}</Title></Header>
      <Content style={{ marginTop: 70 }}>
        <View style={styles.default}>
          <Thumbnail style={{ marginTop: 20 }} large source={ccLogo}/>
        </View>
        <Button
          block
          style={{
            margin: 20,
            marginTop: 30,
            backgroundColor: primary
          }}
          onPress={logout}
        >
          <Text>Logout</Text>
        </Button>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: primary }}>
              <Icon active name="sync" />
            </Button>
          </Left>
          <Body>
            <Text>Syncronization</Text>
          </Body>
          <Right>
            <Switch value={sync1} onValueChange={() => setSync1(!sync1)} />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: primary }}>
              <Icon active name="ios-notifications"/>
            </Button>
          </Left>
          <Body>
          <Text>Notifications</Text>
          </Body>
          <Right>
            <Switch value={sync2} onValueChange={() => setSync2(!sync2)} />
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

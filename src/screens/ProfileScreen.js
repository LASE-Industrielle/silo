import React, {useState} from 'react';
import { Switch, View} from 'react-native';
import PropTypes from 'prop-types';
import ccLogo from '../../assets/img/cc.jpg';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from 'react-navigation-hooks';


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

import {useStateValue} from '../context/StateContext';
import resetAction from '../utils/NavigationUtils';

import {primary} from '../Colors';
import {LOGOUT_USER} from "../Actions";

const ProfileScreen = (props) => {
  const navigation = useNavigation();

  const [{profile}, dispatch] = useStateValue();

  const [sync1, setSync1] = useState(true);
  const [sync2, setSync2] = useState(false);

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    await dispatch({ type: LOGOUT_USER });
    await navigation.dispatch(resetAction);
  };

  return (
    <Container>
      <Header transparent/>
      <Content style={{ marginTop: 15 }}>
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          margin: 15,
          flexDirection: 'row'
        }}>
          <Thumbnail circle large source={ccLogo}/>
        </View>
        <Title style={{ paddingBottom: 15 }}>{profile.username}</Title>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: primary }}>
              <Icon active name="sync"/>
            </Button>
          </Left>
          <Body>
            <Text>Syncronization</Text>
          </Body>
          <Right>
            <Switch value={sync1} onValueChange={() => setSync1(!sync1)}/>
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
            <Switch value={sync2} onValueChange={() => setSync2(!sync2)}/>
          </Right>
        </ListItem>
        <ListItem icon onPress={logout}>
          <Left>
            <Button style={{ backgroundColor: primary }}>
              <Icon active name="ios-log-out"/>
            </Button>
          </Left>
          <Body>
            <Text>Logout</Text>
          </Body>
          <Right>
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

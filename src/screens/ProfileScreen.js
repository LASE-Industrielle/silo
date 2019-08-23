import React, { useState } from 'react';
import {
  Image, StyleSheet, Switch, Text, TouchableOpacity, View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { useNavigation } from 'react-navigation-hooks';
import { useStore } from '../context/StateContext';
import { LOGOUT_USER } from '../Actions';

import { elevationShadowStyle } from '../Styles';
import NotificationIcon from '../icons/NotificationIcon';
import SynchronizationIcon from '../icons/SynchronizationIcon';
import LogoutIcon from '../icons/LogoutIcon';
import ccLogo from '../../assets/img/cc.jpg';

import GradientHeaderComponent from '../components/GradientHeaderComponent';

const style = StyleSheet.create({
  view: {
    flex: 1,
    zIndex: 2,
    margin: 10,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    fontSize: 13,
    ...elevationShadowStyle(),
  },
  profileImage: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    marginTop: 20,
    borderColor: '#E8E6EA',
    borderWidth: 5,
  },
  profileUsernameText: {
    paddingBottom: 15,
    alignSelf: 'center',
  },
  profileItemText: {
    alignSelf: 'center',
    color: '#797979',
  },
  profileItemRedText: {
    fontWeight: 'bold',
    color: '#F19B93',
  },
  list: {
    flex: 1,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  profileListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  iconTextWrapper: { flexDirection: 'row' },
  icon: {
    padding: 7,
    margin: 7,
    borderRadius: 5,
    alignSelf: 'center',
  },
  switch: {
    alignSelf: 'flex-end',
  },
});

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [{ profile }, dispatch] = useStore();

  const [sync1, setSync1] = useState(true);
  const [sync2, setSync2] = useState(false);

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    await dispatch({ type: LOGOUT_USER });
    navigation.navigate('Login');
  };

  return (
    <GradientHeaderComponent>
      <View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
        <View style={style.view}>
          <Image source={ccLogo} style={style.profileImage} />
          <Text style={style.profileUsernameText}>{profile.username}</Text>
          <View style={style.list}>
            <View style={style.listItem}>
              <View style={style.iconTextWrapper}>
                <SynchronizationIcon fill="#01A04E" height={14} width={14} style={style.icon} />
                <Text style={style.profileItemText}>Synchronization</Text>
              </View>
              <Switch value={sync1} style={style.switch} onValueChange={() => setSync1(!sync1)} />
            </View>
            <View style={style.listItem}>
              <View style={style.iconTextWrapper}>
                <NotificationIcon fill="#01A04E" height={14} width={14} style={style.icon} />
                <Text style={style.profileItemText}>Notifications</Text>
              </View>
              <Switch value={sync2} style={style.switch} onValueChange={() => setSync2(!sync2)} />
            </View>
            <TouchableOpacity style={style.profileListItem} onPress={logout}>
              <LogoutIcon fill="#F19B93" height={14} width={14} style={style.icon} />
              <Text style={style.profileItemRedText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </GradientHeaderComponent>
  );
};

export default ProfileScreen;

import React, { useState } from 'react';
import {
  Image, StyleSheet, Switch, Text, TouchableOpacity, View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { useStateValue } from '../context/StateContext';
import { LOGOUT_USER } from '../Actions';

import { elevationShadowStyle } from '../Styles';
import NotificationIcon from '../icons/NotificationIcon';
import SynchronizationIcon from '../icons/SynchronizationIcon';
import LogoutIcon from '../icons/LogoutIcon';
import ccLogo from '../../assets/img/cc.jpg';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    zIndex: 2,
    margin: 20,
    marginTop: 0,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    fontSize: 13,
    bottom: 32,
    ...elevationShadowStyle(2, 0.12),
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
  const [{ profile }, dispatch] = useStateValue();

  const [sync1, setSync1] = useState(true);
  const [sync2, setSync2] = useState(false);

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    await dispatch({ type: LOGOUT_USER });
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
      <View
        style={{
          flex: 0.1,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 20,
        }}
      >
        <Text>Header</Text>
      </View>
      <View style={styles.view}>
        <Image source={ccLogo} style={styles.profileImage} />
        <Text style={styles.profileUsernameText}>{profile.username}</Text>
        <View style={styles.list}>
          <View style={styles.listItem}>
            <View style={styles.iconTextWrapper}>
              <SynchronizationIcon fill="#01A04E" height={14} width={14} style={styles.icon} />
              <Text style={styles.profileItemText}>Synchronization</Text>
            </View>
            <Switch value={sync1} style={styles.switch} onValueChange={() => setSync1(!sync1)} />
          </View>
          <View style={styles.listItem}>
            <View style={styles.iconTextWrapper}>
              <NotificationIcon fill="#01A04E" height={14} width={14} style={styles.icon} />
              <Text style={styles.profileItemText}>Notifications</Text>
            </View>
            <Switch value={sync2} style={styles.switch} onValueChange={() => setSync2(!sync2)} />
          </View>
          <TouchableOpacity style={styles.profileListItem} onPress={logout}>
            <LogoutIcon fill="#F19B93" height={14} width={14} style={styles.icon} />
            <Text style={styles.profileItemRedText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

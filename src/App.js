import React, { useEffect } from 'react';

import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from 'react-native-firebase';

import AppContainer from './Navigation';
import { StateProvider, initialState } from './context/StateContext';
import mainReducer from './reducers/Reducer';
import NavigationService from './services/NavigationService';


const App = () => {

  let notificationOpenedListener;
  let notificationListener;

  useEffect(() => {
    checkPermission();
    subscribeToTopic('/topics/silo1');

  }, []);

  useEffect(() => {
    notificationListener = firebase.notifications().onNotification((notification) => {
      const {title, body} = notification;
      showAlert(title, body);
    });
    return () => notificationListener()
  }, [])

  useEffect(() => {
    notificationOpenedListener = firebase.notifications().onNotificationOpened((notification) => {
      firebase.notifications().removeDeliveredNotification(notification.notification.notificationId).then(console.log).catch(c => console.log('catch',c))
      NavigationService.navigate('Notifications')
    });
    return () => notificationOpenedListener()
  }, [])



  useEffect(() => {
    firebase.notifications().getInitialNotification().then((notificationOpen) => {
      if (notificationOpen) {
        firebase.notifications().removeDeliveredNotification(notificationOpen.notification.notificationId).then(console.log).catch(c => console.log('catch',c))
        NavigationService.navigate('Notifications')
      }
    })

  },[])

//1
  const checkPermission = async () => {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      getToken();
    } else {
      requestPermission();
    }
  }

  const subscribeToTopic = async (topic) => {
    await firebase.messaging().subscribeToTopic(topic);

  }

//3
  const getToken = async () => {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        // user has a device token
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    }
  }

  const requestPermission = async () => {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
      getToken();
    } catch (error) {
      // User has rejected permissions
      console.log('permission rejected');
    }
  }

  const showAlert = (title, body) => {
    Alert.alert(
      `Status: ${body}`,title,
      [
        {text: 'OK', onPress: () =>  NavigationService.navigate('Notifications')},
      ],
      {cancelable: false},
    );
  }

  return (
    <StateProvider initialState={initialState} reducer={mainReducer}>
      <AppContainer ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}/>
    </StateProvider>
  );
};

export default App;

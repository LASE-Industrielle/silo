import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator, Header,
} from 'react-navigation';
import { Icon } from 'native-base';

import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import LoginScreen from './screens/LoginScreen';
import SilosScreen from './screens/SilosScreen';
import AnalyticsScreen from './screens/AnalyticsScreen';
import ProfileScreen from './screens/ProfileScreen';
import SiloOverviewScreen from './screens/SiloDetailsScreen';
import SiloDescriptionScreen from './screens/SiloDescriptionScreen';


import ProfileIcon from './icons/ProfileIcon';
import SplashScreen from './screens/SplashScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import NotificationIcon from './icons/NotificationIcon';
import BackArrowIcon from './icons/BackArrowIcon';
import InfoIcon from './icons/InfoIcon';

const styles = StyleSheet.create({
  headerTitleText: {
    marginLeft: Platform.OS === 'ios' ? 0 : 26,
    //fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue-Medium' : 'HelveticaNeueMedium',
    fontSize: 18,
    color: 'white'
  },
  headerRightView: {
    flexDirection: 'row',
    marginRight: 8
  },
  notificationIconPadding: {
    paddingRight: 5,
    paddingLeft: 14
  },
  profileIconPadding: {
    paddingRight: 14,
    paddingLeft: 5,
  },
  backArrowPadding: {
    padding: 20,
    paddingTop: 15,
    paddingBottom: 15
  }
});

const navigationOptions = (backArrowExists, title, rightIconsExists = false, notificationIconExists = false,
                           profileIconExists = false, infoIconExists = false) => ({ navigation }) => {
  return {
    header: props => (
      <View>
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
        <Header {...props} />
      </View>
    ),
    // Heading/title of the header
    headerTitle: (
      <Text style={styles.headerTitleText}>{navigation.getParam('title', title !== null ? title : '')}</Text>
    ),
    // Heading style
    headerStyle:
      Platform.OS === 'ios'
        ? {
          backgroundColor: 'transparent',
          marginTop: 0,
          marginBottom: 10,
          zIndex: -1
        }
        : {
          backgroundColor: 'transparent',
          marginTop: 18,
          marginBottom: 71,
        },
    // Heading text color
    headerTintColor: navigation.getParam('HeaderTintColor', 'white'),
    headerRight: rightIconsExists ? (
      <View style={styles.headerRightView}>
        {notificationIconExists ?
          <TouchableOpacity style={styles.notificationIconPadding} onPress={() => navigation.navigate('Notifications')}>
            <NotificationIcon/>
          </TouchableOpacity>
          :
          null
        }
        {profileIconExists ?
          <TouchableOpacity style={styles.profileIconPadding} onPress={() => navigation.navigate('Profile')}>
            <ProfileIcon/>
          </TouchableOpacity>
          :
          null
        }
        {infoIconExists ?
          <TouchableOpacity style={styles.profileIconPadding} onPress={() => navigation.navigate('SiloDescription', {
            siloDetails: navigation.getParam('siloDetails', {})
          })}>
            <InfoIcon/>
          </TouchableOpacity>
          :
          null
        }
      </View>
    ) : null,
    headerLeft: backArrowExists ? (
      <TouchableOpacity style={styles.backArrowPadding} onPress={() => navigation.goBack()}>
        <BackArrowIcon />
      </TouchableOpacity>
    ) : null,
    headerTransparent: true
  };
};

const SiloNavigator = createStackNavigator(
  {
    Silos: {
      screen: SilosScreen,
      path: 'Silos',
      navigationOptions: navigationOptions(false, 'Silos', true, true, true)
    },
    Analytics: {
      screen: AnalyticsScreen,
      path: 'Analytics',
      navigationOptions: navigationOptions(true, 'Analytics'),
    },
    SiloOverview: {
      screen: SiloOverviewScreen,
      path: 'SiloOverview',
      navigationOptions: navigationOptions(true, '', true, false, false, true)
    },
    SiloDescription: {
      screen: SiloDescriptionScreen,
      path: 'SiloDescription',
      navigationOptions: navigationOptions(true, 'Configuration'),
    },
    Profile: {
      screen: ProfileScreen,
      path: 'Profile',
      navigationOptions: navigationOptions(true, 'Profile'),
    },
    Notifications: {
      screen: NotificationsScreen,
      path: 'Notifications',
      navigationOptions: navigationOptions(true, 'Notifications'),
    },
  },
  {
    initialRouteName: 'Silos',
  },
);


const AppNavigator = createStackNavigator(
  {
    Splash: {
      screen: SplashScreen,
      path: 'Splash',
      navigationOptions: { header: null },
    },
    Login: {
      screen: LoginScreen,
      path: 'Login',
      navigationOptions: navigationOptions(false, '', false)
    },
    App: {
      screen: SiloNavigator,
      path: 'App',
      navigationOptions: { header: null },
    },
  },
  {
    initialRouteName: 'Splash',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import SilosScreen from './screens/SilosScreen';
import AnalyticsScreen from './screens/AnalyticsScreen';
import ProfileScreen from './screens/ProfileScreen';
import SiloOverviewScreen from './screens/SiloDetailsScreen';
import SiloDescriptionScreen from './screens/SiloDescriptionScreen';

import styles from './Styles';
import ProfileIcon from './icons/ProfileIcon';
import HomeIcon from './icons/HomeIcon';
import SplashScreen from './screens/SplashScreen';
import NotificationsScreen from './screens/NotificationsScreen';

const SiloNavigator = createStackNavigator(
  {
    Silos: {
      screen: SilosScreen,
      path: 'Silos',
      navigationOptions: {
        header: null,
      },
    },
    Analytics: {
      screen: AnalyticsScreen,
      path: 'Analytics',
      navigationOptions: {
        header: null,
      },
    },
    SiloOverview: {
      screen: SiloOverviewScreen,
      path: 'SiloOverview',
      navigationOptions: {
        header: null,
      },
    },
    SiloDescription: {
      screen: SiloDescriptionScreen,
      path: 'SiloDescription',
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Silos',
  },
);

const AppTabNavigator = createBottomTabNavigator(
  {
    Silos: {
      screen: SiloNavigator,
      path: 'Silos',
      navigationOptions: {
        tabBarIcon: <HomeIcon />,
      },
    },
    Profile: {
      screen: ProfileScreen,
      path: 'Profile',
      navigationOptions: {
        tabBarIcon: <ProfileIcon />,
      },
    },
    Notifications: {
      screen: NotificationsScreen,
      path: 'Notifications',
      // navigationOptions: {
      //   header: null,
      // }
    },
  },
  {
    tabBarOptions: {
      showLabel: true,
      labelStyle: styles.icons,
    },
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
      navigationOptions: { header: null },
    },
    App: {
      screen: AppTabNavigator,
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

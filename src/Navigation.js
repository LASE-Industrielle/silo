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
import SiloDetailsScreen from './screens/SiloDetailsScreen';
import SiloConfigScreen from './screens/ConfigScreen';

import styles from './Styles';
import ProfileIcon from "./icons/ProfileIcon";
import HomeIcon from "./icons/HomeIcon";

const SiloNavigator = createStackNavigator(
  {
    Silos: {
      screen: SilosScreen,
      path: 'Silo',
      navigationOptions: {
        header: null
      },
    },
    Analytics: {
      screen: AnalyticsScreen,
      path: 'Analytics',
      navigationOptions: {
        header: null
      },
    },
    SiloOverview: {
      screen: SiloDetailsScreen,
      path: 'SiloOverview',
      navigationOptions: {
        header: null
      },
    },
    SiloConfig: {
      screen: SiloConfigScreen,
      path: 'SiloConfig',
      navigationOptions: {
        header: null
      },
    }

  },
  {
    initialRouteName: 'Silos',
  }
);

const AppTabNavigator = createBottomTabNavigator(
  {
    Silos: {
      screen: SiloNavigator,
      path: 'Silos',
      navigationOptions: {
        tabBarIcon: <HomeIcon  style={styles.icons}/>,
      },
    },
    Profile: {
      screen: ProfileScreen,
      path: 'Profile',
      navigationOptions: {
        tabBarIcon: <ProfileIcon  style={styles.icons}/>,//<Icon name="person" style={styles.icons}/>,
      },
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
    Login: {
      screen: LoginScreen,
      path: 'Login',
      navigationOptions: { header: null },
    },
    App: {
      screen: AppTabNavigator,
      path: 'App',
      navigationOptions: { header: null },
    }
  },
  {
    initialRouteName: 'Login',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

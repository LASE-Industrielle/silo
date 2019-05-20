import React from 'react';
import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
} from 'react-navigation';
import {Icon} from 'native-base';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import AnalyticsScreen from './screens/AnalyticsScreen';
import ProfileScreen from './screens/ProfileScreen';
import SiloDetailsScreen from './screens/SiloDetailsScreen';
import SiloConfigScreen from "./screens/ConfigScreen";

import styles from './Styles';

const AppTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            path: 'Home',
            navigationOptions: {
                tabBarIcon: <Icon name="home" style={styles.icons}/>,
            },
        },
        Profile: {
            screen: ProfileScreen,
            path: 'Profile',
            navigationOptions: {
                tabBarIcon: <Icon name="person" style={styles.icons}/>,
            },
        },

    },
    {
        tabBarOptions: {
            showLabel: false,
        },
        initialRouteName: 'Profile',
    },
);

const SiloNavigator = createStackNavigator(
    {
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
        initialRouteName: 'SiloOverview',
    }
);

const AppNavigator = createStackNavigator(
    {
        Login: {
            screen: LoginScreen,
            path: 'Login',
            navigationOptions: {header: null},
        },
        App: {
            screen: AppTabNavigator,
            path: 'App',
            navigationOptions: {header: null},
        },
        Silo: {
            screen: SiloNavigator,
            path: 'Silo',
            navigationOptions: {
                header: null,
            },
        }

    },
    {
        initialRouteName: 'App',
    },
);


const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

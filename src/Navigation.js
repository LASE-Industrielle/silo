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

const AppTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            path: 'Home',
            navigationOptions: {
                tabBarIcon: <Icon name="home"/>,
            },
        },
        Analytics: {
            screen: AnalyticsScreen,
            path: 'Analytics',
            navigationOptions: {
                tabBarIcon: <Icon name="list"/>,
            },
        },
        Profile: {
            screen: ProfileScreen,
            path: 'Profile',
            navigationOptions: {
                tabBarIcon: <Icon name="person"/>,
            },
        },

    },
    {
        tabBarOptions: {
            showLabel: false,
        },
        initialRouteName: 'Home',
    },
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
        SiloDetails: {
            screen: SiloDetailsScreen,
            path: 'SiloDetails',
            navigationOptions: {
                header: null,
            },
        }

    },
    {
        initialRouteName: 'Login',
    },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

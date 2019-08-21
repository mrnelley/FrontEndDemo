import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import HomeScreen from '../screens/HomeScreen';
import AuthLoadingScreen from '../screens/AuthLoading';
import LoginSignUp from '../screens/LoginSignUp';

const AppStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
  }
);

const LoginStack = createStackNavigator(
  {
    LoginSignUp: { screen: LoginSignUp },
  },
);

export default createAppContainer(
  createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: LoginStack,
    Main: MainTabNavigator,
  },
  {
      initialRouteName: 'App',
  })
);

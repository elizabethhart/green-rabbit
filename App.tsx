import React from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { setNavigator } from './app/navigationRef';
import OrientationScreen from './app/screens/OrientationScreen';

const switchNavigator = createSwitchNavigator({
  mainFlow: createBottomTabNavigator({
    Welcome: WelcomeScreen,
    ViewImage: ViewImageScreen,
    Orientation: OrientationScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <App
      ref={(navigator) => {
        setNavigator(navigator);
      }}
    />
  );
};

import React from 'react';
import SignIn from './app/screens/SignIn';
import CreateAccount from './app/screens/CreateAccount';
import Home from './app/screens/Home';
import Profile from './app/screens/Profile';
import Search from './app/screens/Search';
import Detail from './app/screens/Detail';
import SearchResult from './app/screens/SearchResult';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SearchStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen
      name="Detail"
      component={Detail}
      options={({ route }) => ({
        title: route.params.name
      })}
    />
  </HomeStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={Search} />
    <SearchStack.Screen name="SearchResult" component={SearchResult} />
  </SearchStack.Navigator>
);

const TabsScreen = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeStackScreen} />
      <Tabs.Screen name="Profile" component={ProfileStackScreen} />
      <Tabs.Screen name="Search" component={SearchStackScreen} />
    </Tabs.Navigator>
  );
};

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={TabsScreen} />
        <Drawer.Screen name="Profile" component={ProfileStackScreen} />
      </Drawer.Navigator>
      {/* <AuthStack.Navigator>
        <AuthStack.Screen
          name="SignIn"
          component={SignIn}
          options={{ title: 'Sign In' }}
        />
        <AuthStack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{ title: 'Create Account' }}
        />
      </AuthStack.Navigator> */}
    </NavigationContainer>
  );
};

import React from 'react';
import SignIn from './app/screens/SignIn';
import CreateAccount from './app/screens/CreateAccount';
import Home from './app/screens/Home';
import Profile from './app/screens/Profile';
import Search from './app/screens/Search';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Detail from './app/screens/Detail';
import SearchResult from './app/screens/SearchResult';

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

export default () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={HomeStackScreen} />
        <Tabs.Screen name="Profile" component={ProfileStackScreen} />
        <Tabs.Screen name="Search" component={SearchStackScreen} />
      </Tabs.Navigator>
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

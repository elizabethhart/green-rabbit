import React, { useEffect, useMemo, useState } from 'react';
import SignIn from './app/screens/SignIn';
import CreateAccount from './app/screens/CreateAccount';
import Home from './app/screens/Home';
import Profile from './app/screens/Profile';
import Search from './app/screens/Search';
import Detail from './app/screens/Detail';
import Splash from './app/screens/Splash';
import SearchResult from './app/screens/SearchResult';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AuthContext } from './app/context';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
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
  </AuthStack.Navigator>
);

const Tabs = createBottomTabNavigator();

type HomeStackParamList = {
  Home: undefined;
  Detail: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();

type ProfileStackParamList = {
  Profile: undefined;
};

const ProfileStack = createStackNavigator<ProfileStackParamList>();

type SearchStackParamList = {
  Search: undefined;
  SearchResult: undefined;
};

const SearchStack = createStackNavigator<SearchStackParamList>();

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
const DrawerScreen = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={TabsScreen} />
    <Drawer.Screen name="Profile" component={ProfileStackScreen} />
  </Drawer.Navigator>
);

type RootStackParamList = {
  App: undefined;
  Auth: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={DrawerScreen}
        options={{ animationEnabled: false }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{ animationEnabled: false }}
      />
    )}
  </RootStack.Navigator>
);

export default () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userToken, setUserToken] = useState<null | string>(null);

  const authContext = useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken('asdf');
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken('asdf');
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      }
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import colors from '../config/colors';

interface WelcomeScreenProps {
  navigation: any;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => (
  <SafeAreaView style={styles.background} forceInset={{ top: 'always' }}>
    <View style={styles.topBackground}>
      <View style={[styles.bar, styles.shortBar, styles.blueBar]} />
      <View style={[styles.bar, styles.goldBar]} />
      <View style={[styles.bar, styles.tallBar, styles.redBar]} />
    </View>
    <View style={styles.centerBackground}>
      <Image source={require('../assets/favicon.png')} style={styles.logo} />
      <Text>Hello World</Text>
      <View style={styles.loginButton} />
      <View style={styles.registerButton} />
    </View>
    <View style={styles.bottomBackground}>
      <View style={[styles.bar, styles.tallBar, styles.blueBar]} />
      <View style={[styles.bar, styles.goldBar]} />
      <View style={[styles.bar, styles.shortBar, styles.redBar]} />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.white
  },

  topBackground: {
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },

  centerBackground: {
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  bottomBackground: {
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },

  bar: {
    backgroundColor: colors.white,
    width: 100,
    height: 100
  },

  shortBar: {
    height: 50
  },

  tallBar: {
    height: 200
  },

  blueBar: {
    backgroundColor: colors.primary
  },

  redBar: {
    backgroundColor: colors.secondary
  },

  goldBar: {
    backgroundColor: 'gold'
  },

  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.black,
    alignSelf: 'center'
  },

  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.grey,
    alignSelf: 'center'
  },

  logo: {
    height: 100,
    width: 100
  }
});

export default WelcomeScreen;

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import colors from '../config/colors';

interface WelcomeScreenProps {}

const WelcomeScreen: React.FC<WelcomeScreenProps> = () => (
  <View style={styles.background}>
    <View style={styles.topBackground}>
      <View style={styles.tallBlueBar} />
      <View style={styles.goldBar} />
      <View style={styles.shortRedBar} />
    </View>
    <View style={styles.centerBackground}>
      <Image source={require('../assets/favicon.png')} style={styles.logo} />
      <Text>Hello World</Text>
      <View style={styles.loginButton} />
      <View style={styles.registerButton} />
    </View>
    <View style={styles.bottomBackground}>
      <View style={styles.shortBlueBar} />
      <View style={styles.goldBar} />
      <View style={styles.tallRedBar} />
    </View>
  </View>
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

  tallBlueBar: {
    backgroundColor: colors.primary,
    width: 100,
    height: 50
  },

  shortBlueBar: {
    backgroundColor: colors.primary,
    width: 100,
    height: 200
  },

  shortRedBar: {
    backgroundColor: colors.secondary,
    width: 100,
    height: 200
  },

  tallRedBar: {
    backgroundColor: colors.secondary,
    width: 100,
    height: 50
  },

  goldBar: {
    backgroundColor: 'gold',
    width: 100,
    height: 100
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

import React, { FC, useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { AuthContext } from '../context';

import colors from '../config/colors';

const SignInButton: FC = () => {
  const { signIn } = useContext(AuthContext);

  return (
    <TouchableOpacity onPress={() => signIn()} style={styles.loginButton}>
      <Text style={styles.buttonText}>Sign In</Text>
    </TouchableOpacity>
  );
};

interface RegisterButtonProps {
  navigation: any; // TODO
}

const RegisterButton: FC<RegisterButtonProps> = ({ navigation }) => (
  <TouchableOpacity
    onPress={() => navigation.push('CreateAccount')}
    style={styles.registerButton}
  >
    <Text style={styles.buttonText}>Register</Text>
  </TouchableOpacity>
);

const TopGraphic: FC = () => (
  <View style={styles.topBackground}>
    <View style={[styles.bar, styles.shortBar, styles.blueBar]} />
    <View style={[styles.bar, styles.goldBar]} />
    <View style={[styles.bar, styles.tallBar, styles.redBar]} />
  </View>
);

const BottomGraphic: FC = () => (
  <View style={styles.bottomBackground}>
    <View style={[styles.bar, styles.tallBar, styles.blueBar]} />
    <View style={[styles.bar, styles.goldBar]} />
    <View style={[styles.bar, styles.shortBar, styles.redBar]} />
  </View>
);

interface WelcomeProps {
  navigation: any; // TODO
}

const Welcome: React.FC<WelcomeProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.background} forceInset={{ top: 'always' }}>
      <TopGraphic />
      <View style={styles.centerBackground}>
        <SignInButton />
        <RegisterButton navigation={navigation} />
      </View>
      <BottomGraphic />
    </SafeAreaView>
  );
};

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
    backgroundColor: colors.primary,
    justifyContent: 'center'
  },

  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secondary,
    justifyContent: 'center'
  },

  buttonText: {
    color: colors.white,
    alignSelf: 'center'
  }
});

export default Welcome;

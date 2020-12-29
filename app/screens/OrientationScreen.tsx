import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';

import colors from '../config/colors';

const OrientationScreen: React.FC = () => {
  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={[styles.container, styles.other]}>
      <View
        style={{
          backgroundColor: colors.primary,
          width: '100%',
          height: landscape ? '100%' : '30%'
        }}
      />
    </SafeAreaView>
  );
};

// validates style properties
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },

  other: {
    backgroundColor: '#5aad2f'
  }
});

export default OrientationScreen;

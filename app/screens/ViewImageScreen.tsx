import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import colors from '../config/colors';

interface ViewImageScreenProps {
  navigation: any;
}

const ViewImageScreen: React.FC<ViewImageScreenProps> = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.closeIcon} />
    <View style={styles.deleteIcon} />
    <Image
      resizeMode="contain"
      style={styles.image}
      source={{ uri: 'https://picsum.photos/200/300' }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1
  },

  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 40,
    left: 30
  },

  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: 'absolute',
    top: 40,
    right: 30
  },

  image: {
    height: '100%',
    width: '100%'
  }
});

export default ViewImageScreen;

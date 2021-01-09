import React, { FC } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

interface HomeProps {
  navigation: any; // TODO
}

const Home: FC<HomeProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Details"
        onPress={() =>
          navigation.push('Detail', { name: 'React Native School' })
        }
      />
      <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

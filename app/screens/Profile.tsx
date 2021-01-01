import React, { FC } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

interface ProfileProps {
  navigation: any;
}

const Profile: FC<ProfileProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Profile</Text>
      <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});

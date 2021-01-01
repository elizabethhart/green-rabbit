import React, { FC, useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../context';

interface ProfileProps {
  navigation: any;
}

const Profile: FC<ProfileProps> = ({ navigation }) => {
  const { signOut } = useContext(AuthContext);

  return (
    <View>
      <Text>Profile</Text>
      <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Sign out" onPress={() => signOut()} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});

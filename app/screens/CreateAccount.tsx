import React, { FC } from 'react';
import { View, Text, Button } from 'react-native';
import { ScreenContainer } from 'react-native-screens';

interface CreateAccountProps {
  navigation: any;
}

const CreateAccount: FC<CreateAccountProps> = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Create Account Screen</Text>
      <Button title="Sign Up" onPress={() => alert('todo')} />
    </ScreenContainer>
  );
};

export default CreateAccount;

import React, { FC } from 'react';
import { View, Text, Button } from 'react-native';
import { ScreenContainer } from 'react-native-screens';

interface SignInProps {
  navigation: any;
}

const SignIn: FC<SignInProps> = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Sign In Screen</Text>
      <Button title="Sign In" onPress={() => alert('todo')} />
      <Button
        title="CreateAccount"
        onPress={() => navigation.push('CreateAccount')}
      />
    </ScreenContainer>
  );
};

export default SignIn;

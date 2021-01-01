import React, { FC, useContext } from 'react';
import { Text, Button } from 'react-native';
import { ScreenContainer } from 'react-native-screens';
import { AuthContext } from '../context';

interface CreateAccountProps {
  navigation: StackNavigator;
}

const CreateAccount: FC<CreateAccountProps> = ({ navigation }) => {
  const { signUp } = useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Create Account Screen</Text>
      <Button title="Sign Up" onPress={() => signUp()} />
    </ScreenContainer>
  );
};

export default CreateAccount;

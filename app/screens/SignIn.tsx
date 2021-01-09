import React, { FC, useContext } from 'react';
import { Text, Button } from 'react-native';
import { ScreenContainer } from 'react-native-screens';
import { AuthContext } from '../context';

interface SignInProps {
  navigation: any; // TODO
}

const SignIn: FC<SignInProps> = ({ navigation }) => {
  const { signIn } = useContext(AuthContext);
  return (
    <ScreenContainer>
      <Text>Sign In Screen</Text>
      <Button title="Sign In" onPress={() => signIn()} />
      <Button
        title="CreateAccount"
        onPress={() => navigation.push('CreateAccount')}
      />
    </ScreenContainer>
  );
};

export default SignIn;

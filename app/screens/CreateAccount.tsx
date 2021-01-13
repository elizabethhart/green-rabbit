import React, { FC, useContext, useState } from 'react';
import { Text, Button, TextInput, StyleSheet } from 'react-native';
import { ScreenContainer } from 'react-native-screens';
import colors from '../config/colors';
import { AuthContext } from '../context';

interface CreateAccountProps {}

const CreateAccount: FC<CreateAccountProps> = () => {
  const { signUp } = useContext(AuthContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <ScreenContainer>
      <Text>Create Account Screen</Text>
      <TextInput
        autoCompleteType="email"
        onChangeText={(text) => setEmail(text)}
        multiline={false}
        placeholder="test@example.com"
        placeholderTextColor="grey"
        style={styles.emailInput}
      />
      <TextInput
        secureTextEntry={true}
        autoCompleteType="password"
        onChangeText={(text) => setPassword(text)}
        multiline={false}
        placeholderTextColor="grey"
        style={styles.emailInput}
        placeholder="password"
      />
      <Button title="Sign Up" onPress={() => signUp()} />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  emailInput: {
    backgroundColor: colors.white
  }
});

export default CreateAccount;

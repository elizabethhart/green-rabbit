import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Alert,
  Button,
  Image, 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  TouchableHighlight
} from 'react-native';

export default function App() {

  const handleTextPress = () => {
    console.log("Hello World");
  }

  const handleImagePress = () => {
    console.log("Hello World");
  }

  const handleButtonPress1 = () => {
    Alert.alert("Title", "Message", [
      {text: "Yes", onPress: () => console.log("yes")},
      {text: "No", onPress: () => console.log("no")}
    ]);
  }

  const handleButtonPress2 = () => {
    // only works in iOS
    Alert.prompt("Title", "Message", (text: string) => console.log(text));
  }

  return (
    <SafeAreaView style={[styles.container, styles.other]}>
      <Text numberOfLines={1} onPress={handleTextPress}>
        Hello World
      </Text>
      <TouchableHighlight
        onPress={handleImagePress}
      >
        <Image 
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300"
          }}
        />
      </TouchableHighlight>
      <Button 
        color="orange"
        title="Click Me"
        onPress={handleButtonPress1}
      />
      <Button 
        color="orange"
        title="Click Me"
        onPress={handleButtonPress2}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

// validates style properties
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  other: {
    backgroundColor: '#5aad2f',
  }
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
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

  const handleButtonPress = () => {
    console.log("Hello World");
  }

  return (
    <SafeAreaView style={styles.container}>
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
        onPress={handleButtonPress}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5aad2f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

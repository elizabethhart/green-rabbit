import React from 'react';
import {
  Alert,
  Button,
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';

export default function App() {
  const { landscape } = useDeviceOrientation();

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

  const content = () => {
    return (
      <>
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
      </>
    );
  }

  return (
    <SafeAreaView style={[styles.container, styles.other]}>
      <View style={{ 
        backgroundColor: 'blue', 
        width: '100%', 
        height: landscape ? '100%' : '30%', 
      }}></View>
    </SafeAreaView>
  );
}

// validates style properties
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },

  other: {
    backgroundColor: '#5aad2f',
  }
});

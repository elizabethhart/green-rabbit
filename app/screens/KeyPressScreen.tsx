import React from 'react';
import {
    Alert,
    Button,
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

const KeyPressScreen: React.FC = () => {
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
        <View>
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
        </View>
    )
}

export default KeyPressScreen

const styles = StyleSheet.create({})

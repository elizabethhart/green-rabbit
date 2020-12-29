import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import colors from '../config/colors';

interface WelcomeScreenProps {

};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({}) => {
    return (
        <View
            style={styles.background}
        >
            <View 
                style={{ 
                    backgroundColor: 'transparent', 
                    flex: 1,
                }}
            >
                <View
                    style={{ 
                    backgroundColor: 'transparent', 
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'flex-start'
                    }}
                >
                    <View 
                        style={{
                            backgroundColor: colors.primary,
                            width: 100,
                            height: 50
                        }}
                    />
                    <View 
                        style={{
                            backgroundColor: 'gold',
                            width: 100,
                            height: 100,
                        }}
                    />
                    <View 
                        style={{
                            backgroundColor: colors.secondary,
                            width: 100,
                            height: 200
                        }}
                    />
                </View>
                <View
                    style={{ 
                        backgroundColor: 'transparent', 
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Image 
                        source={require('../assets/favicon.png')}
                        style={styles.logo}
                    />
                    <Text>Hello World</Text>
                    <View style={styles.loginButton} />
                    <View style={styles.registerButton} />
                </View>
                <View
                    style={{ 
                    backgroundColor: 'transparent', 
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'flex-end'
                    }}
                >
                    <View 
                        style={{
                            backgroundColor: colors.primary,
                            width: 100,
                            height: 200
                        }}
                    />
                    <View 
                        style={{
                            backgroundColor: 'gold',
                            width: 100,
                            height: 100
                        }}
                    />
                    <View 
                        style={{
                            backgroundColor: colors.secondary,
                            width: 100,
                            height: 50
                        }}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1
    },

    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.black,
        alignSelf: 'center'
    },

    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.grey,
        alignSelf: 'center'
    },
    
    logo: {
        height: 100,
        width: 100
    }
})

export default WelcomeScreen;
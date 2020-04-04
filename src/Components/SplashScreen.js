import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class SplashScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>WELCOME</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center'
    }
})

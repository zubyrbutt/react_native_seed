import React, {Component} from 'react';
import {Text, View, StyleSheet, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class SplashScreen extends Component {
    render() {
        return (

            <View style={styles.container}>
                <StatusBar barStyle = "dark-content" hidden = {true} backgroundColor = "#00BCD4" translucent = {true}/>
                <Icon name="mobile" color="#ffffff" size={100}/>
                <Text style={{color: "#fff"}}>Mobile Price</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: "#FF4332",
        backgroundColor: "#8c7ae6",
        alignItems: 'center',
        justifyContent: 'center'
    }
})

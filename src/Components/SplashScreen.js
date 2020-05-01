import React, {Component} from 'react';
import {Text, View, StyleSheet, StatusBar, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class SplashScreen extends Component {
    render() {
        return (

            <View style={styles.container}>
                <StatusBar barStyle="dark-content" hidden={true} backgroundColor="#00BCD4" translucent={true}/>
                <View style={styles.coverContainer}>
                    <Image source={require('../images/cover.jpg')} style={styles.cover}/>
                </View>
                <Text style={{position: 'absolute', bottom: 1,color: '#fff'}}>Version 1.0.0</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: "#FF4332",
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center'
    },
    coverContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        shadowColor: '#009432',
        shadowOffset: {width: 0, height: 15},
        shadowOpacity: 1,
        shadowRadius: 8,

    },
    cover: {
        width: '100%',
        height: '100%',


    },
})

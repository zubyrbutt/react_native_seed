import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class SplashScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Icon name="mobile" color="#ffffff" size={100}/>
                <Text style={{color: "#fff"}}>Mobile Price</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FF4332",
        alignItems: 'center',
        justifyContent: 'center'
    }
})

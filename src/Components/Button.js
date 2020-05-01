import React, {Component} from 'react';
import {Text, View, StyleSheet,ToastAndroid, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";


export default class Button extends Component {



    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.onPressButtonPlay.bind(this)}>
                    <View style={styles.button}>
                        <Icon name="play" color="#000" size={30}/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onPressButtonPause.bind(this)}>
                </TouchableOpacity>

                <View style={styles.button}>
                    <Icon name="bell" color="#000" size={30}/>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: "black",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        flexDirection: 'row',

    },
    button: {
        width: 60,
        height: 60,
        backgroundColor: '#ddd',
        borderRadius: 100,
        marginHorizontal: 10,
        marginBottom: 5,
        //shadowColor:'#dddddd',
        alignItems: 'center',
        justifyContent: 'center'


    }
})

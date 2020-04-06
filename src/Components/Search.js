import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, SafeAreaView, StatusBar,Image} from 'react-native';

export default class Search extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle='light-content'/>

                <View style={styles.container}>

                        <TextInput
                            style={styles.input}
                            underlineColorAndroid='transparent'
                            placeholder="Samsung A20, Iphone X .."
                            keyboardType='default'
                            returnKeyType='search'
                            autoCorrect={false}
                        />
                </View>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        width: '100%',
    },
    input: {

        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'rgb(255, 255, 255)',
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        elevation: 1,
        marginBottom: -15,

    },

})

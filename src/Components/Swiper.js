import React, {Component} from 'react'
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native'

import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

})
function SorahMulk({ navigation }) {
    return (
        <Swiper style={styles.wrapper} index={0} showsPagination={true} showsButtons={false} horizontal={false}>

            <View style={styles.slide1}>
                <Image style={{width: '97%', height: '100%',}} source={require('../images/01.jpg')}/>

            </View>
            <View style={styles.slide1}>
                <Image style={{width: '97%', height: '100%',}} source={require('../images/02.jpg')}/>

            </View>
            <View style={styles.slide1}>
                <Image style={{width: '97%', height: '100%'}} source={require('../images/03.jpg')}/>
            </View>
        </Swiper>
    );
}

export default SorahMulk;

import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import AIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaView} from "react-native-safe-area-context";
import HomeMenu from "./HomeMenu";
import CardApi from './Api'
import Search from "./Search";

export default class Card extends Component {
    render() {
        return (
            <View>
            <Search />
            <HomeMenu/>
                <CardApi/>
            </View>


        );
    }
}




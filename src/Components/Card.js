import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import AIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaView} from "react-native-safe-area-context";


export default class Card extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.card}>
                        <View style={styles.CardImage}>
                            <Image style={styles.CardImage} source={require('../images/mobile.jpg')} />
                        </View>
                        <Text style={styles.cardPrice}>Rs. 23434</Text>
                        <Text style={styles.cardTitle}>Samunng Note 8 latest model 2020</Text>
                        <View style={styles.cardLocation} >
                            <AIcon  name="facebook" style={{margin:3,}}/>
                            <Text style={styles.cardLocationText}>HAJIPUR, PAKISTAN</Text>
                        </View>
                    </View>

                        <View style={styles.card}>
                        <Image style={styles.CardImage} source={require('../images/movie.jpg')} />
                        <Text style={styles.cardPrice}>Rs. 23434</Text>
                        <Text style={styles.cardTitle}>Samunng Note 8 ne model 2020</Text>
                        <View style={styles.cardLocation} >
                            <AIcon  name="facebook" style={{margin:3,}}/>
                            <Text style={styles.cardLocationText}>HAJIPUR, PAKISTAN</Text>
                        </View>
                    </View>

                        <View style={styles.card}>
                        <Image style={styles.CardImage} source={require('../images/mobile.jpg')} />
                        <Text style={styles.cardPrice}>Rs. 23434</Text>
                        <Text style={styles.cardTitle}>Oppo Note 8 ne model 2020</Text>
                        <View style={styles.cardLocation} >
                            <AIcon  name="facebook" style={{margin:3,}}/>
                            <Text style={styles.cardLocationText}>HAJIPUR, PAKISTAN</Text>
                        </View>
                    </View>

                        <View style={styles.card}>
                        <Image style={styles.CardImage} source={require('../images/movie.jpg')} />
                        <Text style={styles.cardPrice}>Rs. 23434</Text>
                        <Text style={styles.cardTitle}>Inflix Note 8 ne model 2020</Text>
                        <View style={styles.cardLocation} >
                            <AIcon  name="facebook" style={{margin:3,}}/>
                            <Text style={styles.cardLocationText}>HAJIPUR, PAKISTAN</Text>
                        </View>
                    </View>

                        <View style={styles.card}>
                        <Image style={styles.CardImage} source={require('../images/mobile.jpg')} />
                        <Text style={styles.cardPrice}>Rs. 23434</Text>
                        <Text style={styles.cardTitle}>Iphone Note 8 ne model 2020</Text>
                        <View style={styles.cardLocation} >
                            <AIcon  name="facebook" style={{margin:3,}}/>
                            <Text style={styles.cardLocationText}>HAJIPUR, PAKISTAN</Text>
                        </View>
                    </View>

                        <View style={styles.card}>
                        <Image style={styles.CardImage} source={require('../images/movie.jpg')} />
                        <Text style={styles.cardPrice}>Rs. 23434</Text>
                        <Text style={styles.cardTitle}>Samsung Note 8 ne model 2020</Text>
                        <View style={styles.cardLocation} >
                            <AIcon  name="facebook" style={{margin:3,}}/>
                            <Text style={styles.cardLocationText}>HAJIPUR, PAKISTAN</Text>
                        </View>
                    </View>

                        <View style={styles.card}>
                        <Image style={styles.CardImage} source={require('../images/mobile.jpg')} />
                        <Text style={styles.cardPrice}>Rs. 23434</Text>
                        <Text style={styles.cardTitle}>Nokia Note 8 ne model 2020</Text>
                        <View style={styles.cardLocation} >
                            <AIcon  name="facebook" style={{margin:3,}}/>
                            <Text style={{marginLeft: 2,}}>HAJIPUR, PAKISTAN</Text>
                        </View>
                    </View>


                </ScrollView>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        margin: 10,
    },
    card:{
        width: 190,
        height: 230,
        backgroundColor: "#fff",
        //borderColor: 'red',
        //borderTopWidth: 2,
        margin: 5,

    },
    CardImage:{
        width: 130,
        height: 110,
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 3,
    },
    cardPrice:{
        marginTop: 2,
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#343434'
    },
    cardTitle:{
        margin: 5,
        marginLeft: 10,
        fontSize: 17,
        color: '#343434',
    },

    cardLocation: {
        flexDirection: 'row',
        marginTop: 5,
        },
    cardLocationText:{
        marginLeft: 2,
        marginTop: 5,
        fontSize: 14,
        color: '#777'
    }

});


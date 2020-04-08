import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import AIcon from "react-native-vector-icons/MaterialCommunityIcons";
import HomeMenu from "./HomeMenu";

let CardApi;

export default CardApi = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://reactnative.dev/movies.json')
            .then((response) => response.json())
            .then((json) => setData(json.movies))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    });

    return (
        <View style={{flex: 1}}>
            {isLoading ? <ActivityIndicator/> : (
                <FlatList
                    data={data}
                    keyExtractor={({id}, index) => id}
                    numColumns={2}
                    renderItem={({item}) => (

                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={styles.container}>
                                <View style={styles.card}>
                                    <View style={styles.CardImage}>
                                        <Image style={styles.CardImage} source={require('../images/mobile.jpg')}/>
                                    </View>
                                    <Text style={styles.cardPrice}>{item.releaseYear}</Text>
                                    <Text style={styles.cardTitle}>{item.title}</Text>
                                    <View style={styles.cardLocation}>
                                        <AIcon name="facebook" style={{margin: 3,}}/>
                                        <Text style={styles.cardLocationText}>HAJIPUR, PAKISTAN</Text>
                                    </View>
                                </View>
                                </View>
                            </ScrollView>

                    )}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        left: 0,
        right: 0,
    },
    card: {
        width: '100%',
        height: 230,
        padding: 10,
        backgroundColor: null,
        borderColor: '#ddd',
        borderWidth: 1,

    },
    CardImage: {
        width: 130,
        height: 110,
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 3,
    },
    cardPrice: {
        marginTop: 2,
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#343434'
    },
    cardTitle: {
        margin: 5,
        marginLeft: 10,
        fontSize: 17,
        color: '#343434',
    },

    cardLocation: {
        flexDirection: 'row',
        marginTop: 5,
    },
    cardLocationText: {
        marginLeft: 2,
        marginTop: 5,
        fontSize: 14,
        color: '#777'
    }

});

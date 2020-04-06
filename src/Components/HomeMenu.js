import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/FontAwesome';



const HomeStack = createStackNavigator();

function HomeMenu() {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{padding: 2,}}>
                <TouchableOpacity style={{
                    borderWidth: 1,
                    borderColor: 'white',
                    alignSelf: 'flex-start',
                    width: 60,
                    height: 60,
                    backgroundColor: '#4cd137',
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginHorizontal: 16,
                    marginTop: 15,
                }}>
                    <Icon name="mobile" color="#fff" size={40}/>

                </TouchableOpacity>
                <Text style={{textAlign: 'center'}}>samsung</Text>
            </View>

        <View>
            <TouchableOpacity style={{
                borderWidth: 1,
                borderColor: 'white',
                alignSelf: 'flex-start',
                width: 60,
                height: 60,
                backgroundColor: '#487eb0',
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 16,
                marginTop: 15,
            }}>
                <Icon name={"mobile"} size={40} color="#fff"/>

            </TouchableOpacity>
            <Text style={{textAlign: 'center'}}>samsung</Text>

        </View>
                <View>
                    <TouchableOpacity style={{
                    borderWidth: 1,
                    borderColor: 'white',
                    alignSelf: 'flex-start',
                    width: 60,
                    height: 60,
                    backgroundColor: '#00a8ff',
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginHorizontal: 16,
                    marginTop: 15,
                }}>
                    <Icon name={"mobile"} size={40} color="#fff"/>
                </TouchableOpacity>
                    <Text style={{textAlign: 'center'}}>samsung</Text>
                </View>

            <View>
                <TouchableOpacity style={{
                    borderWidth: 1,
                    borderColor: 'white',
                    alignSelf: 'flex-start',
                    width: 60,
                    height: 60,
                    backgroundColor: '#9c88ff',
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginHorizontal: 16,
                    marginTop: 15,
                }}>
                    <Icon name={"mobile"} size={40} color="#fff"/>
                </TouchableOpacity>
                <Text style={{textAlign: 'center'}}>samsung</Text>
            </View>

            <View>
                <TouchableOpacity style={{
                    borderWidth: 1,
                    borderColor: 'white',
                    alignSelf: 'flex-start',
                    width: 60,
                    height: 60,
                    backgroundColor: '#e84118',
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginHorizontal: 16,
                    marginTop: 15,
                }}>
                    <Icon name={"mobile"} size={40} color="#fff"/>
                </TouchableOpacity>
                <Text style={{textAlign: 'center'}}>samsung</Text>
            </View>
            </ScrollView>
        </View>
    );
}

export default HomeMenu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        marginTop: 10,
        backgroundColor: "white",
        flexDirection: 'row',
        justifyContent: 'center',

    },
    HomeMenu: {
        borderWidth: 1,
       borderColor: 'white',
        alignSelf: 'flex-start',
        width: 60,
        height: 60,
        backgroundColor: '#ddd',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 16,
        marginTop: 15,
    },
    HomeMenuIcons:{


    }
});

import * as React from 'react';
import {Button, View, Text, Image, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from "react-native-vector-icons/FontAwesome";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import Fontisto from "react-native-vector-icons/MaterialCommunityIcons";


import SorahMulk from "./src/Components/Swiper";
import AudioPlayer from "./src/Components/AudioPlayer";
import Information from "./src/Components/Info";
import TextTicker from "react-native-text-ticker";


function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <StatusBar barStyle = "dark-content" hidden = {true} backgroundColor = "#00BCD4" translucent = {true}/>

            <TouchableOpacity onPress={() => navigation.navigate('Mulk')}>
                <View style={styles.ReadQuran}>
                    <Icon name='book' color='#009432' size={60} />
                    <Text style={{textAlign: 'center', justifyContent: 'center'}}>Read</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Player')}>
                <View style={styles.ReadQuran}>
                    <Icon5 name='headphones-alt' color='#009432' size={60} />
                    <Text style={{textAlign: 'center', justifyContent: 'center'}}>Listen Audio</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Info')}>
                <View style={styles.ReadQuran}>
                    <Fontisto name='information-variant' color='#009432' size={60} />
                    <TextTicker
                        duration={8000}
                        loop
                        bounce
                        repeatSpacer={10}
                        marqueeDelay={100}
                        style={{textAlign: 'center', justifyContent: 'center', marginHorizontal:5}}>Benefits of Surah Mulk</TextTicker>
                </View>
            </TouchableOpacity>


        </View>
    );
}

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Mulk" component={SorahMulk} />
                <Stack.Screen name="Player" component={AudioPlayer}/>
                <Stack.Screen name="Info" component={Information}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
const styles = StyleSheet.create({
    ImageLogo:{
        width: 120,
        height: 120,
    },
    ReadQuran:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        width: 100,
        height: 100,
        borderRadius: 5,
        backgroundColor: 'white',
        shadowColor: '#009432',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 5
    }

})

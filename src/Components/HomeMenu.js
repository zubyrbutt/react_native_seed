import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ScrollView,Alert} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/FontAwesome';



const HomeStack = createStackNavigator();

const showAlert = () =>{
    Alert.alert(
        'this is just test alert with custom title'
    )
}
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
                   // marginTop: 15,
                }}
                onPress={showAlert}
                >
                    <Icon name="mobile" color="#fff" size={40}/>

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
        width: "100%",
        marginTop: 10,
        backgroundColor: "red",
        flexDirection: 'row',
        justifyContent: 'center',

    },

});

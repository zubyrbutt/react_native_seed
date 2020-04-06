import * as React from 'react';
import { Button, Text, View, TouchableOpacity,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AIcon from 'react-native-vector-icons/AntDesign';
import Card from "./src/Components/Card";

function DetailsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Details!</Text>
        </View>
    );
}



function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Card/>
            <Text>Home screen</Text>
            {/*<Icon.Button name="twitter" backgroundColor="#3b5998">*/}
            {/*    <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>*/}
            {/*        Login with Facebook*/}
            {/*    </Text>*/}
            {/*</Icon.Button>*/}

            {/*<Icon name="facebook" color="#3b5998" size={44}/>*/}


            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}

            />

        </View>
    );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={{header:() => null}}>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Details" component={DetailsScreen} />
        </HomeStack.Navigator>
    );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="Settings" component={SettingsScreen} />
            <SettingsStack.Screen name="Details" component={DetailsScreen} />
        </SettingsStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export default function App() {

    return (
        <NavigationContainer>
            <Tab.Navigator  tabBarOptions={{
                activeTintColor: '#e91e63',

                // cutting off your tab labels
                showLabel: true,

            }}>
                <Tab.Screen
                    options={{
                        tabBarIcon: () => <Icon name="google-home" color="#000" size={44} />
                    }}
                    name="Home"
                    component={HomeStackScreen}
                />

                <Tab.Screen name="Settings" component={SettingsStackScreen}
                options={{
                   tabBarIcon: () => <AIcon name="customerservice" color="#000" size={44} />
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

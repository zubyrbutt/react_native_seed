import React from 'react';
import {Text} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}
import {Center} from "./Center";

const Tabs = createBottomTabNavigator();

function Home() {
    return(
        <Center>
            <Text>Home</Text>
        </Center>
    )

}
function Search() {
    return(
        <Center>
            <Text>Search</Text>
        </Center>
    )

}
export const AppTabs = ({}) =>{
    return(
        <Tabs.Navigator>
            <Tabs.Screen name="Home" component={Home} />
            <Tabs.Screen name="Search" component={Search} />
        </Tabs.Navigator>

    );
}

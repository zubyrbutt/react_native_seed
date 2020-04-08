/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry, StyleSheet} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SplashScreen from "./src/Components/SplashScreen";
//import App from "./src/Components/Api";

class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {currentScreen: 'SplashScreen'};
        setTimeout(()=>{
            this.setState({currentScreen: 'App'})
        },2000)
    }
    render(){
        const {currentScreen} = this.state;
        return currentScreen === 'SplashScreen' ? <SplashScreen/> : <App />;
    }
}


AppRegistry.registerComponent(appName, () => Main);

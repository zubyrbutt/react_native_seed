import React, {Component} from 'react';
import {Text, View, StyleSheet,Button, SafeAreaView, Image, TouchableOpacity, StatusBar, ToastAndroid} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
let SoundPlayer = require('react-native-sound');

let song = null;

export default class AudioPlayer extends Component <{}>{
    constructor(props) {
        super(props);

        this.state = {
            pause: false,
            show: true,
        };
    }

    ShowHideComponent = () =>{
        if(this.state.show === true){
            this.setState({show: false})
        }else{
            this.setState({show: true})
        }
    }
    componentDidMount() {
        // song = new SoundPlayer('a_new_camera.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
        //   if(error)
        //     ToastAndroid.show('Error when init SoundPlayer :(((', ToastAndroid.SHORT);
        // });
    }

    onPressButtonPlay() {
        song = new SoundPlayer('mulk.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
            if(error)
                ToastAndroid.show('Error when init SoundPlayer :(((', ToastAndroid.SHORT);
            else {
                song.play((success) => {
                    if(!success)
                        ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT);
                });
            }
        });

        // if(song != null) {
        //   song.play((success) => {
        //     if(!success)
        //       ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT);
        //   });
        // }
    }

    onPressButtonPause() {
        if(song != null) {
            if(this.state.pause) // play resume
                song.play((success) => {
                    if(!success)
                        ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT);
                });
            else song.pause();

            this.setState({pause: !this.state.pause});
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle = "dark-content" hidden = {true} backgroundColor = "#00BCD4" translucent = {true}/>

                <View style={{alignItems: 'center'}}>
                    <View style={{alignItems: 'center', marginTop: 24}}>
                        <Text style={[styles.textLight, {fontSize: 12}]}>SURAH</Text>

                    </View>

                    <View style={styles.coverContainer}>
                        <Image source={require('../images/cover.jpg')} style={styles.cover}/>
                    </View>

                    <View style={{alignItems: 'center', marginTop: 32}}>
                        <Text style={[styles.textDark, {fontSize: 20, fontWeight: "500"}]}>Surah Mulk</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
                    <TouchableOpacity>
                        <Fontawesome5 name='backward' size={32} color="#93a8b3"/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.playButtonContainer} onPress={this.ShowHideComponent}>

                        {this.state.show ? ( <Fontawesome5  onPress={this.onPressButtonPlay.bind(this)}   name='play' size={32} color="#3D425C"
                                                         style={[styles.playButton, {marginLeft: 8}]}
                        /> ):( <TouchableOpacity>
                            <Fontawesome5  onPress={this.onPressButtonPause.bind(this)} name='pause' size={32} color="#93a8b3"/>
                        </TouchableOpacity>) }

                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Fontawesome5 name='forward' size={32} color="#93a8b3"/>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eaeaec",

    },
    textLight: {
        color: "#b6b7bf"
    },
    coverContainer: {
        marginTop: 32,
        width: 250,
        height: 250,
        shadowColor: '#009432',
        shadowOffset: {width: 0, height: 15},
        shadowOpacity: 1,
        shadowRadius: 8,

    },
    cover: {
        width: 250,
        height: 250,
        borderRadius: 125,

    },
    textDark: {
        color: '#3d425c'
    },
    playButtonContainer: {

        backgroundColor: '#fff',
        borderColor: "rgba(93,63,106, 0.2)",
        borderWidth: 16,
        width: 128,
        height: 128,
        borderRadius: 64,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 32,
        shadowColor: "#503F6A",
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.8,
        shadowRadius: 1,

    }

})

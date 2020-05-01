import React, {Component} from 'react';
import {Text, View, StyleSheet,SafeAreaView,ScrollView} from 'react-native';
import TextTicker from "react-native-text-ticker";

function Info ({navigation}) {

        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container}>
                        <TextTicker
                            style={{ fontSize: 20 }}
                            duration={10000}
                            loop
                            bounce
                            repeatSpacer={100}
                            marqueeDelay={100}
                        >
                            "Surah Mulk benefits before sleeping is revealed"
                        </TextTicker>
                    </View>

                    <View style={{margin: 20}}>
                        <Text style={{fontSize: 15}}>Surah Mulk is a thirty Verse Surah in Quran. Islam is the only religion that guides us towards the right path.{"\n"}{"\n"} ALLAH (SWT) sent his messengers towards the mankind to show the right path to humanity.{"\n"}{"\n"} Prophet Hazrat Muhammad (P.B.U.H) was the last Messenger of ALLAH (SWT).{"\n"}{"\n"} The Holy Quran was revealed to HIM. There are 114 Surahs is the Holy Quran. Each Surah is a light that modifies our lives and shows us the right way to spend lives.{"\n"}{"\n"} Here, in this article, we will discuss benefits of reciting Surah Mulk.{"\n"}{"\n"}

                            <Text style={{fontWeight: 'bold'}}>Benefits of Surah Mulk:</Text>{"\n"}{"\n"}
                            Surah Mulk  that was revealed in Mecca. It consists of thirty verses and three hundred and thirty words and one thousand three hundred letters. Every letter of Quran is blessed and for just even reciting a word there is a virtue.{"\n"}{"\n"}

                            As according to a Hadith Prophet Muhammad (P.B.U.H) said:{"\n"}{"\n"}

                            “Whoever reads a letter from the Holy Quran will receive a hasanah, and it will be multiplied by ten.”{"\n"}{"\n"}

                            So make the Quran an integral part of your life to be succeeded in this world and hereafter.{"\n"}{"\n"}

                            Surah Mulk is in the 29th Parah and is the 67th chapter of the Holy Quran. There are many virtues of reciting it. Recitation of this Surah is not confined to any time you can recite it many times in a day.</Text>
                    </View>
                </ScrollView>

            </SafeAreaView>

        );

}
export default Info;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: 'center',
        marginTop: 20,
        padding: 20,
        elevation: 1

    }
})

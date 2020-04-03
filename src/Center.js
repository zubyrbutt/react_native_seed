import React from 'react';
import {View, Text} from "react-native";

export const Center = ({children}) =>{
    return(
            <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
                {children}
            </View>
    );
};




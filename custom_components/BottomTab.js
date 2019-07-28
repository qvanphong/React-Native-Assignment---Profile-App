import React, {Component} from "react";
import {View} from "react-native";
import { Feather, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

const ICON_SIZE = 26; 
class BottomTab extends Component{
    render() {
        return <View style={{
            flex: 0.05,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        }}>

        <Entypo
        name = 'github' size={ICON_SIZE} color='black'/>
        
        <Feather
        name = 'plus-circle' size={ICON_SIZE} color='black'/>

        <MaterialCommunityIcons name = 'face-profile' size={ICON_SIZE} color='black'/>

        </View>
    

    }
}

export default BottomTab;
import React, {Component} from "react";
import {StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

class FloatingButtons extends Component {
    render(){
        {/* floating back & filter button container */}
        return <View
          style={{
            flex: 1,
            top: 35,
            position: "absolute",
            flexDirection: "row"
          }}>
            {/* Back Button container */}
          <View
            style={{
              flex: 0.5,
              alignItems: "flex-start",
              left: 10,
              zIndex: 1       //The reason i adding zIndex is because the View is "View" contains "TouchableOpacity", so that mean "TouchableOpacity" is a layer under "View"
                              //So when i click on the "TouchableOpacity", the Opacity Animation won't work, but the function in "TouchableOpacity" still working good.
            }}>
              {/* Back Button */}
            <TouchableOpacity style={[styles.btn, styles.floatingButton]}>
              <MaterialIcons name="keyboard-arrow-left" size={12} color="black" />
            </TouchableOpacity>
          </View>
            
            {/* Filter Button container */}
          <View
            style={{
              flex: 0.5,
              alignItems: "flex-end",
              right: 10,
              zIndex: 1
            }}>
              {/* Filter Button */}
            <TouchableOpacity style={[styles.btn, styles.floatingButton]}>
              <MaterialIcons name="filter-center-focus" size={12} color="black" />
            </TouchableOpacity>
          </View>
        </View>;
    }
}

const styles = StyleSheet.create({
 
  floatingButton: {
    width: 27,
    backgroundColor: "white",
    zIndex: 2
  },

  btn: {
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 2,
    elevation: 3,

    height: 26,
    borderRadius: 90,
    alignItems: "center",
    justifyContent: "center"
  },

});


export default FloatingButtons;
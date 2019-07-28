import React from "react";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import {
  TouchableOpacity,
  ScrollView,
  FlatList
} from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import FloatingButton from "./custom_components/FloatingButtons";
import BottomTab from "./custom_components/BottomTab";
import AutoHeightImage from "react-native-auto-height-image";

export default function App() {
  //Define images data
  const imgData = [
    { id: 1, imgSource: require("./assets/my_gallery/1.jpg") },
    { id: 2, imgSource: require("./assets/my_gallery/2.jpg") },
    { id: 3, imgSource: require("./assets/my_gallery/3.jpg") },
    { id: 4, imgSource: require("./assets/my_gallery/4.jpg") },
    { id: 5, imgSource: require("./assets/my_gallery/5.jpg") },
    { id: 6, imgSource: require("./assets/my_gallery/6.jpg") }
  ];
  const centerOfImgDate = imgData.length / 2;

  return (
    // Root container
    <View style={styles.container}>
      <FloatingButton />

      {/* The header contains:
       * Avatar
       * User name
       * User's nickname
       * Button Wrapper: Follow button and send messages button
       */}
      <View style={styles.header}>
        {/* Avatar */}
        <View style={styles.avatarWrapper}>
          <Image
            style={styles.avatar}
            source={require("./assets/my_avatar.png")}
          />
        </View>

        {/* User info */}
        <View style={styles.userInfo}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20
            }}
          >
            Quan Van Phong
          </Text>
          <Text style={{ fontSize: 11, color: "rgb(51,60,87)" }}>
            Java Developer
          </Text>

          {/* Buttons Wrapper */}
          <View style={styles.buttonWrapper}>
            {/* Follow Button */}
            <TouchableOpacity
              style={[styles.btn, styles.buttonFollow]}
              onPress={() => showFollowedAlert()}
            >
              <Text style={{ color: "white", fontSize: 12 }}>Follow</Text>
            </TouchableOpacity>

            {/* Send Messages Button */}
            <TouchableOpacity
              style={[styles.btn, styles.buttonSend]}
              onPress={() => showMessagesSentAlert()}
            >
              <MaterialIcons name="send" size={12} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Follower container */}
      <View style={styles.countArea}>
        <View style={styles.counterContainer}>
          <Text style={styles.numCount}>{imgData.length}</Text>
          <Text style={styles.wordCount}>Photos</Text>
        </View>
        <View style={styles.counterContainer}>
          <Text style={styles.numCount}>15K</Text>
          <Text style={styles.wordCount}>Followers</Text>
        </View>
        <View style={styles.counterContainer}>
          <Text style={styles.numCount}>1</Text>
          <Text style={styles.wordCount}>Following</Text>
        </View>
      </View>

      {/* Gallery Container */}
      <View style={styles.imageArea}>
        {/* To make this imageArea can scroll, wrap those images wrapper to scrollView */}
        <ScrollView
          contentContainerStyle={{
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          {/* Images wrapper */}
          {/* According to facebook's document:
          "Keys help React identify which items have changed, are added, or are removed"
          So if i not place it there, everything work fine but we gonna get a nonsense warning:
          "Warning: Each child in a list should have a unique "key" prop.%s%s See https://fb.me/react-warning-keys for more information.%s," 
          And the reason i am AutoHeightImage that i want it look like the example image, the original Image not support height: 'auto' or i don't know a way to do it.
          */}

          <View>
            {imgData.slice(0, centerOfImgDate).map((item) => createImage(item))}
          </View>
          <View>
            {imgData.slice(centerOfImgDate).map((item) => createImage(item))}
          </View>
        </ScrollView>
      </View>
      <BottomTab />
    </View>
  );

  function createImage(item) {
    return (
      <AutoHeightImage
        key={item.id}
        source={item.imgSource}
        style={styles.img}
        width={170}
        resizeMethod="resize"
      />
    );
  }
}

// The reason i split it to a specify function is for readable code
function showFollowedAlert() {
  Alert.alert(
    "Alert",
    "You've just followed this handsome guy!",
    [{ text: "Cool!" }],
    { cancelable: false }
  );
}

function showMessagesSentAlert() {
  Alert.alert(
    "Alert",
    "The messages has been sent to this user!",
    [{ text: "Ok!" }],
    { cancelable: false }
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  header: {
    paddingTop: 60,
    flex: 0.25,
    flexDirection: "row"
  },

  floatingButton: {
    width: 27,
    backgroundColor: "white",
    zIndex: 2
  },

  avatarWrapper: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center"
  },

  avatar: {
    width: 85,
    height: 85,
    borderRadius: 120
  },

  buttonWrapper: {
    paddingTop: 10,
    paddingBottom: 5,
    paddingRight: 5,
    flexDirection: "row",
    zIndex: 0
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

  buttonFollow: {
    width: 120,
    color: "white",
    backgroundColor: "rgb(71,113,246)"
  },

  buttonSend: {
    marginLeft: 10,
    width: 55,
    backgroundColor: "rgb(120,213,250)"
  },

  userInfo: {
    flex: 0.6,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start"
  },

  countArea: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10
  },
  numCount: {
    fontSize: 20,
    fontWeight: "bold"
  },
  wordCount: {
    fontSize: 12,
    color: "rgb(51,60,87)"
  },

  counterContainer: {
    flex: 0.33,
    alignItems: "center"
  },

  img: {
    borderRadius: 20,
    margin: 5
  },

  imageArea: {
    flex: 0.65,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});

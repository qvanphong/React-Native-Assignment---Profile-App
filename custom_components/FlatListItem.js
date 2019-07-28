import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";

class FlatListItem extends Component {
  render() {
    return (
        <AutoHeightImage
          key={this.props.item.id}
          source={this.props.item.imgSource}
          style={styles.img}
          width={170}
        />
    );
  }
}

export default FlatListItem;

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

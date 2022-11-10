import React from "react";
import { Image, StyleSheet, View } from "react-native";
import color from "../config/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" size={35} color="#fff" />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={35}
          color="#fff"
        />
      </View>
      <Image
        source={require("../assets/chair.jpg")}
        style={styles.image}
        resizeMode={"contain"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.black,
    flex: 1,
  },
  closeIcon: {
    position: "absolute",
    top: 15,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 15,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;

import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

function ActivityIndicator({ visible }: { visible: boolean }) {
  if (!visible) return null;
  return (
    <View style={styles.overLay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overLay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    opacity: 0.7,
    zIndex: 1,
  },
});

export default ActivityIndicator;

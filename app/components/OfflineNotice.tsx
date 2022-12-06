import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/color";
import { AppText } from "./AppText";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

function OfflineNotice() {
  const netInfo = useNetInfo();
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );
  }
  return null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    top: Constants.statusBarHeight,
    width: "100%",
    zIndex: 1,
  },
  text: {
    color: colors.white,
    textAlign: "center",
  },
});

export default OfflineNotice;

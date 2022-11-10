import React from "react";
import { StyleSheet } from "react-native";
import { AppText } from "./AppText";

function ErrorMessage({ error, visible }: { error: any; visible: any }) {
  if (!error || !visible) return null;
  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontsize: 10,
  },
});

export default ErrorMessage;

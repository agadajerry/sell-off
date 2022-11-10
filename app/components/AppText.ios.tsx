import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import color from "../config/color";

export const AppText = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style: any;
}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: color.primary,
    fontSize: 20,
    fontFamily: "Avenir",
  },
});

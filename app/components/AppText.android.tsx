import React from "react";
import { Text, StyleSheet } from "react-native";
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
    color: color.black,
    fontFamily: "Roboto",
    textTransform: "capitalize",
    marginBottom: 7,
    fontSize: 20,
  },
});

import React from "react";
import { Text, StyleSheet } from "react-native";
import color from "../config/color";

export const AppText = ({
  children,
  style,
  numberOfLines,
}: {
  children: React.ReactNode;
  style: any;
  numberOfLines: number;
}) => {
  return (
    <Text style={[styles.text, style]} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: color.black,
    fontFamily: "Roboto",
    textTransform: "capitalize",
    marginBottom: 7,
    fontSize: 12,
  },
});

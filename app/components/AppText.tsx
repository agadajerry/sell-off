import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import color from "../config/color";

export const AppText = ({
  children,
  style,
  numberOfLines,
  ...otherProps
}: {
  children: React.ReactNode;
  style?: any;
  numberOfLines?: number;
}) => {
  return (
    <Text style={[styles.text, style]} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: color.primary,
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 20,
        fontFamily: "Roboto",
        textTransform: "uppercase",
      },
    }),
  },
});

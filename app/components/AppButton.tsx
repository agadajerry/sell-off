import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/color";

interface IButton {
  title: string;
  color?: string;
  onPress?: () => void;
}
export const AppButton = ({ title, onPress }: IButton) => {
  return (
    <TouchableOpacity style={[styles.button]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: colors.primary,
    borderRadius: 25,
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center",
    color: "#fff",
    fontWeight: "600",
    padding: 15,
  },
});

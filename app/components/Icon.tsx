import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface IIcon {
  name: string | any;
  backgroundColor: string;
  size?: number;
  iconColor?: string;
}
function Icon({ name, backgroundColor, size = 40, iconColor = "#fff" }: IIcon) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: 100 / 2,
        backgroundColor: backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} />
    </View>
  );
}

export default Icon;

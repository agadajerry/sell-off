import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function NewListingBtn({ onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.white}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    backgroundColor: colors.primary,
    width: 80,
    height: 80,
    bottom: 25,
    borderColor: colors.white,
    borderWidth: 10,
  },
});

export default NewListingBtn;

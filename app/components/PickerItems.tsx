import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { AppText } from "./AppText";

interface PickerItem {
  label: any;
  onPress?: () => void;
}
function PickerItems({ label, onPress }: PickerItem) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItems;

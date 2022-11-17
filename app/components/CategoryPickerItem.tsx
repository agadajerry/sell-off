import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { AppText } from "./AppText";
import Icon from "./Icon";

interface ICategoryPicker {
  onPress: () => void;
  item?: any;
}
function CategoryPickerItem({ item, onPress }: ICategoryPicker) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon
          name={item.icon}
          backgroundColor={item.backgroundColor}
          size={50}
        />
        <AppText style={styles.label}>{item.label}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    //  width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryPickerItem;

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
          size={80}
        />
        <AppText>{item.label}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
});

export default CategoryPickerItem;

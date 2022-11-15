import React from "react";
import { View, TextInput, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/color";
import defaultStyle from "../config/styles";

interface IInputText {
  icon?: any;
  placeholder?: string;
  autoCapitalize?: any;
  autoCorrect?: boolean;
  keyboardType?: any;
  textContentType?: any;
  secureTextEntry?: boolean;
  onChangeText?: any;
  onBlur?: any;
  width?: number;
}
function AppTextInput({ icon, width, ...otherProps }: IInputText) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyle.textInput} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    padding: 15,
    verticalMargin: 10,
    borderRadius: 25,
    flexDirection: "row",
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
    marginVertical: 5,
  },
});

export default AppTextInput;

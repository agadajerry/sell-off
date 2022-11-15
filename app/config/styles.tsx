import { Platform } from "react-native";
import colors from "../config/color";

export default {
  textInput: {
    fontSize: 18,

    fontfamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.medium,
  },
};

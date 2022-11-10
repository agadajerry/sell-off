// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from "./app/screen/WelcomeScreen";
import ViewImageScreen from "./app/screen/ViewImageScreen";
import { AppButton } from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/components/ListingDetailsScreen";
import MessagingScreen from "./app/screen/MessagingScreen";
import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import ListItems from "./app/components/ListItems";
import AccountScreen from "./app/screen/AccountScreen";
import ListingScreen from "./app/screen/ListingScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screen/LoginScreen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];
export default function App() {
  const [category, setCategory] = React.useState();

  return <LoginScreen />;
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
    height: 30,
    backgroundColor: "red",
  },
});

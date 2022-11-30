import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../screen/AccountScreen";
import MessagingScreen from "../screen/MessagingScreen";

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Accounts" component={AccountScreen} />
    <Stack.Screen name="Messages" component={MessagingScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;

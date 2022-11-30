// import { StatusBar } from "expo-status-bar";

import Screen from "./app/components/Screen";
import { Button, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./app/navigation/AuthNavigation";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigation";

const Stack = createNativeStackNavigator();

const Tweet = ({ navigation }: any) => {
  return (
    <Screen>
      <Text>Tweets</Text>
      <Button
        title="View Tweet"
        onPress={() => navigation.navigate("TweetDetails", { id: 2 })}
      />
    </Screen>
  );
};

const TweetDetails = ({ route }: any) => {
  return (
    <Screen>
      <Text>Tweet Details {route.params.id}</Text>
    </Screen>
  );
};

const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "dodgerblue",
      },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen name="Tweet" component={Tweet} />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={{
        headerStyle: {
          backgroundColor: "tomato",
        },
        headerTintColor: "#fff",
        headerShown: true,
      }}
    />
  </Stack.Navigator>
);

const Account = () => {
  return (
    <Screen>
      <Text>Account</Text>
    </Screen>
  );
};
// const Tab = createBottomTabNavigator();

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveBackgroundColor: "tomato",
      tabBarActiveTintColor: "white",
      tabBarInactiveTintColor: "back",
      tabBarInactiveBackgroundColor: "#eee",
    }}
  >
    <Tab.Screen
      name="Tweet"
      component={Tweet}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={Account}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

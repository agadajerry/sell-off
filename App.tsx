// import { StatusBar } from "expo-status-bar";

import Screen from "./app/components/Screen";
import { Button, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

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

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

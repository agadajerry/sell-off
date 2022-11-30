import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingScreen from "../screen/ListingScreen";
import ListingDetailsScreen from "../components/ListingDetailsScreen";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      animation: "slide_from_bottom",
      headerShown: false,
    }}
  >
    <Stack.Screen name="Listings" component={ListingScreen} />
    <Stack.Screen
      name="ListingDetails"
      component={ListingDetailsScreen}
      options={{
        headerShown: true,
      }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;

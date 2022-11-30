import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../screen/AccountScreen";
import ListingEditingScreen from "../screen/ListingEditingScreen";
import ListingScreen from "../screen/ListingScreen";
import FeedNavigator from "./FeedNavigation";
import AccountNavigator from "./AccountNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewListingBtn from "./NewListingBtn";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="ListingEdit"
      component={ListingEditingScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewListingBtn onPress={() => navigation.navigate("ListingEdit")} />
        ),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            size={size}
            color={color}
          />
        ),
      })}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;

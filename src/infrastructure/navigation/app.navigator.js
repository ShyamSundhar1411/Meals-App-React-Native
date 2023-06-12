import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RestaurantNavigator } from "./restaurants.navigator";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const SettingsScreen = () => <Text>Settings</Text>;
const MapScreen = () => <Text>Map</Text>;

const Tab = createBottomTabNavigator();

const Tab_Icons = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const tabBarIcon =
  (iconName) =>
  ({ size, color }) =>
    <Ionicons name={iconName} size={size} color={color} />;
const screenOptions = ({ route }) => {
  const iconName = Tab_Icons[route.name];
  return {
    tabBarIcon: tabBarIcon(iconName),
  };
};

export const Navigator = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="Map" component={MapScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

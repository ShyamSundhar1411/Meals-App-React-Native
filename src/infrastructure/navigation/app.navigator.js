import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RestaurantNavigator } from "./restaurants.navigator";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { MapScreen } from "../../features/map/screens/map.screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const SettingsScreen = () => <Text>Settings</Text>;

const Tab = createBottomTabNavigator();

const Tab_Icons = {
  Home: "md-restaurant",
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
    headerShown: false,
  };
};

export const Navigator = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name="Home" component={RestaurantNavigator} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

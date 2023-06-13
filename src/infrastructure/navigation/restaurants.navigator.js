import React from "react";
import { Text } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantScreen } from "../../features/restaurants/screens/restaurant.screen";
const RestaurantStack = createStackNavigator();
const DetailScreen = () => {
  return <Text>Hey</Text>;
};
export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantStack.Screen name="Restaurants" component={RestaurantScreen} />
      <RestaurantStack.Screen name="Details" component={DetailScreen} />
    </RestaurantStack.Navigator>
  );
};

import React from "react";
import { Text } from "react-native";
export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    openingHours = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  <Text>{name}</Text>;
};
import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";
import { RestaurantCard } from "../components/restaurant-info-styles";
import { RestaurantInfo } from "../components/restaurant-info";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <>
      <SafeAreaView style={styles.androidSafeArea}>
        <RestaurantInfo restaurant={restaurant} />
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

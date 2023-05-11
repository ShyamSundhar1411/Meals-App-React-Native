import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import styled from "styled-components/native";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { SearchBarComponent } from "../../../components/Search";
import { RestaurantInfo } from "../components/restaurant-info";

const SearchBoxContainer = styled.View`
  padding: 10px;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 10px;
`;
export const RestaurantScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.androidSafeArea}>
        <SearchBoxContainer>
          <SearchBarComponent />
        </SearchBoxContainer>
        <RestaurantListContainer>
          <RestaurantInfo />
        </RestaurantListContainer>
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

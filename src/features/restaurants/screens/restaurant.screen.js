import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState } from "react";
import styled from "styled-components/native";
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { SearchBarComponent } from "../../../components/Search";
import { RestaurantInfo } from "../components/restaurant-info";

const SearchBoxContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.androidSafeArea}>
        <SearchBoxContainer>
          <SearchBarComponent />
        </SearchBoxContainer>
        <FlatList
          data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
          renderItem={() => <RestaurantInfo />}
          keyExtractor={(item) => item.name}
        />
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

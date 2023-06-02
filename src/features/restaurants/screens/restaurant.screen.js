import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useContext } from "react";
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
import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";

const SearchBoxContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;

export const RestaurantScreen = () => {
  const restaurantContext = useContext(RestaurantsContext);
  return (
    <>
      <SafeAreaView style={styles.androidSafeArea}>
        <SearchBoxContainer>
          <SearchBarComponent />
        </SearchBoxContainer>
        <FlatList
          data={restaurantContext.restaurants}
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

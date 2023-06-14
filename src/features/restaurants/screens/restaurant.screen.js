import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { Spacer } from "../../../components/Spacer";
import styled from "styled-components/native";
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { SearchBarComponent } from "../../../components/Search";
import { RestaurantInfo } from "../components/restaurant-info";
import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";
import { ActivityIndicator } from "react-native-paper";
import { Loader } from "../../../components/loader";
const SearchBoxContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;

export const RestaurantScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <>
      <SafeAreaView style={styles.androidSafeArea}>
        <SearchBoxContainer>
          <SearchBarComponent />
        </SearchBoxContainer>
        <Loader isLoading={isLoading} />
        <FlatList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onpress={navigation.navigate("Details", {
                  restaurant: item,
                })}
              >
                <RestaurantInfo restaurant={item} />
              </TouchableOpacity>
            );
          }}
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

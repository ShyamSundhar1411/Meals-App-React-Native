import React, { useState } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { List } from "react-native-paper";
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import { RestaurantCard } from "../components/restaurant-info-styles";
import { RestaurantInfo } from "../components/restaurant-info";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setlunchExpanded] = useState(false);
  const [dinnerExpanded, setdinnerExpanded] = useState(false);
  const [drinksExpanded, setdrinksExpanded] = useState(false);
  const { restaurant } = route.params;
  return (
    <>
      <SafeAreaView style={styles.androidSafeArea}>
        <RestaurantInfo restaurant={restaurant} />
        <ScrollView>
          <List.Accordion
            title="Breakfast"
            // eslint-disable-next-line react/no-unstable-nested-components
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            expanded={breakfastExpanded}
            onPress={() => setBreakfastExpanded(!breakfastExpanded)}
          >
            <List.Item title="Eggs Benedict" />
            <List.Item title="Classic Breakfast" />
          </List.Accordion>
          <List.Accordion
            title="Lunch"
            // eslint-disable-next-line react/no-unstable-nested-components
            left={(props) => <List.Icon {...props} icon="hamburger" />}
            expanded={lunchExpanded}
            onPress={() => setlunchExpanded(!lunchExpanded)}
          >
            <List.Item title="Eggs Benedict" />
            <List.Item title="Classic Breakfast" />
          </List.Accordion>
          <List.Accordion
            title="Dinner"
            // eslint-disable-next-line react/no-unstable-nested-components
            left={(props) => <List.Icon {...props} icon="food-variant" />}
            expanded={dinnerExpanded}
            onPress={() => setdinnerExpanded(!dinnerExpanded)}
          >
            <List.Item title="Eggs Benedict" />
            <List.Item title="Classic Breakfast" />
          </List.Accordion>
          <List.Accordion
            title="Drinnks"
            // eslint-disable-next-line react/no-unstable-nested-components
            left={(props) => <List.Icon {...props} icon="cup" />}
            expanded={drinksExpanded}
            onPress={() => setdrinksExpanded(!drinksExpanded)}
          >
            <List.Item title="Eggs Benedict" />
            <List.Item title="Classic Breakfast" />
          </List.Accordion>
        </ScrollView>
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

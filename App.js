import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { SearchBarComponent } from "./src/components/Search";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.androidSafeArea}>
        <View style={styles.searchBox}>
          <SearchBarComponent />
        </View>
        <View style={styles.listBox}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}
const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  searchBox: {
    padding: 16,
  },
  listBox: {
    backgroundColor: "blue",
    padding: 10,
    flex: 1,
  },
});

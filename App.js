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

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.androidSafeArea}>
        <View style={styles.searchBox}>
          <Text>Search</Text>
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
    backgroundColor: "green",
    padding: 10,
  },
  listBox: {
    backgroundColor: "blue",
    padding: 10,
    flex: 1,
  },
});

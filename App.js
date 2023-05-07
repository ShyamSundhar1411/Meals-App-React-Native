import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Platform,StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style = {styles.androidSafeArea}>
        <View style = {{backgroundColor:"green",padding:10}}>
          <Text>Search</Text>
        </View>
        <View style = {{backgroundColor:"blue",padding:10,flex:1}}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style = "auto" />
    </>
    
  );
}
const styles = StyleSheet.create({
  androidSafeArea:{
    flex:1,
    marginTop:Platform.OS === "android" ? StatusBar.currentHeight:0,
  }
});

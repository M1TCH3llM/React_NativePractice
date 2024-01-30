import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";



export default function App() {
  console.log("app executed");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>About</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Projects</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Design</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Contact</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "white",
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "black",
    height: "20%",
    width: "90%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    padding: 5,
  },
  text: {
    color: "white",
    fontSize: 90,
    fontFamily: "",
  },
});


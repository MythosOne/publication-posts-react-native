import React from "react";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";


export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/images/backgroundImage.png")}
        resizeMode= "cover"
        style={styles.image}
      >
      <View>
      {/* <RegistrationScreen></RegistrationScreen> */}
      <LoginScreen></LoginScreen>
      </View>
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "blue",
    // justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});

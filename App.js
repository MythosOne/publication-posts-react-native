import React from "react";
// import { ImageBackground, StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import { useRoute } from "./router";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const routing = useRoute({});

  return (
    <NavigationContainer>
      {routing}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


import React from "react";
import { useFonts } from "expo-font";
import { View, Text, StyleSheet } from "react-native";

export default CreatePostsScreen = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <View style={styles.container}>
      <Text>CreatePostsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

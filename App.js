import React from "react";
import { StatusBar } from "expo-status-bar";
// import { ImageBackground, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./screens/auth/RegistrationScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import PostsScreen from "./screens/PostsScreen";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}>
        <ImageBackground
          source={require("./assets/images/backgroundImage.png")}
          resizeMode="cover"
          style={styles.image}
        > */}
          <MainStack.Navigator initialRouteName = "Login">
            <MainStack.Screen
              name="Registration"
              component={RegistrationScreen}
            />
            <MainStack.Screen name="Login" component={LoginScreen} />
            <MainStack.Screen name="Post" component={PostsScreen} />
          </MainStack.Navigator>
          <StatusBar style="auto"/>
          {/* <StatusBar style="auto" />
        </ImageBackground>
      </View> */}
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "flex-end",
//   },
// });

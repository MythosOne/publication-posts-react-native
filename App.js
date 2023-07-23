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

// {/* <View style={styles.container}>
//   <ImageBackground
//     source={require("./assets/images/backgroundImage.png")}
//     resizeMode="cover"
//     style={styles.image}
//   > */}
//   <MainStack.Navigator initialRouteName="Login">
//   <MainStack.Screen name="Login" component={LoginScreen} />
//   <MainStack.Screen name="Registration" component={RegistrationScreen} />
//   <MainStack.Screen name="Home" component={Home} />
//   {/* <MainStack.Screen
//     name="CreatePostsScreen"
//     component={CreatePostsScreen}
//   />
//   <MainStack.Screen name="ProfileScreen" component={ProfileScreen} /> */}
// </MainStack.Navigator>
// <StatusBar style="auto" />
// {/* <StatusBar style="auto" />
//   </ImageBackground>
// </View> */}

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

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, Image } from "react-native";
import * as Icon from "react-native-feather";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import RegistrationScreen from "./components/RegistrationScreen";
import LoginScreen from "./components/LoginScreen";
import PostsScreen from "./screens/mainScreen/PostsScreen";
import CreatePostsScreen from "./screens/mainScreen/CreatePostsScreen";
import ProfileScreen from "./screens/mainScreen/ProfileScreen";

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Registration" component={RegistrationScreen} />
      </AuthStack.Navigator>
    );
  }

  return (
    <MainTab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Icon.Grid name="grid" size={24} color={"#878787"} />
          ),
          // tabBarIcon: () => (
          //   <TouchableOpacity
          //     // style={{ marginRight: 16 }}
          //     onPress={onPress}
          //     onLongPress={onLongPress}
          //   >
          //     <Icon.Grid name="grid" size={24} color={"#878787"} />
          //     {/* <Image source={require("./assets/icons/add-active.png")} /> */}
          //   </TouchableOpacity>
          // ),
          headerStyle: {
            height: 88,
            borderBottomWidth: 1,
            borderColor: "#BDBDBD",
          },
          headerTitle: "Публікації",
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: 17,
            lineHeight: 22,
            letterSpacing: -0.408,
            marginRight: 109,
          },
        }}
        name="PostsScreen"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: () => (
            <Icon.Plus name="plus" size={24} color={"#878787"} />
          ),
          title: "Створити публікацію",
          headerTitleStyle: {
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: 17,
            lineHeight: 22,
            letterSpacing: -0.408,
            color: "#212121",
          },
        }}
        name="CreatePostsScreen"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Icon.User name="user" size={24} color={"#878787"} />
          ),
          headerTitleStyle: {
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: 17,
            lineHeight: 22,
            letterSpacing: -0.408,
            color: "#212121",
          },
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};

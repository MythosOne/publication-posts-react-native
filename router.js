import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
    <MainTab.Navigator 
    screenOptions={{tabBarShowLabel:false,}}>
      <MainTab.Screen options={{
        tabBarIcon:({focused, size,color})=>(
            <Icon.Grid name="grid" size={24} color={"orange"}/>
        ),
      }} name= "PostsScreen" component={PostsScreen} />
      <MainTab.Screen options={{
        tabBarIcon:({focused, size,color})=>(
            <Icon.Plus name="plus" size={24} color={"orange"}/>
        ),
      }} name="CreatePostsScreen" component={CreatePostsScreen} />
      <MainTab.Screen options={{
        tabBarIcon:({focused, size,color})=>(
        <Icon.User name="user" size={24} color={"orange"}/>),
      }} name="ProfileScreen" component={ProfileScreen} />
    </MainTab.Navigator>
  );
};

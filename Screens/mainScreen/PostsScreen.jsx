import React from "react";
import { moduleName } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../nestedScreens/HomeScreen";
import CommentScreen from "../nestedScreens/CommentsScreen";
import MapScreen from "../nestedScreens/MapScreen";

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
      />
      <NestedScreen.Screen
        options={{ headerShown: false }}
        name="Comments"
        component={CommentScreen}
      />
      <NestedScreen.Screen
        options={{ headerShown: false }}
        name="Map"
        component={MapScreen}
      />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;

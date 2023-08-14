import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";
import * as Icon from "react-native-feather";

export default function HomeScreen({ route, navigation }) {
  const [posts, setPosts] = useState([]);

  console.log("route.params", route.params);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log("posts", posts);

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: item.photo }}
              style={{ marginTop: 30, width: 300, height: 200 }}
            />
            <View
              style={{ flexDirection: "row", justifyContent: "flex-start" }}
            >
              <Text>Назва</Text>
              <TouchableOpacity onPress={() => {navigation.navigate("Comments")}}>
                <Icon.MessageCircle
                  name="message"
                  size={24}
                  color={"#BDBDBD"}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {navigation.navigate("Map")}}>
                <Icon.MapPin name="message" size={24} color={"#BDBDBD"} />
              </TouchableOpacity>
              <Text>Місцевість</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

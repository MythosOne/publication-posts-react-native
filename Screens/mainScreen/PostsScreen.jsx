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

export default function PostsScreen({ route }) {
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
            <View style = {{flexDirection: "row", justifyContent: "space-between",}}>
              <TouchableOpacity onPress={() => {}}>
                <Icon.MessageCircle
                  name="message"
                  size={24}
                  color={"#BDBDBD"}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Icon.MapPin name="message" size={24} color={"#BDBDBD"} />
              </TouchableOpacity>
              <Text>qwerty</Text>
            </View>
          </View>
        )}
      />
    </View>
    // <View style={styles.postScreen}>
    //   <View style={styles.postHeader}>
    //     <View
    //       style={{
    //         marginTop: 55,
    //         flexDirection: "row",
    //         justifyContent: "flex-end",
    //       }}
    //     >
    //       <Text style={styles.postTitle}>Публікації</Text>
    //       <TouchableOpacity style={{ marginRight: 16 }} onPress={()=> console.log("ExitPosts")}>
    //         <Image source={require("../../assets/icons/log-out.png")} />
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    //   <View style={styles.posts}/>
    //   <View style={styles.postFooter}>
    //     <View
    //       style={{
    //         marginTop: 9,
    //         flexDirection: "row",
    //         gap: 31,
    //         alignItems: "center",
    //       }}
    //     >
    //       <TouchableOpacity onPress={() => console.log("PostsScreen")}>
    //         <Image source={require("../../assets/icons/grid.png")} />
    //       </TouchableOpacity>
    //       <TouchableOpacity onPress={() => console.log("CreatePostsScreen")}>
    //         <Image source={require("../../assets/icons/rectangle.png")} />
    //       </TouchableOpacity>
    //       <TouchableOpacity onPress={() => console.log("ProfileScreen")}>
    //         <Image source={require("../../assets/icons/user.png")} />
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  },
});

// const styles = StyleSheet.create({
//   postScreen: {
//     height: "99.8%",
//     backgroundColor: "#FFFFFF",
//     justifyContent: "space-around",
//   },

//   postHeader: {
//     height: 88,

//     borderBottomWidth: 1,
//     borderColor: "#BDBDBD",
//   },

//   postTitle: {
//     fontFamily: "Roboto",
//     fontStyle: "normal",
//     fontWeight: 500,
//     fontSize: 17,
//     lineHeight: 22,
//     letterSpacing: -0.408,
//     marginRight: 109,

//     color: "#212121",
//   },

//   posts: {
//     height: "100%",
//   },

//   postFooter: {
//     alignItems: "center",
//     height: 83,

//     borderTopWidth: 1,
//     borderColor: "#BDBDBD",
//   },
// });

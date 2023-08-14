import React, { useState } from "react";
import { useFonts } from "expo-font";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { Camera } from "expo-camera";
import * as Icon from "react-native-feather";
import * as Location from "expo-location";

export default CreatePostsScreen = ({ navigation }) => {
  const [type, setType] = useState("");
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
    console.log("photo", photo);
  };

  const sendPhoto = () => {
    navigation.navigate("Home", { photo });
    console.log("navigation", navigation);
  };

  const currentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    const location = await Location.getCurrentPositionAsync();
    console.log("Location", location);
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={setCamera}>
        {photo && (
          <View style={styles.cameraPhoto}>
            <Image
              source={{ uri: photo }}
              style={{ height: 230, width: "100%" }}
            />
          </View>
        )}
        <TouchableOpacity
          onPress={() => {
            takePhoto();
          }}
          style={styles.snapContainer}
        >
          <Icon.Camera name="camera" size={24} color={"#878787"} />
        </TouchableOpacity>
      </Camera>
      <Text>Завантажте фото</Text>
      <TextInput style={styles.inputName} placeholder="Назва..." />
      <TextInput style={styles.inputLocality} placeholder="Місцевість" />
      {/* <Icon.MapPin name="map-pin" size={24} color={"#BDBDBD"} /> */}
      <TouchableOpacity
        style={styles.buttonPublish}
        onPress={() => {
          if (photo) {
            sendPhoto();
            currentLocation();
          }
        }}
      >
        <Text style={styles.buttonText}>Опубліковати</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    // justifyContent: "center",
    alignItems: "center",
  },

  snapContainer: {
    width: 60,
    height: 60,
    border: 1,
    borderRadius: 60,
    borderWidth: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },

  camera: {
    position: "relative",
    marginTop: 32,
    // marginHorizontal: 16,
    borderRadius: 8,
    height: 240,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },

  inputName: {
    marginTop: 32,
    height: 50,
    width: "90%",
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },

  inputLocality: {
    marginTop: 16,
    height: 50,
    width: "90%",
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },

  buttonPublish: {
    // alignSelf: "center",
    marginTop: 32,

    width: 343,
    height: 50,
    padding: 16,

    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 100,

    backgroundColor: "#FF6C00",
  },

  buttonText: {
    height: 19,

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF",
  },

  cameraPhoto: {
    position: "absolute",
    marginTop: 32,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 8,
    borderColor: "#FF6C00",
  },
});

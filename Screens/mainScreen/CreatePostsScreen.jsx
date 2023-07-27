import React, {useState} from "react";
import { useFonts } from "expo-font";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Camera } from "expo-camera";
import * as Icon from "react-native-feather";

export default CreatePostsScreen = () => {
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

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={setCamera}>
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
      <TextInput style={styles.inputLocality} placeholder="Mісцевість" />
      {/* <Icon.MapPin name="map-pin" size={24} color={"#BDBDBD"} /> */}
      <TouchableOpacity
        style={styles.buttonPublish}
        onPress={() => {
          console.log("Publish Post");
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
    marginTop: 32,
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
});

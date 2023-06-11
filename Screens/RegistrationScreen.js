import React, { useState } from "react";
import { useFonts } from "expo-font";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";

export default function RegistrationScreen() {
  console.log(Platform.OS);
  const [login, setLogin] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isInputFocused, setFocus] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);
  console.log(showKeyboard);

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    // <View style={styles.container}>

    <View style={styles.registrationForm}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
      >
        <View style={styles.photo}></View>
        <Text style={styles.textTitle}>Реєстрація</Text>
        <View style={styles.inputContainer}>
          <TextInput
            selectionColor={"#FF6C00"}
            style={
              isInputFocused.input1 ? styles.inputOnFocus : styles.inputOnBlur
            }
            placeholder="Логін"
            name="username"
            value={login}
            onChangeText={(login) => setLogin(login)}
            onFocus={(prev) => {
              setFocus({...prev, input1: true });
              setShowKeyboard(true);
            }}
            onBlur={(prev) => {
              setFocus({...prev, input1: false });
              setShowKeyboard(false);
            }}
          />
          <TextInput
            selectionColor={"#FF6C00"}
            style={
              isInputFocused.input2 ? styles.inputOnFocus : styles.inputOnBlur
            }
            placeholder="Адреса електронної пошти"
            name="mail"
            autoComplete="email"
            value={mail}
            onChangeText={(mail) => setMail(mail)}
            onFocus={(prev) => setFocus({ ...prev, input2: true })}
            onBlur={(prev) => setFocus({ ...prev, input2: false })}
          />
          <TextInput
            selectionColor={"#FF6C00"}
            style={
              isInputFocused.input3 ? styles.inputOnFocus : styles.inputOnBlur
            }
            placeholder="Пароль"
            autoComplete="password"
            name="password"
            value={password}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
            onFocus={(prev) => setFocus({ ...prev, input3: true })}
            onBlur={(prev) => setFocus({ ...prev, input3: false })}
          />
        </View>
      </KeyboardAvoidingView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("onButtonPress")}
      >
        <Text style={styles.buttonText}>Зареєструватися</Text>
      </TouchableOpacity>
      <Text style={styles.linkText}>
        Вже є акаунт?
        <Text
          style={styles.innerLicnkText}
          onPress={() => console.log("to come in profile")}
        >
          {" "}
          Увійти
        </Text>
      </Text>
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignContent: "center",
    // backgroundColor: "red",
  },

  photo: {
    // position: "absolute",
    zIndex: 1,
    // top: -60,
    bottom: 60,
    // marginTop: 203,
    alignSelf: "center",
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },

  registrationForm: {
    // height: 549,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },

  textTitle: {
    alignSelf: "center",
    bottom: 32,
    // position: "absolute",
    width: 160,
    fontWeight: "500",

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,

    color: "#212121",
  },

  button: {
    // position: "absolute",
    marginTop: 43,
    alignSelf: "center",

    alignItems: "center",
    backgroundColor: "#FF6C00",
    width: 300,
    height: 51,
    padding: 16,
    borderColor: "#FFFFFF",
    borderWidth: 2,
    borderRadius: 100,
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

  linkText: {
    marginTop: 16,
    marginBottom: 45,
    alignSelf: "center",
    // position: "absolute",

    color: "#1B4371",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },

  innerLinkText: {
    marginTop: 16,
    // marginBottom: 78,
    alignSelf: "center",
    // position: "absolute",

    color: "#1B4371",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    textDecorationLine: "underline",
  },

  inputContainer: {
    // marginTop: 33,
    gap: 16,
  },

  inputOnBlur: {
    alignSelf: "center",
    width: 343,
    height: 50,
    borderWidth: 1,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    padding: 16,

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },

  inputOnFocus: {
    alignSelf: "center",
    width: 343,
    height: 50,
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
    borderColor: "#FF6C00",
    borderRadius: 8,
    padding: 16,

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
});

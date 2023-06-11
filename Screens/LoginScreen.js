import React, { useState } from "react";
import { useFonts } from "expo-font";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";

export default function LoginScreen() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isInputFocused, setFocus] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
      <View
        style={styles.loginForm}
      >
        <Text style={styles.textTitle}>Увійти</Text>
        <View style={styles.inputContainer}>
          <TextInput
            selectionColor={"#FF6C00"}
            style={
              isInputFocused.input1 ? styles.inputOnFocus : styles.inputOnBlur
            }
            placeholder="Адреса електронної пошти"
            name="mail"
            autoComplete="email"
            value={mail}
            onChangeText={(mail) => setMail(mail)}
            onFocus={(prev) => {
              setFocus({ ...prev, input1: true });
              setShowKeyboard(true);
            }}
            onBlur={(prev) => {
              setFocus({ ... prev, input1: false });
              setShowKeyboard(false);
            }}
          />
          <TextInput
            selectionColor={"#FF6C00"}
            style={
              isInputFocused.input2 ? styles.inputOnFocus : styles.inputOnBlur
            }
            placeholder="Пароль"
            autoComplete="password"
            name="password"
            value={password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}
            onFocus={(prev) => {
              setFocus({...prev, input2: true });
              // setShowKeyboard(true);
            }}
            onBlur={(prev) => {
              setFocus({...prev, input2: false });
              // setShowKeyboard(false);
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("onButtonPress")}
        >
          <Text style={styles.buttonText}>Увійти</Text>
        </TouchableOpacity>
        <Text style={{...styles.linkText, marginBottom: showKeyboard ? 32 : 111}}>
          Немає акаунту?
          <Text
            style={styles.innerLinkText}
            onPress={() => console.log("to come in registration")}
          >
            {" "}
            Зареєструватися
          </Text>
        </Text>
      </View>

  );
}

const styles = StyleSheet.create({

  loginForm: {
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },

  textTitle: {
    marginTop: 32,
    alignSelf: "center",
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
    marginTop: 50,
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
    marginTop: 32,
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

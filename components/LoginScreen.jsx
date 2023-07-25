import React, { useState } from "react";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

export default function LoginScreen() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [PasswordVisibility, setPasswordVisibility] = useState(true);
  const [isInputFocused, setFocus] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);

  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.loginForm}>
        <Text style={styles.textTitle}>Увійти</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "padding" : "height"}
        >
          <View
            style={{
              ...styles.inputContainer,
              marginBottom: showKeyboard ? 32 : 43,
            }}
          >
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
                setFocus({ ...prev, input1: false });
                setShowKeyboard({ ...prev, showKeyboard: false });
              }}
            />
            <View
              style={
                isInputFocused.input2
                  ? {
                      ...styles.inputContainerPassword,
                      backgroundColor: "#FFFFFF",
                      borderColor: "#FF6C00",
                    }
                  : {
                      ...styles.inputContainerPassword,
                      backgroundColor: "#F6F6F6",
                      borderColor: "#E8E8E8",
                    }
              }
            >
              <TextInput
                selectionColor={"#FF6C00"}
                style={styles.inputPassword}
                placeholder="Пароль"
                autoComplete="password"
                name="password"
                value={password}
                onChangeText={(password) => setPassword(password)}
                secureTextEntry={PasswordVisibility}
                onFocus={(prev) => {
                  setFocus({ ...prev, input2: true });
                  setShowKeyboard(true);
                }}
                onBlur={(prev) => {
                  setFocus({ ...prev, input2: false });
                  setPasswordVisibility(true);
                  setShowKeyboard({ ...prev, showKeyboard: false });
                }}
              />
              <TouchableOpacity
                onPress={() => {
                  setPasswordVisibility(false);
                }}
              >
                <Text style={styles.PasswordVisibilityText}>Показати</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Увійти</Text>
        </TouchableOpacity>
        <Text style={styles.linkText}>
          Немає акаунту?
          <Text
            style={styles.innerLinkText}
            onPress={() => navigation.navigate("Registration")}
          >
            {" "}
            Зареєструватися
          </Text>
        </Text>
      </View>
    </TouchableWithoutFeedback>
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
    width: 160,

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
    alignSelf: "center",
    // alignItems: "center",

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
    marginBottom: 111,
    alignSelf: "center",

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

  inputContainerPassword: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    padding: 16,
    width: 343,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
  },

  inputPassword: {
    width: "78%",

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },

  PasswordVisibilityText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,

    color: "#1B4371",
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

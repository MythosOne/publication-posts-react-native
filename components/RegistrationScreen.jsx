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
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

export default function RegistrationScreen() {
  const [login, setLogin] = useState("");
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
      {/* <View style={styles.container}> */}

      <View style={styles.registrationForm}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "padding" : "height"}
        >
          <View style={styles.photo}>
            <TouchableOpacity>
              <Image
                source={require("../assets/icons/add-active.png")}
                style={{ top: 79, left: 107.5 }}
              />
            </TouchableOpacity>
          </View>
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
                setFocus({ ...prev, input1: true });
                setShowKeyboard(true);
              }}
              onBlur={(prev) => {
                setFocus({ ...prev, input1: false });
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
            <View
              style={
                isInputFocused.input3 ? styles.inputOnFocus : styles.inputOnBlur
              }
            >
              <TextInput
                selectionColor={"#FF6C00"}
                style={{
                  width: "78%",
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: 16,
                  lineHeight: 19,
                  color: "#212121",
                }}
                // style={
                //   isInputFocused.input3 ? styles.inputOnFocus : styles.inputOnBlur
                // }
                placeholder="Пароль"
                autoComplete="password"
                name="password"
                value={password}
                secureTextEntry={PasswordVisibility}
                onChangeText={(password) => setPassword(password)}
                onFocus={(prev) => setFocus({ ...prev, input3: true })}
                onBlur={(prev) => {
                  setFocus({ ...prev, input3: false });
                  setPasswordVisibility(true);
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
          onPress={() =>
            console.log(`login: ${login}, mail: ${mail}, password: ${password}`)
          }
        >
          <Text style={styles.buttonText}>Зареєструватися</Text>
        </TouchableOpacity>
        <Text style={styles.linkText}>
          Вже є акаунт?
          <Text
            style={styles.innerLinkText}
            onPress={() => navigation.navigate("Login")}
          >
            {" "}
            Увійти
          </Text>
        </Text>
      </View>
      {/* </View> */}
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 2,
  //   flexDirection: "column",
  //   justifyContent: "flex-end",
  //   alignContent: "center",
  // },
  photo: {
    // position: "absolute",
    zIndex: 1,
    bottom: 60,
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
    flexDirection: "row",
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
    flexDirection: "row",
    alignItems: "baseline",
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

  PasswordVisibilityText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,

    color: "#1B4371",
  },
});

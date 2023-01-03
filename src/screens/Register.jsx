import { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../constants/colors";
import TextField from "../components/TextField";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Register = ({ navigation }) => {
  const defaultFields = {
    username: "",
    email: "",
    password: "",
    confrimPassword: "",
  };
  const [fields, setFields] = useState(defaultFields);
  const submitHandler = async () => {
    // If the confrim password doesnt match with the password
    if (fields.confrimPassword !== fields.password) {
      alert("Passwords do not match");
      return;
    }

    // Now store the username, email and password in the AsyncStorage
    try {
      await AsyncStorage.clear();

      await AsyncStorage.setItem(`@${fields.email}`, JSON.stringify(fields));
      console.log(await AsyncStorage.getAllKeys());
    } catch (ex) {
      alert("Couldnt store the user info");
    }
  };

  return (
    <View style={{ ...styles.container, backgroundColor: colors.background }}>
      <View style={styles.formContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/LOGO.png")}
            style={styles.logo}
          />
          <Text style={styles.logoText}>Olors</Text>
        </View>

        <View>
          <Text style={styles.continueTxt}>Register your account</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextField
            placeholder={"Enter Username"}
            value={fields.username}
            onChangeText={(value) => {
              setFields((prev) => ({ ...prev, username: value }));
            }}
          />
          <TextField
            placeholder={"Enter Email"}
            value={fields.email}
            onChangeText={(value) => {
              setFields((prev) => ({ ...prev, email: value }));
            }}
          />
          <TextField
            secureTextEntry={true}
            placeholder={"Enter Passowrd"}
            value={fields.password}
            onChangeText={(value) => {
              setFields((prev) => ({ ...prev, password: value }));
            }}
          />

          <TextField
            secureTextEntry={true}
            placeholder={"Enter confrim password"}
            value={fields.confrimPassword}
            onChangeText={(value) => {
              setFields((prev) => ({ ...prev, confrimPassword: value }));
            }}
          />
        </View>

        <AppButton text={"Sign Up"} onPressHandler={submitHandler} />
      </View>

      <View style={styles.footer}>
        <Text>
          Already have an account?{" "}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.99,
    paddingTop: 40,

    backgroundColor: colors.bgColor,
    marginHorizontal: 10,
  },
  formContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: {
    width: 40,
    height: 40,
  },

  logoText: {
    fontSize: 25,
    color: colors.primary,
  },

  continueTxt: {
    color: colors.gray,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "100%",
  },

  forgetPassword: {
    color: colors.primary,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 15,
  },

  footer: {
    flex: 0.1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  link: {
    color: colors.primary,
    textDecorationLine: "underline",
  },
});
export default Register;

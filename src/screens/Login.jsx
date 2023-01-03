import { StyleSheet, View, Text, ImageBackground, Image } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../constants/colors";
import TextField from "../components/TextField";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const defaultFields = {
    email: "",
    password: "",
  };
  const [fields, setFields] = useState(defaultFields);

  const submitHandler = async () => {
    // If teh fields are empty
    if (!fields.email || !fields.password) {
      alert("Fields can't be empty");
      return;
    }

    // Get the data from the AsyncStorage by using email as the key
    try {
      const data = await AsyncStorage.getItem(`@${fields.email}`);
      const jsonParsedData = data != null ? JSON.parse(data) : null;

      // If the data is null (Login wasnt successful)
      if (!jsonParsedData) {
        alert("Please enter a valid email address");
        return;
      }

      // If the email exists then check for the password
      if (fields.password !== jsonParsedData.password) {
        alert("Passwords do not match");
        return;
      }

      // if the password matches then login was successful
      navigation.navigate("Home");
    } catch (ex) {
      alert(ex.message);
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
          <Text style={styles.continueTxt}>Login to continue</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextField
            placeholder={"Enter Email"}
            value={fields.email}
            onChangeText={(prev) => setFields({ ...fields, email: prev })}
          />
          <TextField
            secureTextEntry={true}
            placeholder={"Enter Passowrd"}
            value={fields.password}
            onChangeText={(prev) => setFields({ ...fields, password: prev })}
          />
        </View>

        <AppButton text={"Login"} onPressHandler={submitHandler} />
        <Text style={styles.forgetPassword}>Forget Password ?</Text>
      </View>

      <View style={styles.footer}>
        <Text>
          Don't have an account?{" "}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("Register")}
          >
            Sign up
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
export default Login;

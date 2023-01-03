import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import colors from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";

const AppButton = ({ onPressHandler, text }) => {
  return (
    <View style={styles.loginBtnWrapper}>
      <LinearGradient
        colors={[colors.gradientForm, colors.primary]}
        style={styles.linearGradient}
        start={{ y: 0.0, x: 0.0 }}
        end={{ y: 1.0, x: 0.0 }}
      >
        {/******************** LOGIN BUTTON *********************/}
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.loginBtn}
          onPress={onPressHandler}
        >
          <Text style={styles.loginText}>{text}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  loginBtnWrapper: {
    width: "100%",
    height: 55,
    marginTop: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  linearGradient: {
    width: "100%",
    borderRadius: 50,
  },
  loginBtn: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 55,
  },
  loginText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "400",
  },
});

export default AppButton;

import { TextInput, StyleSheet } from "react-native";
import colors from "../constants/colors";

const TextField = ({ placeholder, value, onChangeText, secureTextEntry }) => {
  return (
    <TextInput
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

TextField.defaultProps = {
  secureTextEntry: false,
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.grayLight,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    height: 55,
    paddingVertical: 0,
    // width: "100%",
  },
});

export default TextField;

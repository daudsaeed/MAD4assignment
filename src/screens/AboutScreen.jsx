import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";

const About = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={{ ...styles.container, backgroundColor: colors.background }}>
      <View style={styles.about}>
        <Text>
          I am a software enginnering pursing a SE degree from comsats. And want
          to be a web 3.0 developer. And life goal is be a successful person
          inshAllah
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 40,
  },
  about: {
    width: "80%",
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 10,
  },
});
export default About;

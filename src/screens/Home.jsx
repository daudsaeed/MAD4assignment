import { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../constants/colors";

const Home = ({ navigation }) => {
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((comments) => console.log(comments))
      .catch((error) => console.log(error));
  });
  const [isLoading, setIsLoading] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.commentsHeader}>
        <Text>All Comments</Text>
      </View>

      <View style={styles.comments}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
});
export default Home;

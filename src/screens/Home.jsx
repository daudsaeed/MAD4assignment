import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  FlatList,
} from "react-native";
import colors from "../constants/colors";

const Home = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState();
  useEffect(() => {
    setIsLoading(true);

    // fetching the data
    fetch("http://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((comments) => {
        console.log(comments);
        setComments(comments);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={"large"} color={colors.primary} />
      ) : (
        <View style={styles.commnetsContainer}>
          <View style={styles.commentsHeader}>
            <Text>All Comments</Text>
          </View>

          <View style={styles.comments}>
            <FlatList
              keyExtractor={(item) => item.id}
              data={comments}
              renderItem={({ item }) => {
                return (
                  <View style={styles.comment}>
                    <Text>{item.name}</Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
      )}
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

  commnetsContainer: {
    margin: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  comment: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 4,
    marginBottom: 20,
    shadowColor: "#000",
  },
});
export default Home;

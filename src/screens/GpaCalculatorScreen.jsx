import { useState } from "react";
import { StyleSheet, View, Text, TextInput, FlatList } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

import AppButton from "../components/AppButton";
import { CONSTANTS } from "../constants/constants";

const GpaCalculator = ({ navigation }) => {
  const { colors } = useTheme();
  const [id, setId] = useState(1);
  const [credit, setCredit] = useState("");
  const [grade, setGrade] = useState("");
  let num = 0;
  const [courses, setCourses] = useState([]);

  const onPressHandler = () => {
    const course = {
      id: id,
      credit,
      grade,
    };

    setId(id + 1);
    setCourses([...courses, course]);
  };

  // const disabledHandler = () => {
  //   if (credit == "" || grade == "") return true;
  //   return false;
  // };
  return (
    <View style={{ ...styles.container, backgroundColor: colors.background }}>
      <View style={styles.inputs}>
        <TextInput
          placeholder="Enter Credit"
          style={styles.textInput}
          value={credit}
          onChangeText={setCredit}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Enter Grade"
          style={styles.textInput}
          value={grade}
          onChangeText={setGrade}
          keyboardType="numeric"
        />
        <AppButton text={"ADD"} onPressHandler={onPressHandler} />
      </View>

      <View>
        <FlatList
          data={courses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.course}>
                <View style={styles.courseRating}>
                  <View style={styles.iconText}>
                    <Entypo name="text-document" size={24} color="black" />
                    <Text>{item.id}</Text>
                  </View>

                  <View style={styles.iconText}>
                    <Entypo name="time-slot" size={24} color="black" />
                    <Text>{item.credit}</Text>
                  </View>

                  <View style={styles.iconText}>
                    <MaterialIcons name="grade" size={24} color="black" />
                    <Text>{item.grade}</Text>
                  </View>
                </View>

                <View style={styles.courseBtns}>
                  <AppButton text={"Delete"} onPressHandler={() => {}} />
                  <AppButton text={"Edit"} onPressHandler={() => {}} />
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CONSTANTS.BACKGROUND_COLOR_PRIMARY,
    padding: 20,
  },

  inputs: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    // borderColor: "#000",
    // borderWidth: 1,
    width: 100,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#fff",
  },

  // CoursesShow
  course: {
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginTop: 15,
  },

  courseRating: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  courseBtns: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  // IconText
  iconText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default GpaCalculator;

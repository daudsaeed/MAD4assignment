import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Switch } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Screens
import Home from "./src/screens/Home";
import { CONSTANTS } from "./src/constants/constants";
import Register from "./src/screens/Register";
import Login from "./src/screens/Login";
import colors from "./src/constants/colors";

// Light theme
const lightTheme = {
  dark: false,
  colors: {
    primary: CONSTANTS.COLOR_PRIMARY,
    background: CONSTANTS.BACKGROUND_COLOR_PRIMARY,
    card: CONSTANTS.BUTTON_BACKGROUND_PRIMARY,
    text: CONSTANTS.COLOR_PRIMARY,
    border: "rgb(199, 199, 204)",
  },
};

const darkTheme = {
  dark: true,
  colors: {
    primary: CONSTANTS.COLOR_SECONDARY,
    background: CONSTANTS.BACKGROUND_COLOR_SECONDARY,
    card: CONSTANTS.BUTTON_BACKGROUND_SECONDARY,
    text: CONSTANTS.COLOR_PRIMARY,
    border: "rgb(199, 199, 204)",
  },
};

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [theme, setTheme] = useState("light");
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          // headerRight: () => (
          //   <Switch onValueChange={toggleSwitch} value={isEnabled} />
          // ),
          headerStyle: {
            backgroundColor: colors.primary,
          },
        }}
      >
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

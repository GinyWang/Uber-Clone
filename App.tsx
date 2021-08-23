//lib
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//components
import HomeScreen from "./src/screens/HomeScreen";
import MapScreen from "./src/screens/MapScreen";
import FoodScreen from "./src/screens/FoodScreen";
//utils
import { store } from "./src/utils/store";

const screens = [
  { name: "HomeScreen", component: HomeScreen },
  { name: "MapScreen", component: MapScreen },
  { name: "FoodScreen", component: FoodScreen },
];

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
            style={{ flex: 2 }}
          >
            <Stack.Navigator>
              {screens.map((screen) => (
                <Stack.Screen
                  key={screen.name}
                  name={screen.name}
                  component={screen.component}
                  options={{ headerShown: false }}
                />
              ))}
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

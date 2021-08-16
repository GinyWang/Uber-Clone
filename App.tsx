//lib
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import { Provider } from "react-redux";
import HomeScreen from "./src/screens/HomeScreen";
import MapScreen from "./src/screens/MapScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//utils
import { store } from "./store";

const screens = [
  { name: "HomeScreen", component: HomeScreen },
  { name: "MapScreen", component: MapScreen },
];

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
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
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

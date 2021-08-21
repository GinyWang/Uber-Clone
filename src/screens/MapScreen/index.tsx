import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";
import { createStackNavigator } from "@react-navigation/stack";
//components
import Map from "./components/Map";
//constants
import { stackList, RootStackParamList } from "./constants/stackList";

const MapScreen = () => {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          {stackList.map((stack) => (
            <Stack.Screen
              name={stack.name}
              key={stack.name}
              component={stack.component}
              options={{ headerShown: false }}
            />
          ))}
        </Stack.Navigator>
      </View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
    </View>
  );
};

export default MapScreen;

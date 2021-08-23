import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackScreenKeyList } from "constants/";
import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import Icon from "react-native-elements/dist/icons/Icon";
import tw from "tailwind-react-native-classnames";

type ScreenProp = StackNavigationProp<StackScreenKeyList, "HomeScreen">;

const Menu = () => {
  const navigation = useNavigation<ScreenProp>();
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        style={tw`bg-gray-200 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}
      >
        <Icon name="menu" />
        <Text>giggighis</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Menu;

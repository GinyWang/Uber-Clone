import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
//constants
import { RootStackParamList } from "../../constants/stackList";

type NavigateCardScreenProp = StackNavigationProp<
  RootStackParamList,
  "RideOptions"
>;

const NavBar = () => {
  const navigation = useNavigation<NavigateCardScreenProp>();
  const items = [
    {
      key: "rides",
      name: "Rides",
      icon: { name: "car", color: "white" },
      handlePress: () => {
        navigation.navigate("RideOptions");
      },
    },
    {
      key: "eats",
      name: "Eats",
      icon: { name: "fast-food-outline", color: "black" },
      handlePress: () => {},
    },
  ];
  return (
    <View
      style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
    >
      {items.map((item) => (
        <TouchableOpacity
          key={item.key}
          style={tw`flex flex-row bg-${
            item.icon.color === "white" ? "black" : "white"
          } p-3 w-24 rounded-full  justify-evenly`}
          onPress={item.handlePress}
        >
          <Icon
            name={item.icon.name}
            color={item.icon.color}
            type="ionicon"
            size={16}
          />
          <Text style={tw`text-${item.icon.color} text-center`}>
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NavBar;

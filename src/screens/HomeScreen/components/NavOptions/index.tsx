//lib
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
//constants
import { StackScreenKeyList, ScreenKeys } from "constants/screen";
//utils
import { useAppSelector } from "../../../../utils/hooks";
import { selectOrigin } from "../../../../slices/navSlice";

type ScreenProp = StackNavigationProp<StackScreenKeyList, "HomeScreen">;

interface Data {
  key: ScreenKeys;
  title: string;
  image: any;
}
const dataList: Array<Data> = [
  {
    key: "MapScreen",
    title: "Get A Ride",
    image: require("./img/ride.png"),
  },
  {
    key: "FoodScreen",
    title: "Order Food",
    image: require("./img/eat.png"),
  },
];

const NavOptions = () => {
  const navigation = useNavigation<ScreenProp>();
  const origin = useAppSelector((state) => selectOrigin(state.nav));

  return (
    <FlatList
      data={dataList}
      keyExtractor={(item) => item.key}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.key)}
          disabled={!origin}
          style={tw`${!origin ? "opacity-10" : ""}`}
        >
          <View style={tw`p-2 pl-6 pb-8 pt-4 m-2 bg-gray-100 w-40`}>
            <Image
              style={{ width: 120, height: 120 }}
              source={item.image}
              resizeMode="contain"
            />
            <Text style={tw`mt-2 font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

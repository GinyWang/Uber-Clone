import React from "react";
import { Text, FlatList, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    key: "home",
    icon: "home-outline",
    name: "Home",
    destination: "No. 40, Yanji St, Songshan District, Taipei City",
  },
  {
    key: "work",
    icon: "briefcase-outline",
    name: "Work",
    destination:
      "No. 555, Section 4, Zhongxiao E Rd, Xinyi District, Taipei City",
  },
];
interface Props {
  handlePress: (args: string) => void;
}
const NavFavorites = (props: Props) => {
  const { handlePress } = props;
  return (
    <FlatList
      data={data}
      renderItem={({ item: { icon, name, destination } }) => (
        <TouchableOpacity
          style={tw`flex-row items-center p-5`}
          onPress={(destination) => handlePress}
        >
          <Icon
            name={icon}
            type="ionicon"
            size={18}
            color="white"
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
          />
          <View style={tw`w-10/12`}>
            <Text style={tw`font-semibold text-lg`}>{name}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
    />
  );
};

export default NavFavorites;

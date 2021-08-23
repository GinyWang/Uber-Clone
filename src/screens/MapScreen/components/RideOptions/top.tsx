import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, SafeAreaView, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
//utils
import { selectTravelTimeInformation } from "../../../../slices/navSlice";
import { RootStackParamList } from "screens/MapScreen/constants/stackList";
import { useAppSelector } from "../../../../utils/hooks";

type NavigateCardScreenProp = StackNavigationProp<
  RootStackParamList,
  "RideOptions"
>;

const Top = () => {
  const navigation = useNavigation<NavigateCardScreenProp>();
  const travelTimeInformation = useAppSelector((state) =>
    selectTravelTimeInformation(state.nav)
  );

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <TouchableOpacity
        onPress={() => navigation.navigate("NavigateCard")}
        style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
      >
        <Icon name="chevron-left" type="fontawesome" />
      </TouchableOpacity>
      <Text style={tw`text-center py-5 text-xl`}>
        Select a Ride - {travelTimeInformation?.distance.text}
      </Text>
    </SafeAreaView>
  );
};

export default Top;

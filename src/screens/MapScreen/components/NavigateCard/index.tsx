//lib
import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { selectOrigin, setDestination } from "../../../../slices/navSlice";
import tw from "tailwind-react-native-classnames";
import {
  GooglePlaceDetail,
  GooglePlaceData,
} from "react-native-google-places-autocomplete";
//components
import GooglePlaceSearch from "../../../../components/GooglePlaceSearch";
import { useAppDispatch, useAppSelector } from "../../../../utils/hooks";
//constants
import { Place } from "constants/";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../constants/stackList";

type NavigateCardScreenProp = StackNavigationProp<
  RootStackParamList,
  "NavigateCard"
>;

const NavigateCard = () => {
  const dispatch = useAppDispatch();
  const origin = useAppSelector((state) => selectOrigin(state.nav));
  const navigation = useNavigation<NavigateCardScreenProp>();

  const GooglePlaceSearchProps = {
    placeholder: "Where to?",
    styles: {
      container: {
        paddingTop: 20,
        flex: 0,
      },
      textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
      },
    },
  };

  const handleInputChange = (text: string) => {
    if (!text) dispatch(setDestination(null));
  };

  const handlePress = (
    data: GooglePlaceData,
    details: GooglePlaceDetail | null
  ) => {
    const destinationPlace: Place = {
      location: details?.geometry.location,
      description: data.description,
    };
    dispatch(setDestination(destinationPlace));
    navigation.navigate("RideOptions");
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white p-3`}>
      <Text style={tw`p-3`}>
        from:{"\u00A0\u00A0"}
        {origin?.description}
      </Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <GooglePlaceSearch
          {...GooglePlaceSearchProps}
          handlePress={handlePress}
          handleInputChange={handleInputChange}
        />
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

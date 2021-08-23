//lib
import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  GooglePlaceDetail,
  GooglePlaceData,
} from "react-native-google-places-autocomplete";
//utils
import { selectOrigin, setDestination } from "../../../../slices/navSlice";
import { useAppDispatch, useAppSelector } from "../../../../utils/hooks";
//components
import GooglePlaceSearch from "../../../../components/GooglePlaceSearch";
import NavFavorites from "../../../../components/NavFavorites";
import NavBar from "./navBar";
//constants
import { Place } from "constants/";
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
  const handlePressFav = (address: string) => {
    console.log(address);
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
      {/*} <NavFavorites handlePress={handlePressFav} />*/}
      <NavBar />
    </SafeAreaView>
  );
};

export default NavigateCard;

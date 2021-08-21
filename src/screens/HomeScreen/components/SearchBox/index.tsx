import React from "react";
import { StyleSheet, View } from "react-native";
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";
//constants
import { GOOGLE_MAP_API_KEY } from "@env";
import { Place } from "constants/";
//components
import GooglePlaceSearch from "../../../../components/GooglePlaceSearch";
//utils
import { useAppDispatch } from "../../../../utils/hooks";
import { setOrigin, setDestination } from "../../../../slices/navSlice";

const SearchBox = () => {
  const dispatch = useAppDispatch();

  const handleInputChange = (text: string) => {
    if (!text) dispatch(setOrigin(null));
  };

  const handlePress = (
    data: GooglePlaceData,
    details: GooglePlaceDetail | null
  ) => {
    dispatch(
      setOrigin({
        location: details?.geometry.location,
        description: data.description,
      })
    );
    dispatch(setDestination(null));
  };

  return (
    <GooglePlaceSearch
      placeholder="Where from?"
      handlePress={handlePress}
      handleInputChange={handleInputChange}
    />
  );
};

export default SearchBox;

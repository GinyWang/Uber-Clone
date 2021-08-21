import React from "react";
import { View } from "react-native";
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";
//constants
import { GOOGLE_MAP_API_KEY } from "@env";

interface Props {
  placeholder: string;
  handlePress: (
    data: GooglePlaceData,
    details: GooglePlaceDetail | null
  ) => void;
  handleInputChange: (text: string) => void;
}
const GooglePlaceSearch = (props: Props) => {
  const { handlePress, handleInputChange, placeholder } = props;

  return (
    <View style={[{ zIndex: 2, backgroundColor: "white" }]}>
      <GooglePlacesAutocomplete
        placeholder={placeholder}
        query={{
          key: GOOGLE_MAP_API_KEY,
          language: "en",
        }}
        styles={{
          container: {
            flex: 0,
          },
          textInput: {
            fontSize: 18,
          },
        }}
        //TODO:
        //currentLocation
        //enableHighAccuracyLocation
        minLength={2}
        debounce={400}
        nearbyPlacesAPI="GooglePlacesSearch"
        GooglePlacesDetailsQuery={{ fields: "formatted_address,geometry" }}
        fetchDetails={true}
        onPress={(data: GooglePlaceData, details: GooglePlaceDetail | null) =>
          //console.log(data)
          handlePress(data, details)
        }
        textInputProps={{
          onChangeText: (text: string) => {
            handleInputChange;
          },
        }}
        onTimeout={() => console.error("request time out")}
        onFail={(error: any) => console.error(error)}
      />
    </View>
  );
};

export default GooglePlaceSearch;

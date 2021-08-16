import React from "react";
import tw from "tailwind-react-native-classnames";
import { View, SafeAreaView, Image } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
//import Geolocation from "@react-native-community/geolocation";
//component
import NavOptions from "../../components/NavOptions";
//utils
import { setOrigin, setDestination } from "../../slices/navSlice";
//constants
import { GOOGLE_MAP_API_KEY } from "@env";

export default function HomeScreen() {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={require("./img/uberLogo.png")}
        />
      </View>
      <View style={[{ zIndex: 2, backgroundColor: "white" }]}>
        <GooglePlacesAutocomplete
          placeholder="Where From?"
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
          //currentLocation
          //enableHighAccuracyLocation
          minLength={2}
          debounce={400}
          onPress={(data: any, details = null) => {
            dispatch(
              setOrigin({
                location: details?.geometry.location,
                description: data?.description,
              })
            );
            dispatch(setDestination({ location: null }));
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          GooglePlacesDetailsQuery={{ fields: "formatted_address" }}
          fetchDetails={true}
          onTimeout={() => console.error("request time out")}
          onFail={(error: any) => console.error(error)}
        />
      </View>
      <NavOptions />
    </SafeAreaView>
  );
}

/*
  Geolocation.setRNConfiguration({
    skipPermissionRequests: false,
    authorizationLevel: "whenInUse",
  });
  navigator.geolocation = require("@react-native-community/geolocation");
*/

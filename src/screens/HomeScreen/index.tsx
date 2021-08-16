import React from "react";
import tw from "tailwind-react-native-classnames";
import { View, SafeAreaView, Image } from "react-native";
//component
import NavOptions from "../../components/NavOptions";

export default function HomeScreen() {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={require("./img/uberLogo.png")}
        />
      </View>
      <NavOptions />
    </SafeAreaView>
  );
}

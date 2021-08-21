import React from "react";
import tw from "tailwind-react-native-classnames";
import { View, Image } from "react-native";

const Logo = () => {
  return (
    <View style={tw`p-5`}>
      <Image
        style={{ width: 100, height: 100, resizeMode: "contain" }}
        source={require("./uberLogo.png")}
      />
    </View>
  );
};

export default Logo;

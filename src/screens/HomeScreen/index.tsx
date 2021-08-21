import React from "react";
import tw from "tailwind-react-native-classnames";
import { SafeAreaView } from "react-native";
//component
import NavOptions from "./components/NavOptions";
import Logo from "./components/Logo";
import SearchBox from "./components/SearchBox";

export default function HomeScreen() {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <Logo />
      <SearchBox />
      <NavOptions />
    </SafeAreaView>
  );
}

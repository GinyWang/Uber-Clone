import React from "react";
import tw from "tailwind-react-native-classnames";
import { SafeAreaView } from "react-native";
//component
import NavOptions from "./components/NavOptions";
import Logo from "./components/Logo";
import SearchBox from "./components/SearchBox";
import NavFavorites from "../../components/NavFavorites";

export default function HomeScreen() {
  const handlePress = (address: string) => {
    console.log(address);
  };
  return (
    <SafeAreaView style={tw`bg-white`}>
      <Logo />
      <SearchBox />
      <NavOptions />
      <NavFavorites handlePress={handlePress} />
    </SafeAreaView>
  );
}

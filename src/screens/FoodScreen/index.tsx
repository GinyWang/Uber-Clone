import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";

const FoodScreen = () => {
  return (
    <SafeAreaView style={tw`bg-gray-900  h-full`}>
      <Text style={tw`text-white text-lg m-auto`}>Coming Soon...</Text>
    </SafeAreaView>
  );
};

export default FoodScreen;

const styles = StyleSheet.create({});

import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import tw from "tailwind-react-native-classnames";
//utils
import { selectTravelTimeInformation } from "../../../../slices/navSlice";
import { useAppSelector } from "../../../../utils/hooks";

interface Car {
  key: string;
  title: string;
  image: any;
  multiplier: number;
}
const carList: Car[] = [
  {
    key: "uberX",
    title: "Uber X",
    image: require("./img/UberX.jpg"),
    multiplier: 1,
  },
  {
    key: "uberLux",
    title: "Uber LUX",
    image: require("./img/Black.jpg"),
    multiplier: 1.2,
  },
  {
    key: "uberXl",
    title: "Uber XL",
    image: require("./img/UberXl.jpg"),
    multiplier: 1.5,
  },
  {
    key: "uberTaxi",
    title: "Uber Taxi",
    image: require("./img/UberTaxi.png"),
    multiplier: 1.1,
  },
];
const SURGE_CHARGE_RATE = 18;

const Cars = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const travelTimeInformation = useAppSelector((state) =>
    selectTravelTimeInformation(state.nav)
  );
  return (
    <View>
      <FlatList
        style={{ height: 305 }}
        data={carList}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.key}
            style={tw`flex flex-row bg-white justify-between items-center px-10 ${
              item.key === selectedCar?.key ? "bg-gray-200" : ""
            }`}
            onPress={() => setSelectedCar(item)}
          >
            <Image
              style={{ width: 90, height: 90, resizeMode: "contain" }}
              source={item.image}
            />
            <View>
              <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
              <Text>
                {travelTimeInformation
                  ? travelTimeInformation.duration.text
                  : "?"}
                Travel time
              </Text>
            </View>
            <Text style={tw`text-xl`}>
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "TWD",
              }).format(
                (travelTimeInformation
                  ? travelTimeInformation.duration.value *
                    SURGE_CHARGE_RATE *
                    item.multiplier
                  : 0) / 100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View style={tw`h-24`}>
        <TouchableOpacity
          disabled={!selectedCar}
          style={tw`bg-black py-3 m-3 ${!selectedCar ? "bg-gray-300" : ""}`}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Choose {selectedCar?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cars;

import { Point } from "react-native-google-places-autocomplete";

export interface Place {
  location: Point | undefined;
  description: string | undefined;
}
export interface TravelTimeInformation {
  distance: {
    text: string;
    value: number;
  };
  duration: {
    text: string;
    value: number;
  };
}

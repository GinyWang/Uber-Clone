import { Point } from "react-native-google-places-autocomplete";

export interface Place {
  location: Point | undefined;
  description: string | undefined;
}

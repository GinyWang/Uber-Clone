import NavigateCard from "../components/NavigateCard";
import RideOptions from "../components/RideOptions";

export type RootStackParamList = {
  NavigateCard: undefined;
  RideOptions: undefined;
};
interface StackList {
  name: keyof RootStackParamList;
  component: React.ComponentType<any>;
}
export const stackList: StackList[] = [
  { name: "NavigateCard", component: NavigateCard },
  { name: "RideOptions", component: RideOptions },
];

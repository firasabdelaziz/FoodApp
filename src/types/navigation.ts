import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Restaurant: undefined;
};

export type RestaurantScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Restaurant"
>;

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Restaurant"
>;
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RestaurantScreen } from "../screens/RestaurantScreen";
import { RootStackParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Restaurant"
        component={RestaurantScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
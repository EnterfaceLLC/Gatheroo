//* REACT NAVIGATION IMPORTS \\
import { createStackNavigator } from "@react-navigation/stack";

//* THEME IMPORTS \\
import { colors } from "../../theme/colors";

//* SCREEN IMPORTS \\
import DashBoardScreen from "../screens/DashBoardScreen";
import ConfirmationScreen from "../screens/ConfirmationScreen";

//* NAVIGATION CODE \\
const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Dash"
        component={DashBoardScreen}
      />
      <Stack.Screen
        name="Confirmation"
        component={ConfirmationScreen}
      />
    </Stack.Navigator>
  );
};


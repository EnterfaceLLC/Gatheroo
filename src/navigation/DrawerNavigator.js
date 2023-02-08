//* REACT NAVIGATION IMPORTS \\
import { createDrawerNavigator } from '@react-navigation/drawer';

//* THEME IMPORTS \\
import { colors } from '../../theme/colors';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

//* SCREEN IMPORTS \\
import Home from '../screens/HomeScreen';
// import DashBoard from '../screens/DashBoardScreen';
// import ConfirmationScreen from '../screens/ConfirmationScreen';

//* STACK NAVIGATION IMPORTS \\
import { StackNavigator } from './StackNavigator';

//* NAVIGATION CODE \\
const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    >

      <Drawer.Screen
        name='Welcome'
        component={Home}
        options={{ headerStyle: { backgroundColor: colors.light, borderBottomColor: colors.accent, borderBottomWidth: 5 }, drawerType: 'slide', headerShown: false }}
      />
      <Drawer.Screen
        name='Dashboard'
        component={StackNavigator}
        options={{ drawerType: 'slide', headerStyle: { backgroundColor: colors.primary, borderBottomColor: colors.accent, borderBottomWidth: 3 }, }}
      />
      {/* <Drawer.Screen
        name='Confirmation'
        component={ConfirmationScreen}
      /> */}

    </Drawer.Navigator>
  );
};

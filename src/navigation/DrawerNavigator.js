//* REACT NAVIGATION IMPORTS \\
import { createDrawerNavigator } from '@react-navigation/drawer';

//* THEME IMPORTS \\
import { colors } from '../../theme/colors';

//* SCREEN IMPORTS \\
import Home from '../screens/HomeScreen';
import DashBoard from '../screens/DashBoardScreen';

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
        component={DashBoard}
        options={{ drawerType: 'slide', }}
      />

    </Drawer.Navigator>
  );
};
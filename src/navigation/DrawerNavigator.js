import { createDrawerNavigator } from '@react-navigation/drawer';
import { colors } from '../../theme/colors';

import Home from '../screens/HomeScreen';
import ScreenB from '../screens/ScreenB';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='Welcome'
        component={Home}
        options={{ headerStyle: { backgroundColor: colors.light, borderBottomColor: colors.accent, borderBottomWidth: 5 } }}
      />
      <Drawer.Screen name='ScreenB' component={ScreenB} />
    </Drawer.Navigator>
  );
};
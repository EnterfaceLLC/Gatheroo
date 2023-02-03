import { createDrawerNavigator } from '@react-navigation/drawer';

import ScreenA from '../screens/ScreenA';
import ScreenB from '../screens/ScreenB';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='ScreenA' component={ScreenA} />
      <Drawer.Screen name='ScreenB' component={ScreenB} />
    </Drawer.Navigator>
  );
};
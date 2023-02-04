import 'react-native-gesture-handler';

//*EXPO IMPORTS \\
import { StatusBar } from 'expo-status-bar';

//*NAVIGATION IMPORTS \\
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './src/navigation/DrawerNavigator';

//* APPLICATION CODES \\
export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

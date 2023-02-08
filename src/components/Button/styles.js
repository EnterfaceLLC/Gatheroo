//* REACT IMPORTS \\
import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";

//* THEME IMPORTS \\
import { colors } from '../../../theme/colors';
// import { font, size } from "../../THEME/fonts";

//* STYLE EXPORT CODE \\
const { height, width } = Dimensions.get('window');

const isAndroid = Platform.OS === 'android';

export const styles = StyleSheet.create({
  container: {
    width: '50%',
    height: 50,
    backgroundColor: colors.accent,
    marginBottom: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    elevation: 3
  },
  buttonTxt: {
    color: colors.light,
    fontSize: 18,
    fontWeight: '500',
  }
});
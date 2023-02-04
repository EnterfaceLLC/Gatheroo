//* REACT IMPORTS \\
import { StyleSheet, Dimensions } from "react-native";

//* THEME IMPORTS \\
import { colors } from '../../../theme/colors';
// import { font, size } from "../../THEME/fonts";

//* STYLE EXPORT CODE \\
const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary
  },
  headerTxt: {
    color: colors.accent,
    fontSize: 20,

  }
});
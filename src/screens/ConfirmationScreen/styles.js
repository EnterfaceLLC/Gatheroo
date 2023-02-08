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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,

  },
  message: {
    color: colors.light,
    fontSize: 25,
    fontWeight: '500',
    marginVertical: 25
  },
});
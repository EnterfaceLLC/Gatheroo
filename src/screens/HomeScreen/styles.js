import { StyleSheet, Dimensions } from "react-native";

import { colors } from '../../../theme/colors';
// import { font, size } from "../../THEME/fonts";

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  logo: {
    width: 125,
    height: 125,
    marginVertical: 5,
    marginRight: 5,
    alignSelf: 'flex-end',
  },
  section: {
    padding: 5,
    // backgroundColor: colors.complete,
  },
  user: {
    color: colors.accent,
    fontSize: 20,
  },
  date: {
    color: colors.primary,
  },
  time: {
    color: colors.primary,
  },
  info: {
    color: colors.light,
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'center',
  },
  body: {
    backgroundColor: colors.light,
    width: '85%',
    aspectRatio: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    elevation: 3
  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 25,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  }
});
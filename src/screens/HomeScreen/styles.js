//* REACT IMPORTS \\
import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";

//* THEME IMPORTS \\
import { colors } from '../../../theme/colors';
// import { font, size } from "../../THEME/fonts";

//* STYLE EXPORT CODE \\
const { height, width } = Dimensions.get('window');

const isAndroid = Platform.OS === 'android';

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    // backgroundColor: 'teal'
  },
  logo: {
    width: 135,
    height: 135,
  },
  section: {
    // backgroundColor: colors.complete,
  },
  user: {
    color: colors.accent,
    fontSize: 20,
    fontWeight: '500'
  },
  date: {
    color: colors.primary,
    fontSize: 16,
  },
  time: {
    color: colors.light,
    fontSize: 16,
  },
  school: {
    color: colors.light,
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 15,
    textAlign: 'center',
  },
  body: {
    flex: 1,
  },
  card: {
    backgroundColor: colors.light,
    width: '90%',
    aspectRatio: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 25,
    borderWidth: 3,
    borderColor: colors.primary

  },
  scottLogo: {
    width: 130,
    height: 130,
  },
  phone: {
    fontWeight: '500',
  },
  address: {
    fontWeight: '500',
  },
  button: {
    width: 120,
    height: 50,
    borderRadius: 15,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.accent,
    elevation: 3
  },
  buttonTxt: {
    color: colors.light,
    // fontSize: 16,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 'auto',
    justifyContent: 'space-evenly',
    paddingBottom: 5
  },
  links: {
    alignItems: 'center',
  },
  linkTxt: {
    color: colors.primary,
  },
});
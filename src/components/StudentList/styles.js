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
    alignItems: 'center',
  },
  card: {
    width: '80%',
    aspectRatio: 4 / 3,
    backgroundColor: colors.light,
    marginVertical: 20,
    padding: 10,
    borderWidth: 3,
    borderColor: colors.primary,
    borderRadius: 20,
    elevation: 3
  },
  cardContainers: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  studentInfo: {
    // backgroundColor: 'skyblue'

  },
  name: {
    fontSize: 16,
    marginTop: 10,
  },
  grade: {},
  teacher: {},
  classroom: {},
  actionBttns: {
    // flex: 1,
    // backgroundColor: 'teal',
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: colors.tertiary,
    height: 45,
    borderRadius: 10,
  },
});
//* REACT IMPORTS \\
import React from 'react';
import { View, Text } from 'react-native';

//* STYLE IMPORTS \\
import { styles } from './styles';

//* DASHBOARD CODE \\
const DashBoard = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.headerTxt}>Dashboard</Text>
    </View>
  );
};

export default DashBoard;

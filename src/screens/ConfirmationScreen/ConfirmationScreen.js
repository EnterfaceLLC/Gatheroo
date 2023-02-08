import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HomeB } from '../../components/Button/Button';
import { colors } from '../../../theme/colors';

const ConfirmationScreen = () => {
  return (
    <View style={styles.page}>
      <MaterialCommunityIcons name="checkbox-marked-outline" size={130} color={colors.complete} />
      <Text style={styles.message}>YOUR KIDDO IS ON THE WAY</Text>
      <HomeB />
    </View>
  )
}

export default ConfirmationScreen;
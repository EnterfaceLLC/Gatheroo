import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';


export const Submit = () => {
  const navigate = useNavigation();

  const submit = () => {
    navigate.navigate('Confirmation');
  };

  return (
    <Pressable style={styles.container} onPress={submit}>
      <Text style={styles.buttonTxt}>Submit</Text>
    </Pressable>
  );
};


export const HomeB = () => {
  const navigate = useNavigation();

  const submit = () => {
    navigate.reset({
      index: 0,
      routes: [{ name: 'Welcome' }]
    });
  };

  return (
    <Pressable style={styles.container} onPress={submit}>
      <Text style={styles.buttonTxt}>Home</Text>
    </Pressable>
  );
};

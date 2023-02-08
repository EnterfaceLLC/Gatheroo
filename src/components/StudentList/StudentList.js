import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'

import { styles } from './styles';
import { colors } from '../../../theme/colors';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const StudentList = ({ student }) => {

  const [select, setSelect] = useState(false);

  const pressSelect = () => {
    setSelect(v => !v);
    console.log('selected');
  };

  return (
    <View style={styles.page}>

      <View style={styles.card}>

        <View style={styles.cardContainers}>

          <View style={styles.studentInfo}>
            <FontAwesome name="user-circle-o" size={70} color={colors.accent} />
            <Text style={styles.name}>
              Name: <Text style={{ fontWeight: '500' }}>{student.name}</Text>
            </Text>
            <Text>Grade: {student.grade}</Text>
            <Text>Teacher: {student.teacher}</Text>
            <Text>Class: {student.classroom}</Text>
          </View>

          <View style={styles.actionBttns}>
            <Pressable onPress={pressSelect}>
              <Ionicons
                size={40}
                name={select ? 'checkbox' : 'checkbox-outline'}
                color={select ? colors.complete : colors.tertiary} />
            </Pressable>

            {/* <View style={styles.inputContainer}>
              <TextInput keyboardType='numeric' style={styles.input} />
              <Text>Stall #</Text>
            </View> */}

          </View>

        </View>

      </View>

    </View>
  )
}

export default StudentList;
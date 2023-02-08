//* REACT IMPORTS \\
import React from 'react';
import { View, Text, FlatList } from 'react-native';

//* STYLE IMPORTS \\
import { styles } from './styles';

import StudentList from '../../components/StudentList';

import students from '../../../assets/data/students.json';
import { Submit } from '../../components/Button/Button';

//* DASHBOARD CODE \\
const DashBoard = () => {
  return (

    <FlatList
      style={styles.page}
      data={students}
      renderItem={({ item }) => <StudentList student={item} />}
      ListFooterComponent={Submit}
    />
  );
};

export default DashBoard;

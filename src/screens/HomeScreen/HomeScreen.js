import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { styles } from './styles';
import dayjs from 'dayjs';


const Home = () => {

  return (
    <View style={styles.page}>
      <Image
        style={styles.logo}
        source={require('../../../assets/images/GatherooLogo.png')}
        resizeMode='center'
      />
      <View style={styles.section}>
        <Text style={styles.user}>Rogelio Zamora</Text>
        <Text style={styles.date}>{dayjs().format("dddd, DD, MMMM")}</Text>
        <Text style={styles.time}>{dayjs().format("hh:mm")} AM</Text>
        <Text style={styles.info}>Scott Dual Language Elementary</Text>
      </View>
      <View style={styles.body}>
        <Text>DASHBOARD INFORMATION</Text>
        <Pressable style={styles.button}>
          <Text>PICK UP</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Home;
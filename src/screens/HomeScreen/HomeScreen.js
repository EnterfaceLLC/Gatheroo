//* REACT IMPORTS \\
import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable } from 'react-native';

//* NAVIGATION IMPORTS \\
import { useNavigation } from '@react-navigation/native';

//* STYLE, THEME, ICONS IMPORTS \\
import { styles } from './styles';
import { colors } from '../../../theme/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//* DAY JS IMPORTS \\
import dayjs from 'dayjs';

//* HOME SCREEN CODE \\
const Home = () => {

  const [date, setDate] = useState(dayjs());

  const navigate = useNavigation();

  const Press = () => {
    navigate.navigate('Dashboard')
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(dayjs());
    }, 1000 * 1);

    return () => clearInterval(interval);
  }, [])

  return (
    <View style={styles.page}>
      <View style={styles.header}>

        <View style={styles.section}>
          <Text style={styles.user}>Rogelio Zamora</Text>
          <Text style={styles.date}>{date.format("dddd, DD, MMMM")}</Text>
          <Text style={styles.time}>{date.format("h:mm:ss")}</Text>
        </View>

        <Image
          style={styles.logo}
          source={require('../../../assets/images/GatherooLogo.png')}
          resizeMode='center'
        />
      </View>

      <View style={styles.body}>
        <Text style={styles.school}>Scott Dual Language Elementary</Text>
        <View style={styles.card}>
          <Image
            source={require('../../../assets/images/Scott-Dual-Language-Magnet-logo.png')}
            resizeMode='contain'
            style={styles.scottLogo}
          />
          <Text>Dashboard Information Here</Text>
          <Pressable style={styles.button} onPress={Press}>
            <Text style={styles.buttonTxt}>PICK UP</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.links}>
          <MaterialCommunityIcons
            name="facebook"
            size={50}
            color={colors.accent}
          />
          <Text style={styles.linkTxt}>FaceBook</Text>
        </View>

        <View style={styles.links}>
          <MaterialCommunityIcons
            name="google-maps"
            size={50}
            color={colors.accent}
          />
          <Text style={styles.linkTxt}>Google Map</Text>
        </View>

        <View style={styles.links}>
          <MaterialCommunityIcons
            name="school"
            size={50}
            color={colors.accent}
          />
          <Text style={styles.linkTxt}>Topeka 501</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;

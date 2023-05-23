import {Dimensions, Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {header, logo} from '../../assets';
import Balance from '../../components/Balance';

const Home = () => {
  return (
    <View style={styles.homeWrapper}>
      <ImageBackground source={header} style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome, </Text>
          <Text style={styles.username}>refaldybagas</Text>
        </View>
      </ImageBackground>
      <Balance />
    </View>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  homeWrapper: {
    flex: 1,
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.26,
    paddingHorizontal: 25,
    paddingTop: 10,
  },
  logo: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.06,
  },
  welcomeContainer: {
    marginTop: windowHeight * 0.016,
  },
  welcomeText: {
    fontSize: 21,
    fontFamily: 'TitilliumWeb-Regular',
  },
  username: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
  },
});

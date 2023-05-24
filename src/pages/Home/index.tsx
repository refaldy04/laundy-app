import {Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {header, logo} from '../../assets';
import Balance from '../../components/Balance';
import ButtonIcon from '../../components/ButtonIcon';
import {COLOR_GRAY} from '../../utils/constant';
import ActiveOrders from '../../components/ActiveOrders';

const Home = () => {
  return (
    <View style={styles.homeWrapper}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={header} style={styles.header}>
          <Image source={logo} style={styles.logo} />
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Welcome, </Text>
            <Text style={styles.username}>refaldybagas</Text>
          </View>
        </ImageBackground>
        <Balance />
        <View style={styles.services}>
          <Text style={styles.label}>Services</Text>
          <View style={styles.servicesIcon}>
            <ButtonIcon title="By Weight" type="services" />
            <ButtonIcon title="By Item" type="services" />
            <ButtonIcon title="VIP" type="services" />
            <ButtonIcon title="Carpet" type="services" />
            <ButtonIcon title="Ironing Only" type="services" />
            <ButtonIcon title="Express" type="services" />
          </View>
        </View>
        <View style={styles.activeOrders}>
          <Text style={styles.label}>Orders List</Text>
          <ActiveOrders orderId="Pesanan No. 0002142" status="Complete" />
          <ActiveOrders orderId="Pesanan No. 0002141" status="Orders in Process" />
          <ActiveOrders orderId="Pesanan No. 0002140" status="Complete" />
          <ActiveOrders orderId="Pesanan No. 0002139" status="Orders in Process" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  homeWrapper: {
    flex: 1,
    backgroundColor: 'white',
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
  services: {
    paddingHorizontal: 25,
    paddingTop: 15,
  },
  label: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
  },
  servicesIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  activeOrders: {
    paddingHorizontal: 25,
    paddingTop: 15,
    backgroundColor: COLOR_GRAY,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});

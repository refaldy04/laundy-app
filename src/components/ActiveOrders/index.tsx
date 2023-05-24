import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {WashingMachine} from '../../assets';
import {COLOR_PRIMARY, COLOR_WARNING} from '../../utils/constant';

interface activeOrdersProps {
  orderId: string;
  status: string;
}

const conditionalstyling = (status: string) =>
  StyleSheet.create({
    status: {
      fontSize: 14,
      fontFamily: 'TitilliumWeb-Light',
      color: status === 'Complete' ? COLOR_PRIMARY : COLOR_WARNING,
    },
  });

const ActiveOrders = ({orderId, status}: activeOrdersProps) => {
  const statusStyling = conditionalstyling(status);
  return (
    <TouchableOpacity style={styles.container}>
      <WashingMachine />
      <View style={styles.textWrapper}>
        <Text style={styles.orderId}>{orderId}</Text>
        <Text style={statusStyling.status}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ActiveOrders;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    padding: 17,
    backgroundColor: 'white',
    marginVertical: windowHeight * 0.02,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  textWrapper: {
    marginLeft: windowWidth * 0.02,
  },
  orderId: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-SemiBold',
  },
  status: {
    fontSize: 14,
    fontFamily: 'TitilliumWeb-Light',
    color: COLOR_PRIMARY,
  },
});

import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLOR_PRIMARY} from '../../utils/constant';
import ButtonIcon from '../ButtonIcon';

const Balance = () => {
  return (
    <View style={styles.container}>
      <View style={styles.balanceInformation}>
        <View style={styles.text}>
          <Text style={styles.balanceLabel}>Balance :</Text>
          <Text style={styles.balanceValue}>Rp. 100.000</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.pointLabel}>Antar Point :</Text>
          <Text style={styles.pointValue}>100 points</Text>
        </View>
      </View>

      <View style={styles.actionButtons}>
        <ButtonIcon title={'Add Saldo'} />
        <ButtonIcon title={'Add Point'} />
      </View>
    </View>
  );
};

export default Balance;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    marginHorizontal: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginTop: windowHeight * -0.045,
    flexDirection: 'row',
    gap: 8,
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  balanceInformation: {
    width: '60%',
  },
  balanceLabel: {
    fontSize: 16,
    fontFamily: 'TitilliumWeb-Regular',
  },
  balanceValue: {fontSize: 16, fontFamily: 'TitilliumWeb-Bold'},
  pointLabel: {fontSize: 12, fontFamily: 'TitilliumWeb-Regular'},
  pointValue: {fontSize: 12, fontFamily: 'TitilliumWeb-Bold', color: COLOR_PRIMARY},
  actionButtons: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    gap: 6,
  },
});

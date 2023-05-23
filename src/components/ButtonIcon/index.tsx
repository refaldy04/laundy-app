import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Cash, Point} from '../../assets';
import {COLOR_FADE_PRIMARY} from '../../utils/constant';

interface ButtonIconProps {
  title: string;
}

const ButtonIcon = ({title}: ButtonIconProps) => {
  const Icon = () => {
    if (title === 'Add Saldo') return <Cash />;
    return <Point />;
  };
  return (
    <TouchableOpacity>
      <View style={styles.icon}>
        <Icon />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  icon: {
    backgroundColor: COLOR_FADE_PRIMARY,
    padding: 7,
    borderRadius: 10,
  },
  text: {
    fontSize: 10,
    fontFamily: 'TitilliumWeb-Regular',
    textAlign: 'center',
  },
});

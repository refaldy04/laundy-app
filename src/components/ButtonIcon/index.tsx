import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Cash, Point, Clothes, Dress, Iron, Laundry, Scale, Truck} from '../../assets';
import {COLOR_FADE_PRIMARY} from '../../utils/constant';

interface ButtonIconProps {
  title: string;
  type: string;
}

const conditionalstyling = (type: string) =>
  StyleSheet.create({
    iconContainer: {
      marginBottom: 12,
    },
    icon: {
      backgroundColor: COLOR_FADE_PRIMARY,
      padding: type === 'services' ? 12 : 7,
      borderRadius: 10,
    },
  });

const ButtonIcon = ({title, type}: ButtonIconProps) => {
  const Icon = () => {
    if (title === 'Add Saldo') return <Cash />;
    if (title === 'By Weight') return <Scale />;
    if (title === 'By Item') return <Clothes />;
    if (title === 'VIP') return <Dress />;
    if (title === 'Carpet') return <Laundry />;
    if (title === 'Ironing Only') return <Iron />;
    if (title === 'Express') return <Truck />;
    return <Point />;
  };

  const iconStyle = conditionalstyling(type);
  return (
    <TouchableOpacity style={iconStyle.iconContainer}>
      <View style={iconStyle.icon}>
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

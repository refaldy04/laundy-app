import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {HomeActive, HomeNotActive, OrdersActive, OrdersNotActive, AccountActive, AccountNotActive} from '../../assets';
import {COLOR_PRIMARY, COLOR_SECONDARY} from '../../utils/constant';

interface TabItemProps {
  isFocused: boolean;
  onPress: () => void;
  onLongPress: () => void;
  label: string;
}

const conditionalstyling = (isFocused: boolean) =>
  StyleSheet.create({
    text: {
      fontSize: 13,
      marginTop: 8,
      color: isFocused ? COLOR_PRIMARY : COLOR_SECONDARY,
    },
  });

const TabItem: React.FC<TabItemProps> = ({isFocused, onPress, onLongPress, label}) => {
  const Item = () => {
    if (label === 'Home') {
      return isFocused ? <HomeActive /> : <HomeNotActive />;
    }
    if (label === 'Orders') {
      return isFocused ? <OrdersActive /> : <OrdersNotActive />;
    }
    if (label === 'Account') {
      return isFocused ? <AccountActive /> : <AccountNotActive />;
    }
    return <HomeActive />;
  };

  const textStyle = conditionalstyling(isFocused);
  return (
    <TouchableOpacity
      accessibilityState={isFocused ? {selected: true} : {}}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Item />
      <Text style={textStyle.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontSize: 13,
    marginTop: 8,
  },
});

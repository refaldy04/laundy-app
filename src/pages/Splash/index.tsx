import {Image, ImageBackground, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../../routers/types';
import {logo, splashBackground} from '../../assets';

const Splash = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <ImageBackground source={splashBackground} style={styles.background}>
      <Image source={logo} style={styles.logo} />
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 222,
    height: 105,
  },
});

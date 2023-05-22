import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type HomeStackNavigatorParamList = {
  Splash: undefined;
  MainApp: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<HomeStackNavigatorParamList, 'MainApp'>;

export type BottomTabNavigatorParamList = {
  Home: undefined;
  Orders: undefined;
  Account: undefined;
};

export type BottomTabNavigationProp = NativeStackNavigationProp<BottomTabNavigatorParamList>;

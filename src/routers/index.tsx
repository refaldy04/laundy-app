import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Splash, Orders, Account} from '../pages';
import {BottomTabNavigatorParamList, HomeStackNavigatorParamList} from './types';
import BottomNavigator from '../components/BottomNavigator';

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();
const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false, title: 'Home'}} />
      <Tab.Screen name="Orders" component={Orders} options={{headerShown: false, title: 'Orders'}} />
      <Tab.Screen name="Account" component={Account} options={{headerShown: false, title: 'Account'}} />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
      <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default Routes;

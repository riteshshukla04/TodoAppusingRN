import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/login';
import SignUpScreen from '../screens/signup';

const Drawer = createDrawerNavigator();
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const DrawerNavigator=()=>{
  return (
  
        <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={LoginScreen} />
        <Drawer.Screen name="Notifications" component={SignUpScreen} />
        </Drawer.Navigator>
  
      
    
  );
}
export default DrawerNavigator;
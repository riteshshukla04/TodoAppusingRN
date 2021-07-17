import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskList from '../components/task';
import { LOGIN, SIGNUP, TASK } from '../routes';
import LoginScreen from '../screens/login';
import SignUpScreen from '../screens/signup';
import DrawerNavigator from './DrawerNavigator';
import ViewTasks from '../screens/task';
import { firebase } from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';


const Stack = createStackNavigator();


const  TaskNavigator=()=> {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={LOGIN} screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name={LOGIN} component={LoginScreen} />
        <Stack.Screen name={SIGNUP} component={SignUpScreen} />
        <Stack.Screen name={TASK} component={ViewTasks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default TaskNavigator;
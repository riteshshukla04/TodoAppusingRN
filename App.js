/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,TextInput,TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import TaskNavigator from './src/navigator/tasknav';
import TaskList from './src/components/task';

import { Header } from 'react-native-elements';
import ViewTasks from './src/screens/task';
import LoginScreen from './src/screens/login';
import SignUpScreen from './src/screens/signup';
import DrawerNavigator from './src/navigator/DrawerNavigator';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import ProgressDialog from './src/screens/progress';
const App: () => Node = () => {

  
   var user=auth().currentUser;
  console.log("App:-",user); 
  return (
     
        <TaskNavigator></TaskNavigator>
       );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

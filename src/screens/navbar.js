import 'react-native-gesture-handler';
 import React, { useState } from 'react';
 import auth from '@react-native-firebase/auth';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   TouchableOpacity,
   useColorScheme,
   View,
   Image,
   TextInput,
   KeyboardAvoidingView,
 } from 'react-native';
 

 
import NavigationBar from 'react-native-navbar';
const Navbar=(props)=>{

  return(
    <View styles={{flex:0.4}}>
      <Text style={styles.Heading}>Hello</Text>
  </View>


  );
  
}



const styles=StyleSheet.create({
  Heading:{
    color:"black",
    alignItems:"center",
    alignContent:"center",
    
  }
})
export default Navbar;


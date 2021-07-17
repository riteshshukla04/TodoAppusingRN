
 import 'react-native-gesture-handler';
 import React from 'react';

 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   TouchableOpacity,
   useColorScheme,
   View,
 } from 'react-native';
 
import { Button } from 'react-native-elements';
 
 
 const TaskList= (props) => {
   
 
   return (
    
      <View style={styles.item}>
      <View style={styles.itemLeft}>
          
          <View style={styles.square}></View>
         <Text style={styles.TextItem}>{props.text}</Text>      
      </View>
      {props.completed ? <Text style={styles.completed}>COMPLETED</Text> : <Text>PENDING</Text>} 
      
      </View>
  
   );
 };
 
 const styles = StyleSheet.create({
   

   
    item:{
        backgroundColor:'#FFF',
        padding:15,
        borderRadius:115,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:10,
        marginBottom:15,
        marginLeft:10,
        marginRight:10,
        borderWidth:1,
        

   },
   itemLeft:{
       flexDirection:'row',
       alignItems:'center',
       flexWrap:'wrap',
   },
   square:{
       width:24,
       height:24,
       backgroundColor:'blue',
       opacity:0.4,
       marginRight:15,
   },
   TextItem:{
       maxWidth:'80%',
       fontWeight:"bold",
       fontStyle:"normal",
       fontFamily:"ABeeZee",
       lineHeight:21.28,
       fontSize:18,

       
   },
   circular:{
    fontWeight:"400",
    fontStyle:"normal",
    fontFamily:"ABeeZee",
    lineHeight:21.28,
    fontSize:18,
       
       
   },
   completed:{
     color:"red",
     fontWeight:"bold",

   }



 });
 
 export default TaskList;
 
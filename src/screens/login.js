import 'react-native-gesture-handler';
 import React, { useState } from 'react';
 import auth, { firebase } from '@react-native-firebase/auth';
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
 
import { Button } from 'react-native-elements';
import { Header } from 'react-native-elements';
import TaskList from '../components/task';
import Navbar from './navbar';
import { SIGNUP, TASK } from '../routes';
import {useNavigation} from '@react-navigation/native';
import { LOGIN } from '../../../../Assignment 2Final/FirstApp/src/actions/type';
import ViewTasks from './task';


 const LoginScreen= () => {
    const [loading,SetLoading]=useState(false);
    const [isLoggedin,SetLoggedin]=useState(false);
    const [email,Setemail]=useState("");
    const [password,Setpassword]=useState("");
    const [errors,setErrors]=useState("");
    const {navigate} = useNavigation();
    
   
    
    const LoginOnFirebase=()=>{
        console.log(loading);
        SetLoading((loading)=>(!loading));
        console.log(loading);
        if (email && password){
            auth().signInWithEmailAndPassword(email,password).then(()=>{

                navigate(TASK);
                SetLoading((loading)=>(!loading));
                
    
            }
                
            ).catch(
                errors=>{
                    setErrors(errors=>("Username or Password Incorrect"))
                    SetLoading((loading)=>(!loading));
                }
                
                )

        }
        else{
            setErrors(errors=>("Please fill all the fields"))
                    SetLoading((loading)=>(!loading));

        }
       
    }
   return( 
   

<>



<View style={styles.container}>
    
    <Image style={styles.Image} source={require("../Assests/logo.png")}></Image>
   <View style={styles.inputView}>
       <TextInput style={styles.input} placeholder="Email" textAlign={'center'} value={email} onChangeText={(email)=>Setemail(email)} placeholderTextColor="#003f5c"></TextInput>
     
   </View>
   <View style={styles.inputView}>
       <TextInput style={styles.input} placeholder="Password" textAlign={'center'} secureTextEntry={true} placeholderTextColor="#003f5c" value ={password} placeholderTextColor="#003f5c"  onChangeText={(password)=>Setpassword(password)}></TextInput>    
   </View>
   <TouchableOpacity>
       <Text style={styles.signupbtn} onPress={()=>navigate(SIGNUP)}>Dont Have an Account? Sign Up</Text>
   </TouchableOpacity>
   <TouchableOpacity style={styles.submit}>
   <Button type="clear"  title="Login"  onPress={()=>LoginOnFirebase()} titleStyle={styles.textsubmit} loading={loading} loadingStyle={styles.loading} loadingProps={{ color: 'white'}} ></Button>
   </TouchableOpacity>
       <View style={styles.error}>
       <Text style={styles.errortext}>{errors}</Text>
       </View>
   
   </View>

</>
    

   
 
   
    );
 };


 const styles=StyleSheet.create({

    container:{
        flex:8,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center",
    },
    Image:{
        marginBottom:65,
        height:200,
        width:200,

    },
    inputView:{
        backgroundColor:"#FFC0CB",
        borderRadius:30,
        width:"70%",
        height:45,
        marginBottom:20,
        alignItems:'center',
    },

    input:{
        height:50,
        flex:1,
        padding:10,
        marginLeft:20,
        alignItems:"center",
        alignContent:"center",
        textAlign:"center",
        justifyContent:"center",

    },
    signupbtn:{
        height:30,
        marginBottom:30,
        color:"blue",
    },
    submit:{
        width:150,
        borderRadius:25,
        height:50,
        alignItems:"center",
        
        backgroundColor:"#FF1493",
        color:"white",
    },
    textsubmit:{
        color:"white",
        marginTop:5,
    },
    error:{
        
        position:"absolute",
        bottom:50,
        
        
    },
    errortext:{
        fontSize:18,
        color:"red",
        fontStyle:"italic",
    },
    loading:{
        
        marginTop:5,
        color:"white",
        
    }
})
 
 export default LoginScreen;
 
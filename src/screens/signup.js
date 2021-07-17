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
 import {useNavigation} from '@react-navigation/native';
import { Button,colors,ThemeProvider } from 'react-native-elements';
import { Header } from 'react-native-elements';
import TaskList from '../components/task';
import { LOGIN } from '../routes';
import firestore from '@react-native-firebase/firestore';
 
 const SignUpScreen= () => {
    const [loading,SetLoading]=useState(false);
    const [email,Setemail]=useState("");
    const [password1,Setpassword1]=useState("");
    const [password2,Setpassword2]=useState("");
    const [errors,setErrors]=useState("");
    const {navigate} = useNavigation();
    console.log(email,password1,password2);
    const RegisteronFirebase=()=>{
        SetLoading((loading)=>(!loading));

        if (password1!=password2){
            setErrors((errors)=>("Password doesnt match"));
            SetLoading((loading)=>(!loading));


        }
        else{
            auth().createUserWithEmailAndPassword(email,password2).then(()=>
            {
                
                firestore().collection("Tasks").doc(email).set({
                    tasklists:[],
                  });
                navigate(LOGIN);
                
            }
                
            ).catch(
                errors=>{
                    console.log(errors);
                    setErrors((errors)=>("User already Exists"))
                    SetLoading((loading)=>(!loading))
                }
            )
        }
    }

   return( <View style={styles.container}>
     <Image style={styles.Image} source={require("../Assests/logo.png")}></Image>
    <View style={styles.inputView}>
        <TextInput style={styles.input} placeholder="Email" textAlign={'center'}  value ={email} onChangeText={(email)=>Setemail(email)} placeholderTextColor="#003f5c"></TextInput>
      
    </View>
    <View style={styles.inputView}>
        <TextInput style={styles.input} placeholder="Password"  textAlign={'center'} secureTextEntry={true} value ={password1} placeholderTextColor="#003f5c"  onChangeText={(password1)=>Setpassword1(password1)}></TextInput>
      
    </View>
    <View style={styles.inputView}>
        <TextInput style={styles.input} placeholder="Re enter Password" textAlign={'center'} secureTextEntry={true}  value ={password2}  placeholderTextColor="#003f5c" onChangeText={(password2)=>Setpassword2(password2)}></TextInput>
      
    </View>
    <TouchableOpacity>
        <Text style={styles.signupbtn} onPress={()=>navigate(LOGIN)}>Already Have an Account? Login</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.submit} disabled={loading}>
        
        <Button type="clear" onPress={()=>RegisteronFirebase()} title="Sign Up" titleStyle={styles.textsubmit} loading={loading} loadingStyle={styles.loading} loadingProps={{ color: 'white'}} ></Button>
    </TouchableOpacity>
        <View style={styles.error}>
        <Text style={styles.errortext}>{errors}</Text>
        </View>
    
    </View>);
 };


 const styles=StyleSheet.create({

    container:{
        flex:1,
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
        alignItems:"center",
     
    },
    loading:{
        
        marginTop:5,
        color:"white",
        
    }
})
 
 export default SignUpScreen;
 
import 'react-native-gesture-handler';
 import React,{ useEffect, useState } from 'react';
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
   TextInput,
   KeyboardAvoidingView,
 } from 'react-native';
 import firestore from '@react-native-firebase/firestore';
import { Button } from 'react-native-elements';
import { Header } from 'react-native-elements';
import TaskList from '../components/task';
import { LOGIN } from '../routes';
import {useNavigation} from '@react-navigation/native';
import ProgressDialog from './progress';
import { Icon } from 'react-native-elements'

 const ViewTasks= () => {
    
  
  const [task,setTask]=useState();
  
  const [Completelist,setCompletelist]=useState([]);
  const {navigate} = useNavigation();
  const [tasklist,setTasklist]=useState([]);
  const [loading,Setloading]=useState(false);
  var user=auth().currentUser;
  
    firebase.auth().onAuthStateChanged(user=>{
      if (user){
        firestore().collection("Tasks").doc(user.email).get().then(data=>{
          setTasklist(data._data.tasklists);
        }).catch(err=>{
          navigate(LOGIN);
        })
      }
      else{
        navigate(LOGIN);
      }
    })
  
 

  
  
  
  
  
  const completeList=(index)=>{
    let s=[...Completelist];
    s[index]=true;
    setCompletelist(s)
    console.log(Completelist);

  }

  const delay = ms => new Promise(res => setTimeout(res, ms));
  const  addTask=async ()=>{
    Setloading((loading)=>(!loading)); 
    
    setTasklist([...tasklist,task]);
    setCompletelist([...Completelist,false]);
    await firestore().collection("Tasks").doc(user.email).update({
      tasklists:firebase.firestore.FieldValue.arrayUnion(task)
    });
    Setloading((loading)=>(!loading)); 

          
    
  
    
    setTask(null);
  }
  const deleteTask=async(index)=>{
    Setloading((loading)=>(!loading)); 
    
    let s=[...tasklist];
    let t=[...Completelist];
    
    setTasklist(s);
    setCompletelist(t);
    s.splice(index, 1);
    t.splice(index, 1);
    firebase.auth().onAuthStateChanged(

    )
    await firestore().collection("Tasks").doc(user.email).set({
      tasklists:s
    }).catch(error=>{
      console.log(error);
    });
    Setloading((loading)=>(!loading)); 
    
  }
  const Logout=()=>{
    firebase.auth().signOut();
    
  }
  
  
   return (
   
    <View style={styles.container}>
        <Header
  centerComponent={{ text: 'View Taks', style: { color: '#fff' } }}
  rightComponent={<Icon name='sign-out'
  type='font-awesome'
  color='white'
  onPress={()=>Logout()}
  ></Icon>}

/>
{loading ? <ProgressDialog></ProgressDialog> :<></> }
<View  style={styles.dashboard}>

<Text style={styles.completecount}  >Tasks Completed:- {Completelist.filter(Boolean).length}</Text>

<Text   style={styles.completecount}>Total Tasks:- {tasklist.length}</Text>


</View>


    
      <View style={styles.tasksWrapper}>
     { tasklist.map((item, index) => {
        return(<TouchableOpacity key={index} > 
        <TouchableOpacity onPress={()=>deleteTask(index)}><TaskList text={item} completed={Completelist[index]}></TaskList></TouchableOpacity>
        <Text onPress={()=>completeList(index)} >Mark as completed</Text>
        </TouchableOpacity>
        
        )



     })
    }
             
      
      </View>
      <KeyboardAvoidingView  style={styles.writeTaskWrapper}>
      <TextInput style={styles.input} value={task} onChangeText={text=>setTask(text)}></TextInput>
      <TouchableOpacity onPress={() => addTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
          </TouchableOpacity>
      </KeyboardAvoidingView>




    </View>
    
  
    
  
   );
 };
 const styles=StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  dashboard:{
    backgroundColor:"white",
    borderWidth:2,
    marginTop:20,
    padding:15,
    marginLeft:10,
    marginRight:10,
    borderRadius:25,
    height:80,
  },
  completecount:{
    fontSize:15,
    color:"blue",
    padding:2,
  },
  logout:{
    position:"absolute",
    right:100,
    top:45,
    backgroundColor:"blue",
    
  }



 })

 
 export default ViewTasks;
 
import { Alert, Pressable, StyleSheet, Text, View, } from 'react-native'
import React, { useState,useContext } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import {login,signin} from "../util/auth"
import { AuthenticationContext } from '@/contex/auth'
import Loading from './Loading'
import { FadeIn } from 'react-native-reanimated'

const LoginForm = () => {
    const auth_context = useContext(AuthenticationContext);
    
    const [isLoading,setIsLoading] = useState<boolean>()
    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const handleEmail = (email:string)=>{
        setEmail(email);
    }
    const handlePassword = (password:string)=>{
        setPassword(password);
    }
    async function handleLogin(){
        console.log(email + " "  + password);
        setIsLoading(true) 
        try{    
              
            const response = await login(email,password)
            console.log(response);
            auth_context.setToken(response.idToken);
            

        }
        catch(err)
        {
            console.log(err);
            Alert.alert("Login Failed", "Please check your email and password.");
        }
        setIsLoading(false)
        setEmail("");
        setPassword("");
    }
    async function handleSignin(){
        console.log(email + " "  + password);
        setIsLoading(true)
        try{
                  
            const response = await signin(email,password)
            console.log(response);
            auth_context.setToken(response.idToken);
            

        }
        catch(err)
        {
            console.log(err);
            Alert.alert("Signin Failed", "Please check your email and password.");
        }
        setIsLoading(false)
        
        setEmail("");
        setPassword("");
    }

  return (
   <View style={styles.mainContainer}>
    {isLoading?<Loading/>:
        <View style={{backgroundColor:"lightblue",width:"90%",padding:10,borderRadius:20,}}>
            <TextInput style={styles.form} placeholder='Please Enter Your Email' placeholderTextColor="black" onChangeText={handleEmail} value={email}/>
            <TextInput style={styles.form} placeholder='Please Enter Your Email' onChangeText={handlePassword} placeholderTextColor="black"  value={password}/>
            <View style={{flexDirection:"row",width:"100%",justifyContent:"center"}}>
            <Pressable style={{justifyContent:"center",alignItems:"center"}} onPress={handleLogin}>
                
                <Text style={styles.Pressable}>Login</Text>
                
            </Pressable>
            <Pressable style={{justifyContent:"center",alignItems:"center"}} onPress={handleSignin}>
                
                
                <Text style={styles.Pressable}>Sign-in</Text>
            </Pressable>
            </View>
            </View>}
            </View>
        
      
         
  )
}

export default LoginForm

const styles = StyleSheet.create({
    mainContainer:{
        flex:3,
        backgroundColor:"",
        marginTop:10,
        marginBottom:10,
        alignItems:"center"
    
    
    },
    form:{
        backgroundColor:"white",
        padding:15,
        borderRadius:20,
        margin:10,
        color:"black"


    },
    Pressable:{
        backgroundColor:"#89CFF0",
        textAlign:"center",
        borderRadius:15,
        padding:15,
        marginLeft:10,
        marginTop:10


    }
})
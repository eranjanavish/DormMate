import { StyleSheet, Text, View,TextInput, Pressable,TextInputProps } from 'react-native'
import React, { useState } from 'react'

interface props{
    lable:string;
    placeholder?:string;
    textconfig?:TextInputProps;
    func?:(bath:string)=>void;
}


const InputForm = ({lable,placeholder,textconfig}:props) => {
    

  return (
    <View style={styles.mainContainer}>
            <Text style={styles.lable}>{lable} : </Text>
            <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor="#868686" multiline={false} {...textconfig} ></TextInput>
    </View>
  )
}

const Number = ({lable,textconfig}:props) => {
    return (
      <View style={{marginVertical:10}}>
                <View style={{flexDirection:"column"}}>
                  <Text style={styles.lable}>{lable} : </Text>
                  <TextInput style={styles.numberInput} placeholder="Enter Amount" placeholderTextColor="#868686" keyboardType='numeric' {...textconfig} ></TextInput>
                </View>
        </View>
    )
  }
  const YesNo = ({lable,func}:props) => {
    const [bool,setBool] = useState(true);
    const changeYesNo = ()=>{
        setBool(!bool);
    }
    return (
      <View style={{marginVertical:10}}>
                <View style={{flexDirection:"row"}}>
                  <Text style={styles.lable}>{lable} : </Text>
                  <Pressable onPress={changeYesNo} onPressOut={()=>func?.(!bool?"Available":"Not Available")}><Text style={styles.numberInput}> {bool?"Yes":"No"} </Text></Pressable>
                </View>
        </View>
    )
  }

    

export {InputForm,Number,YesNo};

const styles = StyleSheet.create({
    mainContainer:{
        marginVertical:5

    },
    lable:{
        paddingLeft:5,
        fontSize:18,
        fontWeight:600,
      
      },
      input:{
          backgroundColor: "white",
          padding:4,
          marginVertical:10,
          fontSize: 15,
          fontWeight:600,
          borderColor:"black",
          borderWidth:0,
          borderRadius: 50,
          textAlign:"center",
          shadowColor:"black",
          shadowOffset:{width:2,height:5},
          shadowOpacity:0.25,
          height:40,
      },
      numberInput:{
        fontSize:18,
        borderColor:"black",
        borderBottomWidth:1,
        marginTop:8
      }

})
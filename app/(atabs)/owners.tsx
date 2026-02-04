import { Button, StyleSheet, Text, Pressable, View,ScrollView,Image,KeyboardAvoidingView,Alert,useWindowDimensions } from 'react-native'
import { useState,useContext, use } from 'react';
import {InputForm,Number,YesNo} from '@/components/inputForm';
import {store,getData} from "../../util/api";
import { Validate } from '@/util/validate';
import { DataDownload } from '@/contex/dataImport';
import Loading from '@/components/Loading';
import Error from '@/components/Error';
import Floatinglist from '@/components/Floatinglist';
import { universities } from '@/assets/Data/data';
import LoginForm from '@/components/LoginForm';
import { AuthenticationContext } from '@/contex/auth';



interface OwnerForm {
  id:string
  name: string;
  phone: string;
  address: string;
  total: string;
  available: string;
  bathroom: string;
  price2: string;
  price8: string;
  price16: string;
  picThumnail: string;
  searchid: string;
  picList: string[];
}
const start = {
  id:"",
  name:"",
    phone:"",
    address:"",
    total:"",
    available:"",
    bathroom:"",
    price2:"",
    price8:"",
    price16:"",
    picThumnail:"",
    searchid:"",
    picList:[]
}



const owners = () => {

  const {width} = useWindowDimensions();
  const dynamic_width = width>800?width*0.4:width*0.9;
  const dynamic_height = width>600?400:200;
  const boardingData = useContext(DataDownload)
  const [fetching,setFetching] = useState<boolean>();
  const [error,setError] = useState<boolean>();

  const [form,setForm] = useState<OwnerForm>({ 
    id:"",
    name:"",
    phone:"",
    address:"",
    total:"",
    available:"",
    bathroom:"",
    price2:"",
    price8:"",
    price16:"",
    picThumnail:"",
    searchid:"",
    picList:[]
  });

  const addPic = (url: string) => {
    if (!url.trim()) return;
  
    setForm(prev => ({
      ...prev,
      picList: [...prev.picList, url]
    }));
  };
  const addSearchid = (id: string) => {
  
    setForm(prev => ({
      ...prev,
      searchid: id,
    }));
  };

  const yesNOfunc = (answer: string) => {
    setForm(prev => ({
      ...prev,
      bathroom: answer
    }));
  };

  const change = (key: string) => (enter: string) => {
    setForm(prev => ({
      ...prev,
      [key]: enter
    }));
  };
   async function add(){
    console.log("added");
      const valid = Validate(form);
      if(valid.valid)
        {
          setFetching(true);
          const id = await store(form,login);
          console.log(id)
          if(id)
          {
          const newForm = { ...form, id:id };
          boardingData.addTolist(newForm);
          setForm(start);
          }
          else{
            setError(true)
            console.log("error")
          }
            
          
          
          setFetching(false);
        } 
      else
      {
        Alert.alert(
          'Form Error',
          valid.list.map(alert => `• ${alert}`).join("\n"),
          [
            {
              text: 'Okay',
              style: 'cancel',
            }
          ]
        );
        
      }
  };
  
  {if(fetching)
    return <Loading/>
  }
  {if(error)
    return <Error/>
  }

  const auth_context = useContext(AuthenticationContext)
  const login = auth_context.token;
 
  return (
    
    <View style={styles.main}>
      <View style={[styles.one,{height:dynamic_height}]}>
              <Image source={require("../../assets/owner.jpeg")} style={[styles.image,{width:dynamic_width,}]} resizeMode='cover'/>
      </View>
    <KeyboardAvoidingView style={{flex:3}} behavior="padding">
{login?<View style={[styles.mainContainer]}>
      <ScrollView style={{flex:1}} contentContainerStyle={{}}>
        <View style={[styles.form,{justifyContent:"center",alignContent:"center",width:dynamic_width}]}>
          <InputForm lable='Name of the Boarding Place' placeholder='Enter Name' textconfig={{onChangeText:change("name"),value:form.name}}/>
          <InputForm lable='Enter the Address' placeholder='Enter Address' textconfig={{onChangeText:change("address"),value:form.address}}/>
          <InputForm lable='Contact Number' placeholder='Enter Contact Number' textconfig={{onChangeText:change("phone"),value:form.phone,keyboardType:"numeric"}}/>
          <Floatinglist list={universities} func={addSearchid} textconfig={{style:styles.input}}/>     
          <View style={styles.roominfo}>
          <Number lable='Number of Total Room'textconfig={{onChangeText:change("total"),value:form.total}}/>
          <Number lable='Number of Available Room' textconfig={{onChangeText:change("available"),value:form.available}}/>
          <YesNo lable="Attached Bathroom Available" func={yesNOfunc}/>
          </View>
          <View style={styles.roominfo}>
            <Text style={{textAlign:'center',fontSize:18,fontWeight:600,margin:10}}>Standard Prices</Text>
          <Number lable='2 persons per room' textconfig={{onChangeText:change("price2"),value:form.price2}}/>
          <Number lable='8 persons per room' textconfig={{onChangeText:change("price8"),value:form.price8}}/>
          <Number lable='16 persons per room' textconfig={{onChangeText:change("price16"),value:form.price16}}/>
          
          </View>
          <View style={styles.roominfo}>
          <InputForm lable='Thumbnail Image URL' placeholder='Enter URL'textconfig={{onChangeText:change("picThumnail"),value:form.picThumnail}}/>
    
          <InputForm lable='Room Image URL' placeholder='Enter URL'textconfig={{onEndEditing:(e)=>addPic(e.nativeEvent.text)}}/>
          <InputForm lable='Additional Room Image URL' placeholder='Enter URL'textconfig={{onEndEditing:(e)=>addPic(e.nativeEvent.text)}}/>
          <InputForm lable='Additional Room Image URL' placeholder='Enter URL'textconfig={{onEndEditing:(e)=>addPic(e.nativeEvent.text)}}/>
          <Pressable onPress={add}><Text style={styles.button}>Add Listing</Text></Pressable>
          </View>
          
        </View>
      </ScrollView>
    </View>:
    <LoginForm/>
    
    
    }
    </KeyboardAvoidingView>
    </View>
      
   
  )
}

export default owners

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:"",
    marginTop:40,
    marginBottom:10


},
  mainContainer:{
    flex:3,
    backgroundColor:"",
    marginTop:10,
    marginBottom:10,
    justifyContent:"center",
    alignItems:"center"


},
one:{
  flex:1,
  backgroundColor:"",
  marginTop:10,
  borderRadius:10,
  justifyContent:"center",
  alignItems:"center"

},
image:{
  width:"100%",
  height:"100%",
  borderRadius:10,
  padding:15

},
form:{
  flex:1,
  marginTop:10,
  margin:20,
  padding:10,
  borderWidth:0,
  borderColor:"#63c5da",
  borderRadius:20,
  backgroundColor:"rgb(173, 216, 230,0.45)",
  

},
roominfo:{
  marginVertical:15,
  borderTopWidth:2,
  borderColor:"#63c5da",
  paddingVertical:10


},
button:{
  fontSize:18,
  backgroundColor:"lightblue",
  padding:8,
  margin:10,
  borderRadius:30,
  shadowColor:"#63c5da",
  shadowOffset:{width:2,height:5},
  shadowOpacity:0.25,
  borderColor:"#63c5da",
  borderWidth:0,
  textAlign:"center",
  height:40,
  
},
input:{
  backgroundColor: "white",
  padding:10, 
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
  height:40}



})
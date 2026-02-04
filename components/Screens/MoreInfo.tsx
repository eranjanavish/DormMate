import { StyleSheet, Text, View,Pressable,Image, ScrollView,Modal } from 'react-native'

import { useState,useContext} from 'react';
import { DataDownload } from '@/contex/dataImport';
import BoardingName from '../BoardingName';
import MorepIc from './MorepIc';
import AntDesign from '@expo/vector-icons/AntDesign';

interface prop{
  id:string;
  func:()=>void;
}

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
  searchId: string;
  picList: string[];
}



const MoreInfo = ({id,func}:prop) => {
  const boardingData = useContext(DataDownload)
  const [modalState,setModalState] = useState<boolean>(false);
      const handleSate = ()=>{
          setModalState(!modalState);
          console.log("pre")
      }
  const item = boardingData.data.find((item:OwnerForm) => item.id === id);
 
  return (
    <View style={styles.mainContainer}>
      <View style={{width:"90%",justifyContent:"flex-start",alignItems:"flex-end"}}>
      <Pressable onPress={()=>func()}><Text style={styles.button}><AntDesign name="close-circle" size={24} color="black" /></Text></Pressable>
      </View>
      
      <View style={styles.one}>
        <ScrollView style={styles.two} showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: "center" }}>
            <Pressable onPress={()=>handleSate()}><Image source={{uri:item.picThumnail.trim() || "https://via.placeholder.com/400"}} style={styles.image} /></Pressable>
          <BoardingName id={id}/>
          
          <View style={styles.details}>
          <Text style={styles.detailheader}>Total Rooms</Text>
          <View style={styles.detailroom}>
              <Text style={styles.detailtext}>Total Rooms: {item.total}</Text>
              <Text style={styles.detailtext}>Available Rooms: {item.available}</Text>    
          </View>
          <Text style={styles.detailtext2}>Attached Bathrooms : {item.bathroom}</Text>
          </View>
          <View style={styles.details}>
          <Text style={styles.detailheader}>Standard Prices</Text>
          <View style={styles.detailprices}>
              <Text style={[styles.detailtext,{margin:5}]}>8 persons per room – LKR {item.price8}</Text>
              <Text style={[styles.detailtext,{margin:5}]}>2 persons per room – LKR {item.price16}</Text>
          </View>
          
          </View>
          <View style={{alignItems:'center'}}><Text style={styles.imageDetailText}>For more details please contact the owner</Text></View>
          

        </ScrollView>
        
      

      </View>
      <Modal
          animationType="fade"
          transparent={true}
          visible={modalState}
          
          ><MorepIc func={handleSate} piclist={item.picList} /></Modal>
    </View>
    
  )
}

export default MoreInfo

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:"",
        marginTop:40,
       
        marginBottom:20,
        alignItems:"center",
        justifyContent:"center",
        width:"100%"
        


    },
    button:{
      fontSize:18,
      
      padding:10,
      marginTop:10,
      borderRadius:30,
      shadowColor:"#e62020",
      shadowOffset:{width:2,height:5},
      shadowOpacity:0,
      borderColor:"#ff2400",
      borderWidth:0,
      textAlign:"center",
      fontWeight:500
  },
  one:{
    flex:1,
    backgroundColor:"#446782",
    margin:10,
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center",
    width:"90%"

  },
  two:{
    flex:1,
    margin:5,
    backgroundColor:"",
    borderRadius:20,
    padding:10,
    width:"100%"

  },
  image: {
    width:365,
    height: 300,
    resizeMode: "cover",
    borderRadius:20,
    padding:10
  },
  
imageDetailText:{
  color:"white", 
  fontSize:16,
  fontWeight:500,
  marginTop:10

},
details:{
  backgroundColor:"white",
  width:"95%",
  flex:1,
  marginTop:20,
  borderRadius:20,
  padding:10,
  alignItems:"center"



},
detailroom:{
  flexDirection:"row",
    justifyContent:"space-around",
    width:"100%",
    marginTop:10

},
detailprices:{
    justifyContent:"space-around",
    width:"100%",
    marginTop:10

},
detailtext:{
  fontSize:18,
  fontWeight:600,
  textAlign:"center",
  marginTop:10
  

},
detailtext2:{
  fontSize:15,
  fontWeight:400,
  textAlign:"center",
  marginTop:20
  

},
detailheader:{
  backgroundColor:"lightblue",
  textAlign:"center",
  fontSize:20,
  fontWeight:500,
  paddingHorizontal:10,
  paddingVertical:4,
  borderRadius:20
}
})
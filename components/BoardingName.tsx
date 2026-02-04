import { StyleSheet, Text, View,Pressable } from 'react-native'
import {useContext} from 'react'
import { favBoards } from '@/contex/favourites';
import Entypo from '@expo/vector-icons/Entypo'
import FontAwesome from '@expo/vector-icons/FontAwesome';

import {data} from '@/assets/Data/data';
import { DataDownload } from '@/contex/dataImport';

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

const BoardingName = ({id}:{id:string}) => {
  const boardingData = useContext(DataDownload)
    const favStar = useContext(favBoards);
          
          const isFav = favStar.favBoardings.includes(id);
      
          const pressHandle = ()=>{
              console.log(favStar.favBoardings);
              if(isFav){
                  favStar.remBoarding(id);
              }
              else{
                  favStar.addBoarding(id);
              }
          }
    const item = boardingData.data.find((item:OwnerForm) => item.id === id);

        
  return (
    <View>
      <View style={styles.ImageCardNamecontainer}>
              <Text style={styles.ImageCardName}>{item.name}</Text>
              <Pressable onPress={pressHandle}>
                  <Text style={styles.icon}><FontAwesome name={isFav?"star":"star-o"} size={24} color="white" /></Text>
              </Pressable>
          </View>
          <View style={styles.ImageCardDetailcontainer}>
              <Text style={styles.imageDetailText}><Entypo name="old-phone" size={20} color="white" /> : {item.phone}</Text>
              <View style={[styles.ImageCardNamecontainer,{marginVertical:5}]}>
                  <Text style={[styles.imageDetailText,{marginTop:0}]}><Entypo name="home" size={20} color="white" /> : </Text>
                  <Text style={[styles.imageDetailText,{marginTop:0,width:"100%"}]}>{item.address}</Text>
              </View>
    </View>
    </View>
  )
}

export default BoardingName

const styles = StyleSheet.create({
    image: {
        width:365,
        height: 300,
        resizeMode: "cover",
        borderRadius:20,
        padding:5
      },
      ImageCardNamecontainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
        marginTop:10
    
    },
      ImageCardName:{
        fontWeight:500,
        fontSize:30,
        backgroundColor:"",
        color:"white",
    
    },
    icon:{
        backgroundColor:"",
        paddingTop:8
    
    },
    ImageCardDetailcontainer:{
      backgroundColor:"",
      width:"90%",
    
    },
    imageDetailText:{
      color:"white", 
      fontSize:16,
      fontWeight:500,
      marginTop:10
    
    },
})
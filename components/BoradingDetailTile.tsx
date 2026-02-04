import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useContext, useState } from 'react';
import { Image, Modal, Pressable, StyleSheet, Text, View ,useWindowDimensions} from 'react-native';

import MoreInfo from '@/components/Screens/MoreInfo';
import { favBoards } from '@/contex/favourites';
import BoardingName from './BoardingName';
import {universities} from '@/assets/Data/data';
import { DataDownload } from '@/contex/dataImport';

interface itemForm {
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


interface props{
    id:string;
    
}

const BoradingDetailTile = ({ id }: props) => {
  const {width,height} = useWindowDimensions();
  const boardingData = useContext(DataDownload)
  const [modalState, setModalState] = useState<boolean>(false);
  const dynamic_width = width>800?width*0.4:width;
  
    const handleSate = () => {
      setModalState(!modalState);
    };
  
    const item = boardingData.data.find((item:itemForm) => item.id === id);
    const uni_name = universities.find((uni)=>uni.searchId===item.searchId)?.name
  
    if (!item) {
      return (
        <View style={styles.imageCard}>
          <Text style={{ color: 'white'}}>Listing not found</Text>
        </View>
      );
    }
  
    return (
      <View style={[styles.imageCard,{width:dynamic_width}]}>
        <Text style={styles.title}>
          Near {uni_name}
        </Text>
  
        <Pressable onPress={handleSate}>
          <Image
            source={{ uri: item.picThumnail.trim() || "https://via.placeholder.com/400" }}
            style={styles.image}
            resizeMode="cover"
          />
        </Pressable>
  
        <BoardingName id={id} />
  
        <Modal visible={modalState} animationType="fade">
          <MoreInfo id={id} func={handleSate} />
        </Modal>
      </View>
    );
  };
  
export default BoradingDetailTile;

const styles = StyleSheet.create({
    title:{
        color:"yellow", 
        fontSize:20,
        fontWeight:600,
        marginBottom:10,
        textAlign:"center" 

    },
    mainContainer:{
        backgroundColor:"#F3F4F4",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        
    },
    imageCard:{
        padding:20,
        backgroundColor:"#446782",
        borderRadius:10,
        width:"90%",
        justifyContent:"center",
        alignItems:"center",
        shadowColor:"#061E29",
        shadowOffset:{width:5,height:5},
        shadowOpacity:0.25,
        marginVertical:15,
        maxWidth:"90%"

    },
    image:{
        width:300,
        height:200,
        borderRadius:10,
        borderColor:"#1D546D",
        borderWidth:2
    },
    ImageCardNamecontainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"90%",
        marginTop:10

    },
    ImageCardName:{
        fontWeight:700,
        fontSize:30,
        backgroundColor:"",
        color:"white"

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

    }
})
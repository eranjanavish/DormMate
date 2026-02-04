import BoradingDetailTile from '@/components/BoradingDetailTile';
import ModalScreen from '@/components/Screens/modalScreen';
import { favBoards } from '@/contex/favourites';
import React, { useState,useContext } from 'react';
import { ScrollView, Image, Modal, Pressable, StyleSheet, Text, TextInput, View ,useWindowDimensions} from 'react-native';
import { data } from '@/assets/Data/data';
import { universities } from '@/assets/Data/data';
import { DataDownload } from '@/contex/dataImport';
import Floatinglist from '@/components/Floatinglist';

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

const student = () => {
    const boardingData = useContext(DataDownload);
    const {width} = useWindowDimensions();
    const dynamic_width = width>800?width*0.4:width*0.9;
    const dynamic_height = width>600?400:200;
    const [list, setList] = useState<string[]>([]);
    const [textInput,setText] = useState<string>("");
    const [modalState,setModalState] = useState<boolean>(false);
    const handleSate = ()=>{
        setModalState(!modalState);
    }
    const onChange = (text:string)=>{
        console.log(text)
        setText(text)
    }

    const add = ()=>{
        
        const filter_list = boardingData.data.filter((item:itemForm) => item.searchId === textInput)
                                .map((item:itemForm) => item.id);
        setList(filter_list);
        
    }


    return (
    <View style={styles.mainContainer}>
      <View style={[styles.one,{height:dynamic_height}]}>
        <Image source={require("../../assets/point.jpeg")} style={[styles.image,{width:dynamic_width}]} resizeMode="stretch"/>
      </View>
      <View style={styles.two}>
        <View style={styles.inputfields}>

        <View style={{ flex: 1,backgroundColor:"" }}>
            <Floatinglist
            list={universities}
            func={onChange}
            textconfig={{ style: styles.inputBox }}
            />
        </View> 
            <Pressable onPress={add}><Text style={styles.button}>Search</Text></Pressable>
        </View>
        <View>
            <Pressable onPress={handleSate}>
                <Text style={[styles.button,styles.favButton]}>Favourites</Text>
                </Pressable>
            <Modal
          animationType="slide"
          transparent={false}
          visible={modalState}>
            <ModalScreen func={handleSate}/>
          </Modal>
        </View>
        <View style={styles.three}>
        <ScrollView style={styles.scrollview} contentContainerStyle={styles.scrollviewContainer} showsVerticalScrollIndicator={false}>
        {list.length === 0 ? (
        <Text>No results Found!</Text>
        ) : (
        list.map((item) => (
            <BoradingDetailTile key={item} id={item} />
        ))
        )}

      </ScrollView>

      </View>
      </View>
      
    </View>
  )
}

export default student

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:"",
        marginTop:40,
        marginBottom:10


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
        padding:10

    },
    two:{
        flex:3,
        backgroundColor:"",
        padding:10,


    },
    inputfields:{
        flexDirection:"row",
        justifyContent:"space-around",
        paddingHorizontal:10,
        backgroundColor: "",

    },
    inputBox:{
        backgroundColor: "#FFFFFF",
        marginTop:10,
        fontSize: 20,
        borderColor:"black",
        borderWidth:1,
        borderRadius: 50,
        color: "#1A1A1A",
        textAlign:"center",
        shadowColor:"#061E29",
        shadowOffset:{width:2,height:5},
        shadowOpacity:0.25,
        height:55,
        padding:15,


    },
    button:{
        fontSize:18,
        backgroundColor:"lightblue",
        padding:15,
        margin:10,
        borderRadius:30,
        shadowColor:"#63c5da",
        shadowOffset:{width:2,height:5},
        shadowOpacity:0.25,
        borderColor:"#63c5da",
        borderWidth:1,
        textAlign:"center"
    },
    favButton:{
        backgroundColor:"#ffdbbb",
        borderColor:"#ff6700",
        shadowColor:"#ff6700",height:45,
        paddingVertical:10
    },
    three:{
        flex:1,
        backgroundColor:"",
        borderRadius:20,
        
        alignItems:"center",
        justifyContent:"center"

    },
    scrollview:{
        flex:3,
        width:"100%",
        backgroundColor:"",
        

    },
    scrollviewContainer:{
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:10,
        width:"100%"

    },

})
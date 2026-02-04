import {useContext} from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import BoradingDetailTile from '../BoradingDetailTile';
import { favBoards } from '@/contex/favourites';
interface prop{
    func : ()=>void;
}

const ModalScreen = ({func}:prop) => {
  const favStar = useContext(favBoards);
    const list = ["1","2",'3',"4"];
  return (
    <View style={styles.mainContainer}>
      <Pressable onPress={()=>func()}><Text style={styles.button}>Close Favourites</Text></Pressable>
      <View style={{flex:2,alignItems:"center",justifyContent:"center",width:"100%"}}>
      <ScrollView style={styles.scrollview} contentContainerStyle={styles.scrollviewContainer} showsVerticalScrollIndicator={false}>
        {favStar.favBoardings.map((item)=>(
            <BoradingDetailTile key={parseInt(item)} id={item}/>
        ))}
      </ScrollView>
      </View>
    </View>
  )
}

export default ModalScreen;

const styles = StyleSheet.create({
    mainContainer :{
        flex:1,
        backgroundColor:"",
        marginTop:40,
        padding:0

    },
    button:{
        fontSize:18,
        backgroundColor:"#e03c31",
        padding:15,
        margin:10,
        borderRadius:30,
        shadowColor:"#e62020",
        shadowOffset:{width:2,height:5},
        shadowOpacity:0.5,
        borderColor:"#ff2400",
        borderWidth:1,
        textAlign:"center",
        fontWeight:500
    },
    scrollview:{
        flex:3,
        width:"100%",
        backgroundColor:"",
        marginTop:10,
        paddingHorizontal:0,

    },
    scrollviewContainer:{
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:10,
        width:"100%"
    }
    
})
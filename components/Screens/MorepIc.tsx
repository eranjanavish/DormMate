import { StyleSheet, Button, View,FlatList,Image,Text,Pressable } from 'react-native'
import React from 'react'


const images = [
    "https://picsum.photos/800/400?1",
    "https://picsum.photos/800/400?2",
    "https://picsum.photos/800/400?3",
  ];

interface props{
    func:()=>void;
    piclist: string[];
}
  
const MorepIc = ({func,piclist}:props) => {
  const safePics = Array.isArray(piclist)
  ? piclist.filter(
      p => typeof p === "string" && p.trim().startsWith("http")
    )
  : [];
  return (
    <View style={{flex:1,backgroundColor:'rgba(255, 255, 255, 0.8)',justifyContent:'center',alignContent:'center'}}>
        <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
            <Pressable onPress={func}>
                            <Text style={[styles.button]}>Close</Text>
                            </Pressable>
        </View>
        <View style={{flex:3,justifyContent:'center',alignContent:'center'}}>
        <FlatList
          style={{ 
            backgroundColor:"",
            marginTop:40}}
          contentContainerStyle={{alignContent:"center",justifyContent:'center'}}
          data={safePics}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({ item }) => {
            if (!item) return null;
          
            return (
              <Image
                source={{ uri: item.trim() }}
                style={styles.image}
              />
            );
          }}
        />
        </View>
        
      
    </View>
  )
}

export default MorepIc

const styles = StyleSheet.create({
    image: {
        width:400,
        height: 300,
        resizeMode: "cover",
        borderRadius:20,
        padding:5
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
      }
})


//Ai generated code
{/* <FlatList
  style={{ marginTop: 40 }}
  contentContainerStyle={{
    alignItems: "center",
    justifyContent: "center",
  }}
  data={piclist?.filter(
    (item) =>
      typeof item === "string" &&
      item.trim().startsWith("http")
  )}
  horizontal
  pagingEnabled
  showsHorizontalScrollIndicator={false}
  keyExtractor={(item, index) => `${item}-${index}`}
  renderItem={({ item }) => (
    <Image
      source={{ uri: item }}
      style={styles.image}
    />
  )}
/> */}

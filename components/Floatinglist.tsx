import { StyleSheet, Text, View,Pressable, Modal, ScrollView, Button,TextInputProps } from 'react-native'
import {useState} from 'react'

const list = [1,2,3,4,5]
interface uni_struct{
    searchId:string;
    name:string;
}

interface props{
    list:uni_struct[];
    func:(searchId:string)=>void;
    textconfig:TextInputProps;
}
const Floatinglist = ({list,func,textconfig}:props) => {
    const [isActive,setIsActive] = useState<boolean>(false)
    const [placeholder,setPlaceholder] = useState<string>("Select Your University")
    const handlePress=()=>{
        setIsActive((prev)=>!prev);
    }
  return (
    <View>
       <Pressable onPress={handlePress}><Text {...textconfig}>{placeholder}</Text></Pressable>


       <Modal visible={isActive} animationType="fade" transparent={true}>
            <View style={{flex:1,backgroundColor:"rgb(255,255,255,0.9)",justifyContent: "center",alignItems: "center"}}>
                <Pressable onPress={handlePress}>
                <View  style={{flex:1,margin:40}}>
                <ScrollView>
                    {list.map(({searchId,name}:uni_struct)=>(
                        <Pressable onPress={()=>{
                            func(searchId)
                            setPlaceholder(name)
                            setIsActive((prev)=>!prev);

                        }} key={searchId}><Text style={{textAlign:"center",margin:10,fontSize:20}}>{name}</Text></Pressable>
                    ))}
                </ScrollView>
                
                </View>
                </Pressable>
            </View>
            
       </Modal>
    </View>
  )
}

export default Floatinglist

const styles = StyleSheet.create({
    input:{
        backgroundColor: "white",
        padding:10, 
        marginVertical:10,
        fontSize: 15,
        fontWeight:600,
        borderColor:"black",
        borderWidth:1,
        borderRadius: 50,
        textAlign:"left",
        shadowColor:"black",
        shadowOffset:{width:2,height:5},
        shadowOpacity:0.25,
        height:40
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
      
})
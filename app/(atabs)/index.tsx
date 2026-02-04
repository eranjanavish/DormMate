    import { Image, ScrollView, StyleSheet, Text, View,FlatList,useWindowDimensions } from 'react-native'
    import {useContext, useState} from 'react';
    import BoradingDetailTile from '@/components/BoradingDetailTile';
    import Loading from '@/components/Loading';
    import { DataDownload } from '@/contex/dataImport';




    const index = () => {
        const [refreshing, setRefreshing] = useState(false);

       

        const boardingData = useContext(DataDownload);
        const {width} = useWindowDimensions();
        const dynamic_width = width>800?width*0.4:width*0.9;
        const dynamic_height = width>600?300:250;

        const onRefresh = async () => {
            setRefreshing(true);
            try{await boardingData.loadData(); }
            catch(err){console.log(err)}  // reload from Firebase / API
            setRefreshing(false);
            };

    return (
        <View style={styles.mainContainer} >
           
            
            {boardingData.data.length!==0?
            <FlatList

            ListHeaderComponent={()=>(
                <View style={[styles.welcome,{height:dynamic_height}]}>
            <Image source={require("../../assets/new.jpeg")} style={[styles.welcomeimage,{width:dynamic_width}]} resizeMode="cover"/>
            
            
        </View>)}


            refreshing={refreshing}
            onRefresh={onRefresh}
            style={styles.scrollview} 
            contentContainerStyle={styles.scrollviewContainer}
            showsVerticalScrollIndicator={false}
            data={boardingData.data}
            keyExtractor={({id})=>(id)}
            renderItem={({item})=> <View style={{alignItems:"center"}}><BoradingDetailTile key={item.id} id={item.id}/></View>}
            />:<Loading/>}
        </View>
    
    )
    }

    export default index

    const styles = StyleSheet.create({
        
        mainContainer:{
            backgroundColor:"",
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            marginTop:30,
            marginHorizontal:5,
            
        },
        scrollview:{
            flex:3,
            width:"100%",
            backgroundColor:"",
            marginTop:10,
            
            

        },
        scrollviewContainer:{
            borderRadius:20,
           marginHorizontal:10,
           paddingBottom:0
        },
        
        welcome:{
            flex:1,
            backgroundColor:"",
            width:"100%",
            marginTop:10,
            justifyContent:"center",
            alignItems:"center"
            
            

        },
        welcomeimage:{
            width: "100%",
            height: 250,
            borderRadius: 20,
            
        }
        
        
        
    })
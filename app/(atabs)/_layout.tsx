import { Tabs } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

export default function layout(){
    return (
        <Tabs
        initialRouteName="index"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'white',
          height: 55,            
          borderRadius: 24,
          marginHorizontal: 16,
          marginBottom: 30,
          paddingTop: 0,
          paddingBottom: 0,    
          position: 'absolute',
          borderColor: "white",
          borderWidth:1,
          shadowColor:"black",
          shadowOffset:{width:1,height:5},
          shadowOpacity:0.5
        },
        tabBarItemStyle: {
          paddingVertical: 0,   
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight:600
        },
        tabBarIconStyle: {
          marginTop: 0,
        },
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarActiveTintColor:"black"
      }}>
            <Tabs.Screen
            name="owners"
            options={{
                title:"For Owners",
                tabBarIcon: (({focused})=>(<Ionicons name={focused?"home":"home-outline"} size={20} color="black" />))
                
            }}
            />
            <Tabs.Screen
            name="index"
            options={{
                title:"Latest Listings",
                tabBarIcon: (({focused})=>(focused?<AntDesign name="fire" size={20} color="black" />:
                <SimpleLineIcons name="fire" size={20} color="black" />)),
            }}
            />
            <Tabs.Screen
            name="student"
            options={{
                title:"For Students",
                tabBarIcon: (({focused})=><Ionicons name={focused?"person":"person-outline"} size={24} color="black" />),
            }}
            />
            
        </Tabs>
    )
}
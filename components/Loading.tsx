import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"small"}/>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})
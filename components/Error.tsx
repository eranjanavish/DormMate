import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import React from 'react'

const Error = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.main}>Error Occured.</Text>
      <Text style={styles.main}>Please try again later!</Text>
    </View>
  )
}

export default Error

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    main:{
        textAlign:"center"
    }
})
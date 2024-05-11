import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../Components/Header/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
 
export default function HomeScreen() {
  const title = 'Hi There!!!'

  return (
    <SafeAreaView style={styles.container}>
      <Header Title={title} show={false}/>
      <Text></Text>
    </SafeAreaView>
    
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
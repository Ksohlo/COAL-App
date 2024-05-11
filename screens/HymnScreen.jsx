import React, { useState } from 'react'
import { StyleSheet, View, TextInput, ScrollView, Keyboard, Text } from 'react-native'
import Header from '../Components/Header/Header'
import Button from '../Components/Button/Button'
import { SafeAreaView } from 'react-native-safe-area-context'
import useFetch from '../Components/Hooks/useFetch'

export default function HymnScreen() {
  const title = 'Hymns'
  
  const {data, loading, error} = useFetch(`https://rapidapi.com/Eboy1/api/emahymns-api/${data}`)
  console.log(data);
  function searchHymn(e) {
    e.preventDefault();
    Keyboard.dismiss()
    
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header Title={title}/>
      <View style={styles.body}>
        <View style={styles.inputDiv}>
          <TextInput placeholder='Search Hymn' style={styles.input} onChange={searchHymn}></TextInput>
        </View>
        <Button Title={'Search'} search = {searchHymn}/>
        <ScrollView style={styles.bodycont}>
        <View>
          <Text style={styles.hymnHead}>{}</Text>
          <Text style={styles.hymnText}>{}</Text>
        </View>
      </ScrollView>
      </View>
    </SafeAreaView>
    
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body:{
    width: '100%',
    height: '100%',
    backgroundColor: '#414141',
    display: 'flex',
    alignItems: 'center',
  },
  input:{
    fontSize: 12,
    padding: 7,
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%'
  },
  inputDiv:{
    width: '90%',
    height:30,
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius:30, 
    paddingHorizontal:4
  },
  bodycont:{
    width:'100%',
    height: 'auto',
    flex: 1,
    backgroundColor: '#505050',
    marginTop: 10,
    borderRadius: 20,
    padding: 10,

  },
  hymnHead: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '800',
    marginBottom:5,
    textAlign: 'center',
  },
  hymnText:{
    color: '#fff'
  }
})
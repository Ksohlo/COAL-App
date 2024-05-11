import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Header from '../Components/Header/Header'

export default function FamilySongScreen() {
  const title = 'Family Song'
  return (
    <View style={styles.container} >
      <Header Title={title} show={false}/>
      <View style={styles.containerText}>
        <ScrollView style={styles.scroll}>
          <Text style={styles.text}>
            I have found a place where I can call my home 
            I have found a place where I can be myself 
            A place where I can have no secret to hide 
            A place where I am still safe after it all 
            And with you Lord I can be naked and not ashamed 
            With you Lord I can be open and have no fear 
            For i've found in you a friend that I can trust 
            That is why you will remain my great physician 
          </Text>
          <Text style={styles.text}>
            I've got my mind made up 
            And I won't turn back 
            cos i want to see my Jesus Someday (x2)
          </Text>
          <Text style={styles.text}>
            Goodbye world I stay no longer with you 
            Goodbye pleasure of sins I stay no longer with you 
            I've made up my mind to go God's way for the rest of my life (x2)
          </Text>
          <Text style={styles.text}>
            We are heirs of the father 
            We are joint heirs with the son Amen 
            We are Children Of the kingdom 
            We are family, We are one

          </Text>
          <Text style={styles.text}>
            May the grace Of the Lord Jesus Christ 
            Be with us all Amen (x2)
          </Text>
        </ScrollView>
      </View>
    </View>
    
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    padding: 20,
  },
  containerText: {
    flex: 1,
    backgroundColor: '#414141',
    // padding:10
  },
  text: {
    color: 'white',
    fontFamily: 'InterRegular',
    fontSize: 16,
    // padding: 10,
    lineHeight:25,
    marginBottom: 15

  }
})
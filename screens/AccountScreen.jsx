import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../Components/Header/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AccountScreen() {
  const title = 'Acount & Socials'
  function gotoSocial (url){

  }
  return (
    <SafeAreaView style={styles.container}>
      <Header Title={title} />
      <ScrollView style={styles.bodyContainer}>
        <View style={styles.bodyContainer}>
          <Image source={require('../src/assets/bg.jpg')} style={styles.image}/>
          <TouchableOpacity onPress={gotoSocial()}>
            <View style={styles.socialCon}>
              <View style={styles.icocon}>
                <Image source={require('../src/assets/yt.png')} style={styles.icon} />
                <Text style={styles.icoText} >Connect with us on Youtube</Text>
              </View>
            </View>
          </TouchableOpacity>
          

          <TouchableOpacity onPress={gotoSocial()}>
            <View style={styles.socialCon}>
              <View style={styles.icocon}>
                <Image source={require('../src/assets/face.png')} style={styles.iconsq} />
                <Text style={styles.icoText} >Connect with us on Facebook</Text>
              </View>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={gotoSocial()}>
            <View style={styles.socialCon}>
              <View style={styles.icocon}>
                <Image source={require('../src/assets/ig.png')} style={styles.iconsq} />
                <Text style={styles.icoText} >Connect with us on Instagram</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll:{
    flex:1
  },
  bodyContainer:{
    flex:1,
    backgroundColor: '#414141',
    paddingHorizontal: 10,
  },
  image:{
    width:'90%',
    height: 180,
    marginHorizontal:'auto',
    marginLeft:20,
    marginVertical: 20,
    borderRadius:30
  },
  socialCon:{
    height:'auto',
    // flexDirection:'column',
    // alignItems:'flex-end',
    paddingRight:30
  },
  icocon:{
    padding:15,
    marginVertical:10,
    width: 280,
    height:50,
    backgroundColor: '#fff',
    borderRadius:40,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icoText:{
    color: '#000',
    fontFamily:'InterRegular',
    fontSize:14,
    marginRight:20
  },
  icon:{
    width: 25,
    height:15,
  },
  iconsq:{
    width:25,
    height:25
  }
})
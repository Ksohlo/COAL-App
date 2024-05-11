import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Header from '../Components/Header/Header'

export default function ConfessionScreen() {
  const title = 'Confession of Faith'
  return (
    <View style={styles.container}>
      <Header Title={title} show={false}/>
      <View style={styles.scrollContainer}>
        <ScrollView  style={styles.scroll}>
          <Text style={styles.text}>
            I dwell in the secret place of the most high, I abide under then shadow of the Almighty
          </Text>
          <Text style={styles.text}>
            Yea, though i walk through the shadow of the valley of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me
          </Text>
          <Text style={styles.text}>
            The light of the lord shines upon me,
          </Text>
          <Text style={styles.text}>
            Though the darkness shall cover the eath, and gross darkness the people: but the lord shall arise upon me, and his glory shall be seen upon me
          </Text>
          <Text style={styles.text}>
            By my GOD i run through a troop: and by my GOD i leap over a wall.
          </Text>
          <Text style={styles.text}>
            I walk in divine favour from the Lord, I attract favour, I move in favour, I am surrounded with favour, 
          </Text>
          <Text style={styles.text}>
            The mercy of the lord speaks for me, the mercy of the lord goes ahead of me, goes besides me, goes behind me
          </Text>
          <Text style={styles.text}>
            I am more than a conqueror through christ who loves me
          </Text>
          <Text style={styles.text}>
            I walk in victory, I obtain victory, I am victorious over death, I am victorious in my academics, I am victorious in my finances, I am victorious in my heath, I am victorious in my mental heath, I am victorious Physically, in everything i do i am victorious 
          </Text>
          <Text style={styles.text}>
            I am rooted in God's word and in prayers
          </Text>
          <Text style={styles.text}>
            I am like a tree planted by the rivers of water, I bring forth my fruit in my season; and whatsoever i do shall prosper
          </Text>
          <Text style={styles.text}>
            I flourish, I walk in adundance, in my academics I walk in abundance, in my finances I walk in abundance, in my spiritual life I walk in abundance, in my resources I walk in abundance
          </Text>
          <Text style={styles.text}>
            I AM VICTORIOUS, I AM VICTORIOUS, I AM VICTORIOUS
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
    padding: 20
  },
  scrollContainer:{
    flex: 1,
    // padding: 20,
    backgroundColor: '#414141'
  },
  text: {
    color: 'white',
    fontFamily: 'InterRegular',
    fontSize: 16,
    marginVertical: 10,
    lineHeight: 25
  }
})
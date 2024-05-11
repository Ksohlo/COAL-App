import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Button({Title, search}) {
  return (
    <TouchableOpacity style={styles.Button} onPress={search} >
        <Text style={styles.butText}>{Title}</Text>
    </TouchableOpacity>
  )
}

styles = StyleSheet.create({
    Button:{
        width: 70,
        marginTop: 10,
        backgroundColor: '#0F52BA',
        padding: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
      },
      butText: {
        color: "#fff"
    }
});
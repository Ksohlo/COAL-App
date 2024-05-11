import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function Header({Title, show}) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{Title}</Text>
      {show && <TouchableOpacity>
        <View style={styles.dotContainer}>
          <View style={styles.dot}/>
          <View style={styles.dot}/>
          <View style={styles.dot}/>
      </View>
      </TouchableOpacity>}
      
    </View>
  )
}


const styles = StyleSheet.create({
    header:{
      height: 50,
      width: '100%',
      backgroundColor: '#161717',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingHorizontal:20
    },
    headerText:{
      color: 'white',
      fontFamily: 'InterMedium',
      fontSize: 15,
      marginLeft: 20
    },
    dotContainer:{
      width: 40,
      height:40,
      borderRadius: 100,
      borderColor: '#fff',
      borderStyle: 'solid',
      borderWidth:1,
      alignItems:'center',
      justifyContent:'center'
    },
    dot:{
      width:3,
      height:3,
      backgroundColor: '#fff',
      borderRadius:100,
      marginBottom:4
    }
  })
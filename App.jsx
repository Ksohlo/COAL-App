import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen'
import FamilySong from './screens/FamilySongScreen'
import ConfessionScreen from './screens/ConfessionScreen'
import HymnScreen from './screens/HymnScreen'
import AccountScreen from './screens/AccountScreen';
import Icons from './Components/data';
import { Color } from './Components/data';
import { Image, StyleSheet } from 'react-native';


export default function App() {
  const Tab = createBottomTabNavigator();

  

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' style={styles.bottom}>
        <Tab.Screen 
          name='Home' 
          component={HomeScreen} 
          options={{
            title: 'Home', 
            tabBarIcon:({focused})=>( <Image source={Icons.HOME} style={{width:30, height: 35, tintColor: focused ? Color.BLUE : Color.GREY}}/>), tabBarActiveTintColor: Color.BLUE, tabBarInactiveTintColor: Color.GREY, headerShown:false}}  />
        <Tab.Screen name='Family Song' component={FamilySong} options={{title: 'Family Song', tabBarIcon:({focused})=>( <Image source={Icons.FAMILY} style={{width: 25, height:25, tintColor: focused ? Color.BLUE : Color.GREY}}/> ), tabBarActiveTintColor: Color.BLUE, tabBarInactiveTintColor: Color.GREY, headerShown:false}}/>
        <Tab.Screen name='Confession' component={ConfessionScreen} options={{title: 'Confession of Faith', tabBarIcon:({focused})=>( <Image source={Icons.CONFESSION} style={{width: 17, height: 25, tintColor: focused ? Color.BLUE : Color.GREY}}/> ), tabBarActiveTintColor: Color.BLUE, tabBarInactiveTintColor: Color.GREY, headerShown:false}}/>
        <Tab.Screen name='Hymn' component={HymnScreen} options={{title: 'Hymn', tabBarIcon:({focused})=>( <Image source={Icons.HYMNS} style={{width: 20, height: 20, tintColor: focused ? Color.BLUE : Color.GREY}}/> ), tabBarActiveTintColor: Color.BLUE, tabBarInactiveTintColor: Color.GREY, headerShown:false}}/>
        <Tab.Screen name='Account' component={AccountScreen} options={{title: 'Account', tabBarIcon:({focused})=>( <Image source={Icons.ACCOUNTS} style={{width: 20, height: 20, tintColor: focused ? Color.BLUE : Color.GREY}}/>), tabBarActiveTintColor: Color.BLUE, tabBarInactiveTintColor: Color.GREY, headerShown:false}}/>
      </Tab.Navigator>
    </NavigationContainer>
    
  )
}



const styles = StyleSheet.create({
  bottom: {
    backgroundColor:'#000'
  },
})
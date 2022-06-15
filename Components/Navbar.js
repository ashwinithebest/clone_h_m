import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import {createAppContainer} from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Button } from 'react-native-web';
import MenPage from '../Screens/Men';
import HomePage from '../Screens/HomePage';
import WomenPage from '../Screens/WomenPage';
import KidsPage from '../Screens/KidsPage';
import SalePage from '../Screens/SalePage';
import AppNavigator from '../AppNavigator';


const Navbar = (props) => {
    const clg=()=>{console.log('Onpress is working')}
  return (
    <View style={style.hmnavbar}>
       {/* <Button title='open' onPress={()=>{props.navigation.openDrawer()}}></Button> */}
        <AntDesign onPress={clg} name="hearto" size={24} color="black" />
        <SimpleLineIcons name="user" size={24} color="black" />
        <Ionicons name="ios-search-outline" size={24} color="black" />
        <SimpleLineIcons name="bag" size={24} color="black" />
    </View>
  )
}


export default Navbar

const style= StyleSheet.create({
    hmnavbar:{
        // flex:1,
        justifyContent: ' flex-end ' ,
        gap:'10px',
        flexDirection:'row',
        // backgroundColor: 'pink',
        width: '100%',
        height:'autofit',
    },
});
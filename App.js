import { Button,StyleSheet, Text, View } from 'react-native';
import Navbar from './Components/Navbar';
import {createAppContainer} from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { NavigationContainer } from '@react-navigation/native';
import MenPage from './Screens/Men';
import WomenPage from './Screens/WomenPage';
import KidsPage from './Screens/KidsPage';
import SalePage from './Screens/SalePage';
 function App(props) {
  return (
    <NavigationContainer>
    {/* <MyDrawer /> */}
    <View >
      <Navbar></Navbar>
      <Button title='open' onPress={()=>{props.navigation.openDrawer()}}></Button>
    </View>
  </NavigationContainer>
   

  );
}


const appNavigator= createDrawerNavigator({
  Home:{
    screen:App
  },
  Men:{
    screen:MenPage
  },
  Women:{
    screen:WomenPage
  },
  Kids:{
    screen:KidsPage
  },
  Sale:{
    screen:SalePage
  }
})
export default createAppContainer(appNavigator)
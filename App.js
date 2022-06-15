import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Icon } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from './Screens/HomePage';
import WomenPage from './Screens/WomenPage';
import MenPage from './Screens/Men';
import KidsPage from './Screens/KidsPage';
import SearchPage from './Screens/SearchPage';
import DrawerRoot from './Components/Drawer';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerRight: () => (
            <View style={style.hmHeader}>
              <Ionicons onPress={() => this.navigate('Women')} name="ios-search-outline" size={24} color="black" />
              <AntDesign onPress={() => { console.log("Press is logged") }} name="hearto" size={24} color="black" />
              <SimpleLineIcons name="user" size={24} color="black" />
              <SimpleLineIcons name="bag" size={24} color="black" />
            </View>
          ),
          // headerBackImageSource:"./assets/favicon.png"
        }}
      >
        <Stack.Screen
          name="Root"
          component={DrawerRoot}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Men" component={MenPage} />
        <Stack.Screen name="Women" component={WomenPage} />
        <Stack.Screen name="Kids" component={KidsPage} />
        <Stack.Screen name='Search' component={SearchPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const style = StyleSheet.create({
  hmHeader: {
    // flex:1,
    justifyContent: ' flex-end ',
    gap: '10px',
    color: '#fff',
    flexDirection: 'row',
    // backgroundColor: 'pink',
    width: '100%',
    height: 'autofit',
  },
});

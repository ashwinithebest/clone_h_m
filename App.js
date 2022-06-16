import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from './Screens/HomePage';
import WomenPage from './Screens/WomenPage';
import MenPage from './Screens/Men';
import KidsPage from './Screens/KidsPage';
import SalePage from './Screens/SalePage';
import MyAccount from './Screens/MyAccount';
import DrawerRoot from './Components/Drawer';
import Navbar from './Components/Navbar';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{ headerRight: () => <Navbar></Navbar> }}
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
        <Stack.Screen name="Sale" component={SalePage} />
        <Stack.Screen name="MyAccount" component={MyAccount} />
        {/* <Stack.Screen name='Search' component={SearchPage} /> */}
      </Stack.Navigator>
      {/* <DrawerRoot></DrawerRoot> */}
    </NavigationContainer>
  );
}

export default App;


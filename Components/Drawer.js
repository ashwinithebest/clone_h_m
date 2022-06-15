import React from 'react'
import { createDrawerNavigator } from 'react-navigation-drawer'
import HomePage from '../Screens/HomePage'
import MenPage from '../Screens/Men'

const DrawerRoot = () => {
    const Drawer = createDrawerNavigator()
  return (
    
    <Drawer.Navigator>
    <Drawer.Screen name="Home" component={HomePage} />
    <Drawer.Screen name="Profile" component={MenPage} />
  </Drawer.Navigator>
  )
}

export default DrawerRoot
import MenPage from './Screens/Men';
import WomenPage from './Screens/WomenPage';
import KidsPage from './Screens/KidsPage';
import SalePage from './Screens/SalePage';
import {createAppContainer} from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer';


const appNavigator= createDrawerNavigator({
  
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
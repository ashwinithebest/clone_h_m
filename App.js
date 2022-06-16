import React, { useState,useEffect } from 'react';
import { View, Text, Button, ScrollView, StyleSheet, TouchableOpacity, FlatList, TextInput } from 'react-native';
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
import Data from './Data/SearchData';


const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

function App() {
  const [isSearchBtnClicked, setIsSearchBtnClicked] = useState(true)
  const [SearchWord, setSearchWord] = useState('')
  const [foundProduct, setfoundProduct] = useState([])

  useEffect(() => {
    if (SearchWord !== '') {
      const results = Data.filter((product) => {
        return product.name.toLowerCase().startsWith(SearchWord.toLowerCase());
      });
      setfoundProduct(results);
    } else {
      setfoundProduct([]);
    };
  }, [SearchWord])

  const filter = (keyword) => {
    setSearchWord(keyword)
  }
  const Item = ({ title }) => (
    <View >
      <Text style={styles.title}>{title}</Text>
    </View>
  );


  const renderItem = ({ item }) => (
    <Item title={item.name} />
  );


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerRight: () => (
          
              <View style={styles.hmHeader}>
                {isSearchBtnClicked && (
                  <View >
                    <TextInput
                      style={styles.inputContainer}
                      placeholder="search a product"
                      onChangeText={filter}
                      defaultvalue={SearchWord}
                      autoFocus={true}
                     onBlur={() => {
                       setfoundProduct([])
                       console.log('onblur triggered')
                       setIsSearchBtnClicked(!isSearchBtnClicked)
                     }}
                    />
                    {foundProduct && foundProduct.length > 0 ?
                    
                      <FlatList style={styles.searchList}
                        data={foundProduct}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}

                      /> : <Text> </Text>
                      }
                    
                  </View>
                )}

              
                <Ionicons onPress={() => setIsSearchBtnClicked(!isSearchBtnClicked)} name="ios-search-outline" size={24} color="black" />
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

const styles = StyleSheet.create({
  hmHeader: {
    flex:1,
    justifyContent: ' flex-end ',
    gap: '10px',
    position:'absolute',
    color: '#fff',
    // backgroundColor:'blue',
    flexDirection: 'row',
    width: '100%',
    height: '30%',
    bottom:27
  },
  inputContainer: {
    backgroundColor: '#f2f3f4',
    height: '30px',
    width:'100%',
    // border:'1px',
    fontSize: '20px',
    padding:'3px'
  },
  searchList: {
    position: 'absolute',
    backgroundColor: '#f1f2f3',
    width: '100%',
    marginTop:'30px',
    shadowColor: '#000000',
    shadowRadius: 3,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
    zIndex:1
  },
  title:{
    fontSize:20
  }
});

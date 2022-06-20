import React, { useState, useEffect } from 'react';
import { View, Text, Button, ScrollView, StyleSheet, TouchableOpacity, FlatList, TextInput } from 'react-native';
import Data from '../Data/SearchData';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Cache } from "react-native-cache";
import AsyncStorage from '@react-native-async-storage/async-storage';
const Navbar = (props) => {
  const [isSearchBtnClicked, setIsSearchBtnClicked] = useState(false)
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
    console.log('onchange trigerred')
    getData()
  }
  const Item = ({ title }) => (
    <View >
      <Text style={styles.title}>{title}</Text>
    </View>
  );


  const renderItem = ({ item }) => (
    <Item title={item.name} />
  );
    //cache code
 
    const keyArray=['key1','key2','key3','key4','key5']
    const dataArray=['a','b','c','d','e']

    const storeData = async (value) => {
      try {
        var x=0
        await AsyncStorage.setItem(keyArray[x], value)
        x>=4?x=0:x++;
        console.log('set the value to',value)
      } catch (e) {
        console.log(e)
      }
    }
    const getData = async () => {
      try {
        var x=0
        var str='thththe'
        const value = await AsyncStorage.getItem(keyArray[x])
        x>=4?x=0:x++
        console.log('got the value',value)
        dataArray[1]=str;
        if(value !== null) {
          console.log(value)
          // value previously stored
        }
      } catch(e) {
        console.log(e)
      }
    }
    
    for(var i=0;i<=4;i++)
    {
      console.log('dataArray['+i+']'+ dataArray[i])
    }


  return (
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
              storeData(SearchWord)
             
            }}
          />
          {foundProduct && foundProduct.length > 0 &&

            <FlatList style={styles.searchList}
              data={foundProduct}
              renderItem={renderItem}
              keyExtractor={item => item.id}

            />
          }

        </View>
      )}
      <Ionicons onPress={() => setIsSearchBtnClicked(!isSearchBtnClicked)} name="ios-search-outline"style={styles.icon} />
      <AntDesign onPress={() => { console.log("Press is logged") }} name="hearto" style={styles.icon} />
      <SimpleLineIcons name="user" style={styles.icon}/>
      <SimpleLineIcons name="bag" style={styles.icon} />
    </View>

  )
}


export default Navbar

const styles = StyleSheet.create({
  hmnavbar: {
    flex: 1,
    justifyContent: ' flex-end ',
    gap: '10px',
    flexDirection: 'row',
    // backgroundColor: 'pink',
    // width: '100%',
    height: 'autofit',
  },
  hmHeader: {
    flex: 1,
    justifyContent: ' flex-end ',
    gap: '10px',
    position:'absolute',
    color: '#fff',
    flexDirection: 'row',
  },
  inputContainer: {
    backgroundColor: '#f2f3f4',
    height: '27px',
    width: '100%',
    fontSize: '20px',
    padding: '5px'
  },
  searchList: {
    position: 'absolute',
    backgroundColor: '#f1f2f3',
    width: '100%',
    marginTop: '30px',
    shadowColor: '#000000',
    shadowRadius: 3,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
    zIndex: 1
  },
  title: {
    fontSize: 20
  },
  icon:{
    fontSize:24,
    color:'black'
  }
});
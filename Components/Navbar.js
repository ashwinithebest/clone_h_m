import React, { useState, useEffect } from 'react';
import { View, Text, Button, ScrollView, StyleSheet, TouchableOpacity, FlatList, TextInput } from 'react-native';
import Data from '../Data/SearchData';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

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
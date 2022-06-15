import React, { useState, useEffect } from 'react'
import { Image, TouchableOpacity, Text, View, Button, TextInput, FlatList } from 'react-native-web'
import { StyleSheet } from 'react-native-web'
import Data from '../Data/SearchData'




const HomePage = ({ navigation }) => {
  const [SearchWord, setSearchWord] = useState('')
  const [foundProduct, setfoundProduct] = useState([])

  console.log('Products are', foundProduct)

  // useEffect(() => {
  //  setSearchWord()
  // }, [SearchWord])

  const filter = (keyword) => {
    setSearchWord(keyword)
    console.log('searchword is', SearchWord)
    console.log('keyword is', keyword)
    if (SearchWord !== '') {

      const results = Data.filter((product) => {
        return product.name.toLowerCase().startsWith(SearchWord.toLowerCase());

      });
      setfoundProduct(results);
    } else {
      setfoundProduct([]);
    };
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

    <View style={styles.container}>
      <TextInput
        style={styles.inputContainer}
        placeholder="search a product"
        onChangeText={filter}
        defaultvalue={SearchWord}
        onBlur={() => {
          setfoundProduct([])
          console.log('onblur triggered')
        }}>
      </TextInput>
      {foundProduct && foundProduct.length > 0 ?
        <FlatList style={styles.searchList}
          data={foundProduct}
          renderItem={renderItem}
          keyExtractor={item => item.id} /> :
        (<Text>empty list </Text>)}

      <View style={styles.flexContainer}>
        <TouchableOpacity style={styles.hmButton}
          onPress={() => navigation.navigate('Men')}
        >
          <Text>Men</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.hmButton}
          onPress={() => navigation.navigate('Search')}
        >
          <Text>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.hmButton}
          onPress={() => navigation.navigate('Women')}
        >
          <Text>Women</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.hmButton}
          onPress={() => navigation.navigate('Kids')}
        >
          <Text>Kids</Text>
        </TouchableOpacity>
      </View>
    </View>)
}

export default HomePage

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'pink',
    // height: '23.52%' 
  },
  flexContainer: {
    // height: '100px',
    // marginTop:'-530px',
    // backgroundColor: 'blue',
  },
  hmButton: {
    flex: 1,
    height: 25,
    // backgroundColor:'blue',
    border: '1px',
  },
  inputContainer: {
    // backgroundColor: 'red',
    height: '50px',
    width:'1000px',
    fontSize: '20px',
  },
  searchList: {
    width: '3px',
    position: 'absolute',
    backgroundColor: 'powderblue',
    fontSize: '15px'
  }
})
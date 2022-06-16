import React from 'react'
import { TouchableOpacity, Text, View} from 'react-native-web'
import { StyleSheet } from 'react-native-web'

const HomePage = ({ navigation }) => {

  return (

    <View style={styles.container}>

      <View style={styles.flexContainer}>
        <TouchableOpacity style={styles.hmButton}
          onPress={() => navigation.navigate('Men')}
        >
          <Text>Men</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.hmButton}
          onPress={() => navigation.navigate('Sale')}
        >
          <Text>Sale</Text>
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
    fontSize:35,
    backgroundColor: 'pink',
    // height: '23.52%' 
  },
    hmButton: {
    flex: 1,
    height: 25,
    fontSize:35,
    // backgroundColor:'blue',
    border: '1px',
  },
})
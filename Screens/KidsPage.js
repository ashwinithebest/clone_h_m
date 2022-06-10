import React from 'react'
import { View,Text,Button } from 'react-native-web'

const KidsPage = (props) => {
  return (
    <View> 
      <Button title='open' onPress={()=>{props.navigation.openDrawer()}}></Button> 
      <Text>this is Kids' Page</Text>
    </View>
  )
}

export default KidsPage
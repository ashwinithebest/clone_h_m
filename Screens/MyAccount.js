import React from 'react'
import { View,Text , Button} from 'react-native-web'

const MyAccount = (props) => {
  return (
    <View>
      <Button title='open' onPress={()=>{props.navigation.openDrawer()}}></Button>
        <Text>this is My Account Page</Text>
    </View>
  )
}

export default MyAccount
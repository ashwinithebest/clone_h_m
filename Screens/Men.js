import React from 'react'
import { View , Button,Text} from 'react-native-web'

const MenPage = (props) => {
  return (
    <View>
      <Button title='open' onPress={()=>{props.navigation.openDrawer()}}></Button>
        <Text>This is Men's Page</Text>
    </View>
  )
}

export default MenPage
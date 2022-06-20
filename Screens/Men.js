import React from 'react'
import { View , Button,Text} from 'react-native-web'
import ProductCard from '../Components/ProductCard'

const MenPage = (props) => {
  return (
    <View>
      {/* <Button title='open' onPress={()=>{props.navigation.openDrawer()}}></Button> */}
      <ProductCard></ProductCard>
      {/* <ScrollView horizontal>
   
       </ScrollView> */}
        <Text>This is Men's Page</Text>
    </View>
  )
}

export default MenPage
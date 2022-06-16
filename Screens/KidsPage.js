import React from 'react'
import { View,Text,Button } from 'react-native-web'

const KidsPage = ({navigation}) => {
  const [count, setCount] = React.useState(0);
 
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View>
        <Button onPress={() => setCount(c => c + 1)} title="Update count" />
        <Button title='open' onPress={()=>{navigation.navigate.openDrawer()}}></Button> 
        </View>
      ),
    });
  }, [navigation]);
  return (
    <View> 
       <Text>Count: {count}</Text>
      <Text>this is Kids' Page</Text>
    </View>
  )
}

export default KidsPage
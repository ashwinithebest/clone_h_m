import React from 'react'
import { Text,View,Button } from 'react-native-web'

const SalePage = (props) => {
    return (
        <View>
            <Button title='open' onPress={()=>{props.navigation.openDrawer()}}></Button>
            <Text>Just a Click bait</Text>
        </View>
    )
}

export default SalePage
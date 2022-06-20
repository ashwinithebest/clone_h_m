import React from 'react'
import { Image, ImageBackground,Text, View ,StyleSheet, ScrollView} from 'react-native-web'
import { AntDesign } from '@expo/vector-icons';


const ProductCard = (props) => {
 const image = { uri: "../assets/pyjamas-dinos.jpg" };
  return (
  <View style={styles.productCardContainer}>
    {/* <Text>product</Text> */}
   <ImageBackground
  style={styles.logo}
           source={require('../assets/pyjamas-dinos.jpg')}
  >
  <AntDesign onPress={() => { console.log("Press is logged") }} name="hearto" style={styles.icon} />

  </ImageBackground>
  <Text style={styles.tag}>Conscious Choice</Text>
  <Text style={styles.productName}>Generic Product Name</Text>
  <Text style={styles.price}>Rs.{props.price}</Text>
  </View>
  )
  
}

export default ProductCard
const styles = StyleSheet.create({
    productCardContainer: {
        margin:5,
        width: 190, 
        height:300,
    //   paddingRight:'1px',
      backgroundColor:'powderblue',

    },
    
    logo: {
       width: 182,
      height: 250,
      marginTop:3,
      marginLeft:4
    //   borderRadius:100
    },
    icon:{
      fontSize:25,
      color:'white',
      textAlign:'right',
      marginRight:3,
      marginTop:222
      },
      productName:{
        fontWeight:'400',
        fontSize:15,
        marginLeft:3
      },
    price:{
      fontSize:12,
      fontfamily:"Calibri",
      marginLeft:3
    },
    tag:{
      marginTop:3,
      fontSize:7,
      fontfamily:"Calibri",
      color:"#676767",
      marginLeft:7,
      fontWeight:"bold"
    }
  });
  ProductCard.defaultProps={
    price:1499.00,
    tag:false,
    ProductName:'Apparels'
  }

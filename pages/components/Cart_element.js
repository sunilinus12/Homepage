import { View, Text,Image,TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Cart_element() {
    const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={()=>{navigation.navigate("Cart")}}>
    <View style={{width: 18, height: 18, backgroundColor: "white", marginRight: "10%" }}>
       <Image
         style={{ width: "100%", height: "100%" }}
         resizeMode="cover"
         source={require("../../images/cart.png")}
       />
      
     </View>
    </TouchableWithoutFeedback>
      )
}
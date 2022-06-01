import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Collection from '../pages/Collection';
const Stack = createStackNavigator();
import { Text } from 'react-native-paper';
import Home from "../pages/Home";
import Product from "../pages/Product"
import Product_Description from '../pages/Product_Description';
export default function Mystack() {
  return (
    <Stack.Navigator
    screenOptions={{ 
      headerStyle: { backgroundColor:"black", },
      headerTitleStyle: {
        color: 'white',
        fontWeight:"400"
      },
     headerTintColor:"white",
    
     
     
     }}
    >
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Product Page" component={Product}/>
        <Stack.Screen
        
        name="Collection Page"  options={{ title: 'Collection title' }} component={Collection}/>
        <Stack.Screen name="Product Description" component={Product_Description}/>
    </Stack.Navigator>
    
  )
}
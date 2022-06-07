import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Collection from '../pages/Collection';
const Stack = createStackNavigator();
import { Text } from 'react-native-paper';
import Home from "../pages/Home";
import Product from "../pages/Product"
import Product_Description from '../pages/Product_Description';
import About from '../pages/About';
import Wishlist from '../pages/Wishlist';
import Notifications from '../pages/Notifications';
import Contact from '../pages/Contact';
import Cart from '../pages/Cart';
import Returns from '../pages/Returns';
import Shipping from '../pages/Shipping';
import All_page from '../pages/All_page';
import Login from '../pages/Login';
import Register from '../pages/Register';

import SearchBar from '../pages/SearchBar';
import Cart_element from '../pages/components/Cart_element';
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
        <Stack.Screen name="Product Page" component={Product}
        options={{
          headerRight:()=> <Cart_element/>
        }}
        />
        <Stack.Screen
        
        name="Collection Page"  options={{ title: 'Collection title' }} component={Collection}/>
        <Stack.Screen
        options={{
          headerRight:()=> <Cart_element/>
        }}
        name="Product Description" component={Product_Description}/>
        <Stack.Screen
            name = "About us" component={About}
        />
         <Stack.Screen

            name = "Whishlist" component={Wishlist}
        />
      
         <Stack.Screen
            name = "Notifications" component={Notifications}
        />
        <Stack.Screen
            name = "Contact us" component={Contact}
        />
         <Stack.Screen
            name = "Returns" component={Returns}
        />
         <Stack.Screen
            name = "Cart" component={Cart}
        />
                <Stack.Screen
                options={{
                  headerRight:()=> <Cart_element/>
                }}
            name = "All Products" component={All_page}
            
        />
 
         <Stack.Screen
            name = "Shipping" component={Shipping}
        />
         <Stack.Screen
            name = "login" component={Login}
        />
          <Stack.Screen
            name = "Register" component={Register}
        />
         <Stack.Screen
            name = "Searchbar" component={SearchBar}
            
        />
    </Stack.Navigator>
    
  )
}
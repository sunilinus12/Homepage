
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Sidebar from '../pages/Sidebar';

 import Home from "../pages/Home"
import Mystack from './Mystack';
const Drawer = createDrawerNavigator();

export default function Mydrawer() {


    return (
        <Drawer.Navigator  
        drawerContent={props => <Sidebar {...props} />}
            initialRouteName="Hom"
        >
            <Drawer.Screen 
            options={{
                headerShown:false
            }}
            name="Hom" component={ Mystack} />



        </Drawer.Navigator>
    )
}
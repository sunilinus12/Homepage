import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

import Mystack  from './routes/Mystack';

export default function App() {
  return (
    <PaperProvider>

     <NavigationContainer>
      <Mystack/>
    </NavigationContainer>
    </PaperProvider>

  )
}
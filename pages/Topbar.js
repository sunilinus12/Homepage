import { View, Text, Image, Dimensions, } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name='bars' size={30} color="black" />;
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

export default function Topbar() {
  const navigation = useNavigation();
  const hello = () => {
    navigation.openDrawer();
  }


  const _handleSearch = () => navigation.navigate("Searchbar");

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header style={styles.bottom}>
      <Appbar.Action icon={require('../images/bar2.png')} size={17} onPress={hello} />

      <Image
        source={require('../images/logo.png')}
        resizeMode='center'
        style={{ height: (Dimensions.get("screen").height - 750) / 2, width: "20%" }}
      />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />

      {/* <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
     <TouchableWithoutFeedback onPress={()=>{navigation.navigate("Cart")}}>
     <View style={{width: 18, height: 18, backgroundColor: "white", marginRight: "4%" }}>
        <Image
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
          source={require("../images/cart.png")}
        />
       
      </View>
     </TouchableWithoutFeedback>
    </Appbar.Header>
  )
}


const styles = StyleSheet.create({
  bottom: {

    backgroundColor: 'black',
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
import { ScrollView, StyleSheet, Text, View, Image, TextInput, useState, Alert, Button, TouchableHighlight } from 'react-native'
import React from 'react'
import Slider from './components/Slider'


export default function Product({ navigation }) {
  const [number, onChangeNumber] = React.useState("1");
  const [engrave_data, onChangeData] = React.useState(null);
  const ProductData = [
    {
      title: "Hue Ring",
      res: require("../images/products/hue_ring.webp"),
      cost: "Rs.1499"
  },
  {
      title: "Zodiac Pendant",
      res: require("../images/products/zodiac_pendant.webp"),
      cost: "Rs.1199"

  }
  ,
  {
      title: "Emperor Locket",
      res: require("../images/products/emperor_locket.webp"),
      cost: "Rs.899"

  },
  {
      title: "Classic Stature",
      res: require("../images/products/classic_stature.webp"),
      cost: "Rs.2999"

  },
  {
      title: "Everton Watch",
      res: require("../images/products/everton_watch.webp"),
      cost: "Rs.6999"

  }
  ];
  const check = (value) => {
    if (value >= 100) {
      onChangeNumber("100");
    }
    else {
      onChangeNumber(value);
    }

  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <Slider />
      <View style={{ flex: 1, paddingVertical: "5%" }}>
        <Text style={styles.productpage_head}>Personalised Classic Bracelet</Text>
        <Text style={styles.productpage_head}>Rs.1499</Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row' }}>

        <View style={{ flex: 2, flexDirection: 'row' }}>
          <Image style={styles.ratingimg}

            source={require("../images/star-2.webp")}
          />
          <Text>(404 reviews)</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: '700', flexWrap: 'wrap', color: 'red' }}>Write a review</Text>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: 'gray',
          paddingVertical: 8,
          marginHorizontal: 10,
          borderBottomWidth: 1,
        }}
      />

      <View style={{ flex: 1, padding: 10 }}>
        <Text>Quantity</Text>
        <TextInput style={{ width: "10%", padding: 5, marginVertical: 7 }}

          onChangeText={check}
          value={number}
          placeholder=""
          backgroundColor="#d1d1cc"
          keyboardType="numeric"
          maxLength={3}
        />
        <Text>Text To Be Engraved</Text>
        <TextInput style={styles.input}

          onChangeText={onChangeData}
          value={engrave_data}

          backgroundColor="#d1d1cc"
          placeholder="Eg. RAHUL AYESHA"


        />




      </View>

      <View style={{ flex: 1 }} >
        <Button
          paddingVertical="0"

          color={"red"}


          title="ADD TO CART"
        />
      </View>
      <View style={{ flex: 1, flexDirection: 'row', padding: 10 }}>

        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: "700", fontSize: 16, color: "black" }} > Avalability</Text>
        </View>
        <View style={{ flex: 1, color: "black" }}>
          <Text> In Stock</Text>
        </View>


      </View>
      <View style={{ flex: 1, padding: 10 }}>
        <Text style={{ fontWeight: "700", fontSize: 16, color: "black" }}>Product Description</Text>
        <Text style={{ color: 'black' }}>
          This personalised kada is made with stainless steel for that everlasting durability. Versatility is exemplified with our personalised kada's adjustable design. Suitable for both men and women, this kada can be customized with your name or initials' engraving.

        </Text>
        <Text style={{ fontWeight: "700", fontSize: 16, color: 'black' }}>
          FEATURES
        </Text>

        <Text style={{ color: 'black' }}>Grade 304 stainless steel</Text>
        <Text style={{ color: 'black' }}>Engraved Name Customization</Text>
        <Text style={{ color: 'black' }}>Unisex - Suitable for men and women</Text>
        <Text style={{ color: 'black' }}>Fully adjustable to fit any size perfectly</Text>
        <Text style={{ color: 'black' }}>Non-Toxic</Text>
        <Text style={{ color: 'black' }}>Glossy silver finish</Text>
        <Text style={{ color: 'black' }}>Goes with every outfit</Text>

        <Text style={{ fontWeight: "700", fontSize: 16, color: 'black' }}>DETAILS</Text>
        <Text style={{ color: 'black' }}>Package contents - One personalised silver kada in a box</Text>
        <Text style={{ color: 'black' }}>Name engraved at the center</Text>
        <Text style={{ color: 'black' }}>Colour - Silver</Text>



      </View>
      <TouchableHighlight
        onPress={() => { navigation.push("Product Description") }}
        style={{ width: "100%", backgroundColor: 'rgba(0,0,0,0.7)', padding: 10, marginTop: "-16%", }}
      >
        <Text style={{ textAlign: "center", fontWeight: "700", color: "white", padding: 5, fontSize: 16 }}>VIEW FULL DESCRIPTION</Text>
      </TouchableHighlight>

      {/* recently viewed part */}
      <View style={{ flex: 1, marginVertical: 10, padding: 10 }}>
        <Text style={{ fontWeight: "700", fontSize: 16 }}>Recently Viewed</Text>
        {/* going to add list */}

        <View style={{ flex: 1, marginVertical: 5, marginTop: 15 }}>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >

            {
              ProductData.map((item, key) => {
                return (
                  <View style={styles.outdiv}>
                    <View style={styles.inner}>
                      <Image

                        style={{ resizeMode: 'cover', width: '100%', height: '100%' }}
                        source={item.res}
                      />


                    </View>
                    <Text  style={styles.nn}>{item.title}</Text>
                    <Text style={styles.amt}>{item.cost}</Text>


                  </View>

                )
              })
            }



          </ScrollView>
        </View>

      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  productpage_head: {
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
  },
  ratingimg: {
    width: "50%",
    height: 25,



  },
  input: {
    width: "100%", padding: 10
    , marginVertical: 7
  }
  ,
  nn: { textAlign: 'center', color: 'black' },

  amt: { textAlign: 'center', color: 'black', fontWeight: '4 00', },
  wnh: { textAlign: 'center', color: 'black', },
  box: {
    height: 120, width: 110,
    padding: 1, flex: 1,
  },
  inner: {
    height: 140, width: 130,
    backgroundColor: 'yellow',
  },
  outdiv: {
    height: '100%', width: 130, marginHorizontal: 3,
    padding: 1, flex: 1,
  },
  con: {
    flex: 1, backgroundColor: 'red',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',

    justifyContent: 'center',
  },

});

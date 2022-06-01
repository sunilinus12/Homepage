import { View, Text, ScrollView, StyleSheet,Image } from 'react-native'
import React from 'react'

export default function Product_Description() {
  return (
    <ScrollView>
      <View style={{ padding: 10 }}>

        <Text style={styles.p}>This personalised kada is made with stainless steel for that everlasting durability. Versatility is exemplified with our personalised kada's adjustable design. Suitable for both men and women, this kada can be customized with your name or initials' engraving.
        </Text>

        <Text style={{ fontWeight: "600", fontSize: 16, paddingVertical: 10,color:"black" }}>FEATURES
        </Text>
        <Text style={styles.p}>Grade 304 stainless steel</Text>
        <Text style={styles.p}>Engraved Name Customization</Text>
        <Text style={styles.p}>Unisex - Suitable for men and women</Text>
        <Text style={styles.p}>Fully adjustable to fit any size perfectly</Text>
        <Text style={styles.p}>Non-Toxic</Text>
        <Text style={styles.p}>Glossy silver finish</Text>
        <Text style={styles.p}>Goes with every outfit</Text>
        <Text style={{ fontWeight: "600", fontSize: 16, paddingVertical: 10,color:"black" }}>DETAILS

        </Text>
        <Text style={styles.p} >Package contents - One personalised silver kada in a box</Text>
        <Text style={styles.p} >Name engraved at the center</Text>
        <Text style={styles.p} >Colour - Silver</Text>
        <Text style={styles.p} >Material - Steel</Text>
        <Text style={styles.p} >Thickness - 2 mm</Text>
        <Text style={styles.p} >Country of origin - India</Text>


        <Text style={{ fontWeight: "600", fontSize: 16, paddingVertical: 10,color:"black" }}>SIZING


        </Text>

        <Text style={styles.p}> One size fits all - 15.5 cm x 0.6 cm x 0.2 cm</Text>
        <Text style={styles.p}> Pull or push from both sides to fit your wrist</Text>



        <Text style={{ fontWeight: "600", fontSize: 16, paddingVertical: 10,color:"black" }}>ETCHCRAFT EMPORIUM GUARANTEE
        </Text>
        <Text style={styles.p}>Free shipping</Text>
        <Text style={styles.p}>All orders are carefully packed and shipped from our warehouse</Text>
        <Text style={styles.p}>Delivery time - You should receive it in 4-7 days</Text>




        <Text style={{ fontWeight: "600", fontSize: 16, paddingVertical: 10,color:"black" }}>PACKED WITH LOVE

        </Text>
        <Text style={styles.p}>Every order is delivered with a premium compact box so that it is easy to store it while you're traveling.</Text>

        <View style={{ alignItems:"center" }}>
                <Image
                  style={{resizeMode:"center"}}
                  source={require("../images/s-1.jpg")}
                />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  p: {
    color: 'black', fontWeight: "400"
  }
})
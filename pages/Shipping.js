import { View, Text,ScrollView } from 'react-native'
import React from 'react'

export default function Shipping() {
  return (
    <ScrollView style={{ backgroundColor: "black" }}>
    <View style={{ padding: "15%", backgroundColor: "black" }}>
        <Text style={{ color: "white", fontSize: 25, fontWeight: "300", textAlign: "center" }}> SHIPPING        </Text>
        <Text style={{ color: "white", fontSize: 26, fontWeight: "600", textAlign: "left", marginTop: "25%" }}>
            Shipping
        </Text>
        <Text style={{ color: "white", fontSize: 16, fontWeight: "400", marginTop: "15%" }}>
            Standart Shipping Sitewide
            through Bluedart/Delhivery is ree, usually delievered in 2-4 days.For internation delieveries,kindly contact us on Whatsapp.
        </Text>



    </View>
</ScrollView>
  )
}
import { View, Text, TextInput, ScrollView } from 'react-native'
import React from 'react'

export default function About() {
    return (
        <ScrollView style={{ backgroundColor: "black" }}>
            <View style={{ padding: "15%", backgroundColor: "black" }}>
                <Text style={{ color: "white", fontSize: 25, fontWeight: "300", textAlign: "center" }}>ABOUT US</Text>
                <Text style={{ color: "white", fontSize: 16, fontWeight: "400", marginTop: "15%" }}>EtchcraftEmporium.in is an online shopping portal made to provide you quality car accessories. We want you to have a streamlined shopping experience and that is our goal.</Text>
                <Text style={{ color: "white", fontSize: 16, fontWeight: "400", marginTop: "15%" }}>
                    Our business is located in Delhi, India. We have been selling various consumer products offline since 2001. EtchcraftEmporium.in, founded in 2016, is a new field for us and our need to give you quality is at utmost high.</Text>
                <Text style={{ color: "white", fontSize: 16, fontWeight: "400", marginTop: "15%" }}>Our team has more than 20 people managing your orders and helping you to get what you need at the lowest price possible.</Text>
                <Text style={{ color: "white", fontSize: 16, fontWeight: "400", marginTop: "15%" }}>Address - Shop no. 7A, 24-Sri Ram Road, Civil Lines, Delhi . 110054

                </Text>
                <Text style={{ color: "white", fontSize: 16, fontWeight: "400", marginTop: "15%" }}>If any issues you may have, you can mail us at - sales@etchcraftemporium.in
                </Text>


            </View>
        </ScrollView>
    )
}
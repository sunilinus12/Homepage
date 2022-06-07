import { ScrollView, Text, TextInput, View, Button } from 'react-native'
import React from 'react'
import { useState } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';


export default function Contact() {
    const [text, onChangeText] = React.useState(null);
    const [text1, onChangeText1] = React.useState(null);
    const [text2, onChangeText2] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);

    return (
        <ScrollView style={{backgroundColor:"black"}}>
            <View style={{ padding: "15%", backgroundColor: "black" }}>
                <Text style={{ color: "white", fontSize: 25, fontWeight: "300", textAlign: "center" }}>CONTACT US</Text>
                <Text style={{ color: "white", fontSize: 23, fontWeight: "400", marginTop: "17%" }}>Need help? Our team is always ready!</Text>
                <Text style={{ color: "white", fontSize: 15, fontWeight: "400", marginTop: "5%" }}>Email us with your query at sales@etchcraftemporium.in</Text>
                <Text style={{ color: "white", fontSize: 15, fontWeight: "400", marginTop: "15%" }}>Whatsapp us at +919818151452</Text>
                <Text style={{ color: "white", fontSize: 15, fontWeight: "400", marginTop: "15%" }}>Or....</Text>
                <Text style={{ color: "white", fontSize: 15, fontWeight: "400", marginTop: "15%" }}>You can always visit one of our gorgeous stores in Delhi:</Text>
                <Text style={{ color: "white", fontSize: 15, fontWeight: "400", marginTop: "15%" }}>Shop no. 7A, 24-Sri Ram Road, Civil Lines, Delhi - 110054</Text>
                <Text style={{ color: "white", fontSize: 15, fontWeight: "400", marginTop: "15%" }}>No. 33, 34 UB, Bungalow Rd, Jawahar Nagar, Kamla Nagar, Delhi, 110007</Text>
                <TextInput
                    style={{ width: "100%", height: 40, backgroundColor: "white", marginTop: "25%" }}
                    placeholder="Name"
                    onChangeText={onChangeText}
                    value={text}
                />
                <TextInput
                    style={{ width: "100%", height: 40, backgroundColor: "white", marginTop: "5%" }}
                    placeholder="Email"
                    onChangeText={onChangeText1}
                    value={text1}
                />
                <TextInput
                    style={{ width: "100%", height: 40, backgroundColor: "white", marginTop: "5%" }}
                    placeholder="Phone Number"
                   onChangeText={onChangeNumber}
                    value={number} keyboardType="numeric"
                />
                <TextInput
                    style={{ width: "100%", height: 100, backgroundColor: "white", marginTop: "5%", marginBottom: "10%", }}
                    placeholder="Message"
                    multiline={true}
                    numberOfLines={10}


                    onChangeText={onChangeText2}
                    value={text2}
                />
                
                <TouchableHighlight activeOpacity={1}   underlayColor="#DDDDDD"
>
                <View style={{ backgroundColor: "white", height: 40, width: "100%", justifyContent: "center" }}>
                        <Text style={{ color: "black", textAlign: "center", letterSpacing: 1 }}>SEND</Text>
                    </View>
                
                </TouchableHighlight>

            </View>
        </ScrollView>
    )
}
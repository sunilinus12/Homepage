import { View, Text, ScrollView } from 'react-native'
import React from 'react'

export default function Returns() {
    return (
        <ScrollView style={{ backgroundColor: "black" }}>
            <View style={{ padding: "15%", backgroundColor: "black" }}>
                <Text style={{ color: "white", fontSize: 25, fontWeight: "300", textAlign: "center" }}> RETURNS
                </Text>
                <Text style={{ color: "white", fontSize: 26, fontWeight: "600", textAlign: "left", marginTop: "25%" }}>
                    Return Conditions
                </Text>
                <Text style={{ color: "white", fontSize: 16, fontWeight: "400", marginTop: "15%" }}>
                    You have 7 days from delivery to decide if an item is right for you. We’ll gladly accept non-fitting or any defective product purchased on EtchcraftEmporium.in for return.
                    Please note that the courier charges will be borne by the customer in case of return.
                </Text>

                <Text style={{ color: "white", fontSize: 26, fontWeight: "600", textAlign: "left", marginTop: "25%" }}>
                    How to Return

                </Text>
                <Text style={{ color: "white", fontSize: 16, fontWeight: "400", marginTop: "15%" }}>
                    Steps are easy to follow:{"\n\n"}
                    1. Start your return by emailing us with your order number and the reason (You can also whatsapp us) .{"\n"}{"\n"}
                    2. Securely pack the item(s) in a box or envelope of your choice. Please write your order # on the outside of the package.{"\n"}{"\n"}
                    3. Mail your return package using a traceable carrier.{"\n"}{"\n"}
                    4. Once we receive your package, we’ll promptly process your return.{"\n"}{"\n"}
                    Alternatively, you may also visit our store in Civil Lines, Delhi to return the product:{"\n"}{"\n"}
                    Shop no. 7A, 24-Sri Ram Rd, Civil Lines, Delhi - 110054
                </Text>

                <Text style={{ color: "white", fontSize: 26, fontWeight: "600", textAlign: "left", marginTop: "25%" }}>
                Refunds
                </Text>
                <Text style={{ color: "white", fontSize: 16, fontWeight: "400", marginTop: "15%" }}>
                Returns will be processed within 1 business day upon receipt of your package. The refund will be issued to the same payment account within 3 business days you used for the original purchase per your request. In case of COD payments, payments will be sent via IMPS/Gpay/Paytm/Phonepe
                </Text>


            </View>
        </ScrollView>
    )
}
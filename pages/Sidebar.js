import { View, Text, Image, Dimensions, TouchableWithoutFeedback,ScrollView } from 'react-native'
import React from 'react'
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';

export default function Sidebar({ navigation }) {
    const bracelets = [
  
        {
            title: "Personalised Classic Bracelet",
            res: require("../images/women/personalised_classic.jpg"),
            cost: "Rs.1499"
      
        }
        ,
        {
            title: "Personalised Evil Eye Bracelet",
            res: require("../images/women/personalised_evil_eye.jpg"),
            cost: "Rs.1499"
      
        },
        {
            title: "Personalised Signature Bracelet",
            res: require("../images/women/personalised_signature.jpg"),
            cost: "Rs.3999"
      
        },
        {
            title: "Personalised Silver Kada",
            res: require("../images/men/personalised_silver_kada.webp"),
            cost: "Rs.990"
      
        }
      ];
      const pendants = [
        {
            title: "Personalised Cuboid Pendant",
            res: require("../images/women/personalised_cuboid.jpg"),
            cost: "Rs.1199"
        },
      
      
    ];
    const Men_bracelt = [
        
       
        {
            title: "Personalised Silver Kada",
            res: require("../images/men/personalised_silver_kada.webp"),
            cost: "Rs.1399"

        }
    ];
    const category = ['All products', 'women', 'home', 'office', 'help'];
    const links = ['Cart', 'Whishlist', 'Notifications', 'About us', 'Contact us'];
    const [plus,setPlus]=React.useState("+");
    const run=()=>{
        if(plus=="+"){
            setPlus("-");
        }
        else{
            setPlus("+");
        }
    }

    return (
       <ScrollView style={{flex:1,backgroundColor:"white"}} showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ flex: 0.3, backgroundColor: "black", alignItems: "center" }}>
                <Image
                    style={{ margin: "12%", width: 30 / 100 * (Dimensions.get("screen").width), height: 12 / 100 * (Dimensions.get("screen").height), backgroundColor: "whitesmoke", borderRadius: 50 }}
                    source={require("../images/user_icon.png")}
                    resizeMode="contain"
                />
                <Text style={{ color: "white", fontSize: 20,marginBottom:"10%" }}>
                    <TouchableWithoutFeedback onPress={()=>{navigation.navigate("login")}} >
                    <Text style={{ color: "white", fontSize: 20 }}>Sign In</Text> 
                    </TouchableWithoutFeedback> / 
                    <TouchableWithoutFeedback onPress={()=>{navigation.navigate("Register")}} >
                    <Text style={{ color: "white", fontSize: 20 }}> Sign Up</Text> 
                    </TouchableWithoutFeedback>
                    </Text>
            </View>
            <View style={{ flex: 0.7, backgroundColor: "white", padding: 7 }}>
                <Text style={{ letterSpacing: 1, color: "#A9A9A9" }}>Shop by Category</Text>
                <TouchableWithoutFeedback onPress={()=>{navigation.navigate("All Products")}}>
                <Text style={{ color: "black", letterSpacing: 1, marginLeft: 7, fontSize: 15, marginVertical: 10, textTransform: "capitalize" }}>All Products</Text>   
                </TouchableWithoutFeedback>
                <Collapse>
                    <CollapseHeader  >
                       
                       <View style={{position:"relative"}}>
                            <Text style={{color: "black", letterSpacing: 1, marginLeft: 7, fontSize: 15, marginVertical: 10, textTransform: "capitalize" }}>Men </Text>
                            <Text style={{position:"absolute" ,right:20,top:"35%",color:"black"}}>+</Text>
                        </View>
                       
                    </CollapseHeader>
                    <CollapseBody>
                    <TouchableWithoutFeedback onPress={() => { navigation.navigate("Collection Page",Men_bracelt) }}><Text style={{ color: "black", marginLeft: 20, fontSize: 15, letterSpacing: 1, marginVertical: 7 }}>Bracelets</Text></TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => { alert("This cateory doesn't have items ")  }}><Text style={{ color: "black", marginLeft: 20, fontSize: 15, letterSpacing: 1, marginVertical: 7 }}>Car Keychains</Text></TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => { alert("This cateory doesn't have items ") }}><Text style={{ color: "black", marginLeft: 20, fontSize: 15, letterSpacing: 1, marginVertical: 7 }}>Bike Keychains</Text></TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => { alert("This cateory doesn't have items ")  }}><Text style={{ color: "black", marginLeft: 20, fontSize: 15, letterSpacing: 1, marginVertical: 7 }}>Car Cushion cover</Text></TouchableWithoutFeedback>
                        
                        <TouchableWithoutFeedback onPress={() => { alert("This cateory doesn't have items ")  }}><Text style={{ color: "black", marginLeft: 20, fontSize: 15, letterSpacing: 1, marginVertical: 7 }}>Clocks</Text></TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => { alert("This cateory doesn't have items ")  }}><Text style={{ color: "black", marginLeft: 20, fontSize: 15, letterSpacing: 1, marginVertical: 7 }}>Diaries</Text></TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => { alert("This cateory doesn't have items ")  }}><Text style={{ color: "black", marginLeft: 20, fontSize: 15, letterSpacing: 1, marginVertical: 7 }}>Art</Text></TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => { alert("This cateory doesn't have items ")  }}><Text style={{ color: "black", marginLeft: 20, fontSize: 15, letterSpacing: 1, marginVertical: 7 }}>Wallets</Text></TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => { alert("This cateory doesn't have items ")  }}><Text style={{ color: "black", marginLeft: 20, fontSize: 15, letterSpacing: 1, marginVertical: 7 }}>Belts</Text></TouchableWithoutFeedback>

                    </CollapseBody>
                </Collapse>


                <Collapse>
                    <CollapseHeader>
                    <View style={{position:"relative"}}>
                            <Text style={{color: "black", letterSpacing: 1, marginLeft: 7, fontSize: 15, marginVertical: 10, textTransform: "capitalize" }}>Women </Text>
                            <Text style={{position:"absolute" ,right:20,top:"35%",color:"black"}}>+</Text>
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        <TouchableWithoutFeedback onPress={() => { navigation.navigate("Collection Page",bracelets)  }}><Text style={{ color: "black", marginLeft: 20, fontSize: 15, letterSpacing: 1, marginVertical: 7 }}>Bracelets</Text></TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => { navigation.navigate("Collection Page",pendants) }}><Text style={{ color: "black", marginLeft: 20, fontSize: 15, letterSpacing: 1, marginVertical: 7 }}>Pendants</Text></TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => { alert("This cateory doesn't have items ")  }}><Text style={{ color: "black", marginLeft: 20, fontSize: 15, letterSpacing: 1, marginVertical: 7 }}>Art</Text></TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => { alert("This cateory doesn't have items ")  }}><Text style={{ color: "black", marginLeft: 20, fontSize: 15, letterSpacing: 1, marginVertical: 7 }}>Keychains</Text></TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => { alert("This cateory doesn't have items ")  }}><Text style={{ color: "black", marginLeft: 20, fontSize: 15, letterSpacing: 1, marginVertical: 7 }}>Clocks</Text></TouchableWithoutFeedback>
                    </CollapseBody>
                </Collapse>


                <Collapse>
                    <CollapseHeader>
                    <View style={{position:"relative"}}>
                            <Text style={{color: "black", letterSpacing: 1, marginLeft: 7, fontSize: 15, marginVertical: 10, textTransform: "capitalize" }}>Office </Text>
                            <Text style={{position:"absolute" ,right:20,top:"35%",color:"black"}}>+</Text>
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        <TouchableWithoutFeedback onPress={() => { alert("This cateory doesn't have items ")  }}><Text style={{ color: "black", marginLeft: 20, fontSize: 15, letterSpacing: 1, marginVertical: 7 }}>Clocks</Text></TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => { alert("This cateory doesn't have items ") }}><Text style={{ color: "black", marginLeft: 20, fontSize: 15, letterSpacing: 1, marginVertical: 7 }}>Diaries</Text></TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => { alert("This cateory doesn't have items ")  }}><Text style={{ color: "black", marginLeft: 20, fontSize: 15, letterSpacing: 1, marginVertical: 7 }}>Art</Text></TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => { alert("This cateory doesn't have items ")  }}><Text style={{ color: "black", marginLeft: 20, fontSize: 15, letterSpacing: 1, marginVertical: 7 }}>Keychains</Text></TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => { alert("This cateory doesn't have items ")  }}><Text style={{ color: "black", marginLeft: 20, fontSize: 15, letterSpacing: 1, marginVertical: 7 }}>Wallets</Text></TouchableWithoutFeedback>
                    </CollapseBody>
                </Collapse>

                <Collapse>
                    <CollapseHeader>
                        <View>
                        <View style={{position:"relative"}}>
                            <Text style={{color: "black", letterSpacing: 1, marginLeft: 7, fontSize: 15, marginVertical: 10, textTransform: "capitalize" }}>Help</Text>
                            <Text style={{position:"absolute" ,right:20,top:"35%",color:"black"}}>+</Text>
                        </View>
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        <TouchableWithoutFeedback onPress={() => { navigation.navigate("Shipping") }}><Text style={{ color: "black", marginLeft: 20, fontSize: 15, letterSpacing: 1, marginVertical: 7 }}>Shipping</Text></TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => { navigation.navigate("Returns") }}><Text style={{ color: "black", marginLeft: 20, fontSize: 15, letterSpacing: 1, marginVertical: 7 }}>Returns</Text></TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => { navigation.navigate("Contact us") }}><Text style={{ color: "black", marginLeft: 20, fontSize: 15, letterSpacing: 1, marginVertical: 7 }}>Contact Us</Text></TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => { navigation.navigate("About us") }}><Text style={{ color: "black", marginLeft: 20, fontSize: 15, letterSpacing: 1, marginVertical: 7 }}>About Us</Text></TouchableWithoutFeedback>

                    </CollapseBody>
                </Collapse>

                {/* {
                    category.map((item, key) => {
                        return (
                            <Text style={{ letterSpacing: 1, marginLeft: 7, fontSize: 15, marginVertical:"3.5%", textTransform: "capitalize" }} key={key}>{item}</Text>
                        )
                    })
                } */}

                <Text style={{ letterSpacing: 1, color: "#A9A9A9", marginTop: "4%", marginBottom: "2.5%" }}>Quick Links</Text>
                {
                    links.map((item, key) => {
                        return (
                            <TouchableWithoutFeedback onPress={() => { navigation.navigate(item) }} key={key}>
                                <Text style={{ letterSpacing: 1,color:"black", marginLeft: 7, fontSize: 14, marginVertical: "3.5%", textTransform: "capitalize" }} >{item}</Text>
                            </TouchableWithoutFeedback>
                        )
                    })
                }



            </View>


        </View>
       </ScrollView>
    )
}
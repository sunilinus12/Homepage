import { ScrollView, Text, View, Image, Dimensions, ImageBackground } from 'react-native'
import React from 'react'


const collection = [
    {
      title: "Personalised Cuboid Pendant",
      res: require("../images/women/personalised_cuboid.jpg"),
      cost: "Rs.1199"
  },
  {
      title: "Personalised Classic Bracelet",
      res: require("../images/women/personalised_classic.jpg"),
      cost: "Rs.1499"

  }
  ,
    {
      title: "Personalised Silver Kada",
      res: require("../images/men/personalised_silver_kada.webp"),
      cost: "Rs.1399"

    }
  ]
export default function Wishlist() {
  return (
    <ScrollView>
        <View style={{ flex: 1,backgroundColor:"white", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-start", padding: 1 }}>

          {
            collection.map((item, key) => {
              return (

           
                  <View key={key} style={{ position:"relative", width: "50%", height: 35 / 100 * Dimensions.get("screen").height, backgroundColor: "white",borderBottomColor:"#C5C5C5",borderRightColor:"#C5C5C5",borderBottomWidth:1,borderRightWidth:1}}
                
                >
                    <Image style={{position:"absolute",top:10,right:15,width:20,height:20,}}
                    source={require("../images/wishlist.webp")}
                     />
                  <View style ={{width:"100%",height:"80%",padding:1}}>
                      
                    <ImageBackground
                      resizeMode='contain'
                      style={{ width: "100%", height: "100%", marginVertical: "10%" }}
                      source={item.res}
                    />
                  </View>

                  <View style={{backgroundColor:"white",flex:1 ,paddingTop:"8%",paddingHorizontal:4}}>
                      <Text numberOfLines={1} style={{color:"black"}}>{item.title}</Text>
                      <Text style={{fontWeight:"600",color:"black",textAlign:"center"}}>{item.cost}</Text>
                  </View>


                </View>
           
              )
            })
          }



        </View>
      </ScrollView>
  )
}
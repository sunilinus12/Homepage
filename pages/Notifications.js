import { View, Text, ScrollView,Dimensions ,Image} from 'react-native'
import React from 'react'

export default function Notifications() {
    const data=[
        {
          title:"Deal of the Day!",
          content:"Our elegant Leaf Pendant is up for grabs at Rs.699,today only!"  
        },
        {
            title:"Deal of the Day 2!",
            content:"Our elegant Leaf Pendant is up for grabs at Rs.699,today only!"  
          },
          {
            title:"Deal of the Day3!",
            content:"Our elegant Leaf Pendant is up for grabs at Rs.699,today only!"  
          },
          {
            title:"Deal of the Day4!",
            content:"Our elegant Leaf Pendant is up for grabs at Rs.699,today only!"  
          },
          {
            title:"Deal of the Day5!",
            content:"Our elegant Leaf Pendant is up for grabs at Rs.699,today only!"  
          }
          ,
          {
            title:"Deal of the Day6!",
            content:"Our elegant Leaf Pendant is up for grabs at Rs.699,today only!"  
          },
          {
            title:"Deal of the Day7!",
            content:"Our elegant Leaf Pendant is up for grabs at Rs.699,today only!"  
          },
          {
              title:"Deal of the Day 8!",
              content:"Our elegant Leaf Pendant is up for grabs at Rs.699,today only!"  
            },
            {
              title:"Deal of the Day 9!",
              content:"Our elegant Leaf Pendant is up for grabs at Rs.699,today only!"  
            },
            {
              title:"Deal of the Day 10!",
              content:"Our elegant Leaf Pendant is up for grabs at Rs.699,today only!"  
            },
            {
              title:"Deal of the Day 11!",
              content:"Our elegant Leaf Pendant is up for grabs at Rs.699,today only!"  
            }
            ,
            {
              title:"Deal of the Day 12!",
              content:"Our elegant Leaf Pendant is up for grabs at Rs.699,today only!"  
            }
    ]
    return (
        <ScrollView style={{flex:1,padding:5}}>
         {
             data.map((item,key)=>{
                 return(
                    <View key={key} style={{padding:4,flexDirection:"row",width:"100%",height:7/100 *Dimensions.get("screen").height,backgroundColor:"whitesmoke",marginVertical:3}}>
                    <View style={{width:"15%",height:"100%",backgroundColor:"white",justifyContent:"center",alignItems:"center"}}>
                                <Image
                                style={{width:"50%",height:"50%"}}
                                source={require("../images/bell.png")}
                                resizeMode="contain"
                                />
                    </View>
                    <View style={{width:"85%",height:"100%",backgroundColor:"white"}}>
                        <Text style={{color:"black",fontSize:14}}>{item.title}</Text>
                        <Text style={{color:"black",fontSize:11}} numberOfLines={2}>{item.content}</Text>

                    </View>
            </View>
                 )
             })
         }
        </ScrollView>
    )
}
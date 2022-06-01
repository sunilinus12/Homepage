import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { SliderBox } from "react-native-image-slider-box"

export default class Slider extends Component {
    constructor() {
        super();
        this.state = {
          images: [
            "https://source.unsplash.com/1024x768/?bracelets",
            "https://source.unsplash.com/1024x768/?pandents",
            "https://source.unsplash.com/1024x768/?necklaces",
            "https://source.unsplash.com/1024x768/?car",
            "https://source.unsplash.com/1024x768/?watches",
            
          ]
        };
    }
  render() {
    return (
      <View>
         <SliderBox
          images={this.state.images}
        
        />
      </View>
    )
  }
}
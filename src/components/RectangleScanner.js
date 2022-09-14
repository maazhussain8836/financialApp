import { View, Text ,Image } from 'react-native'
import React ,{useRef } from 'react'
import Scanner from "react-native-rectangle-scanner"
import {launchCamera} from 'react-native-image-picker';
const RectangleScanner = () => {
    
  handleOnPictureProcessed = ({croppedImage, initialImage}) => {
    props.doSomethingWithCroppedImagePath(croppedImage);
    props.doSomethingWithOriginalImagePath(initialImage);
  }

  onCapture = () => {
    launchCamera.current.capture();
  }
  return (
    <View>
      <Scanner

        onPictureProcessed={this.handleOnPictureProcessed}
        ref={launchCamera}
        style={{flex: 1}}
      />
    </View>
  )
}

export default RectangleScanner
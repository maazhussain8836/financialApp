import { View, Text,Pressable } from 'react-native'
import React from 'react'
import {PESDK} from 'react-native-photoeditorsdk';
import ImagePicker from 'react-native-image-crop-picker';

const Filters = () => {
    const openEditor = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
            freeStyleCropEnabled: true,
            cropperActiveWidgetColor: '#424242',
            cropperStatusBarColor: '#424242',
            cropperToolbarColor: '#424242',
        }).then((image)=>{
            // console.log(image.path)
            let imageAlpha = image.path;
            PESDK.openEditor(imageAlpha).then(
                (result) => {
                  console.log(result);
                },
                (error) => {
                  console.log(error);
                },
              );

        })
        // Set up sample image
        // Set up configuration
      
   
      };

  return (
    <View>
    <Pressable onPress={openEditor}>
      <Text>Filters</Text>
      </Pressable>
    </View>
  )
}

export default Filters

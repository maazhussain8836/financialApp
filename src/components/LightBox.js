import React,{useState} from 'react'
import {
    View,
    Text,
    Button
  } from 'react-native';
import ImageView from "react-native-image-viewing";



const LightBox = () => {
const images = [
        {
          uri: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
        },
        {
          uri: "https://images.unsplash.com/photo-1573273787173-0eb81a833b34",
        },
        {
          uri: "https://images.unsplash.com/photo-1569569970363-df7b6160d111",
        },
];

const [visible, setIsVisible] = useState(true);


const onClick=()=>{
    // setIsVisible(visible)
    setIsVisible(true)
}
  return (
<View>
    <Button title='ciick to see image' onPress={onClick}/>
<ImageView
  images={images}
  imageIndex={1}
  visible={visible}
  onRequestClose={() => setIsVisible(false)}

/>
</View>
  )
}

export default LightBox


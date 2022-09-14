import { View, Text, TextInput,StyleSheet } from 'react-native'
import React from 'react'
const CustomInputs = ({value,setValue,placeholder,secureTextEntry,keyboardType}) => {
  return (
    <>
    <View style={{position:'relative'}}>
    
      <TextInput style={style.inpurText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      value={value}
      keyboardType={keyboardType}
      onChangeText={setValue}
      placeholderTextColor='#4D4D4D' />
      
    </View>
    </>
  )
}
const style=StyleSheet.create({
    inpurText:{
      borderWidth:1,
      fontSize:17,
      padding:15,
      borderColor:'#808080',
      marginLeft:'auto',
      marginRight:'auto',
      width:'100%',
      
      
    }
})
export default CustomInputs
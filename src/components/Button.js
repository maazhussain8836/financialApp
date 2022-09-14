import { View, Text,StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import React from 'react'

const Button = ({text}) => {
  return (
    <View >
       <LinearGradient colors={['#257ABA', '#145D94', '#003C69']} 
       start={{x: 0, y: 0}} end={{x: 1, y: 0}}style={styles.btnV}>
       <Text style={styles.btntext}>{text}</Text>
       </LinearGradient> 
      
    </View>
  )
}

const styles=StyleSheet.create({
    btnV:{
        marginTop:'6%',
        padding:12,
        width:'100%',
        marginLeft:'auto',
        marginRight:'auto',
        
    },
    btntext:{
        
        marginLeft:'auto',
        marginRight:'auto',
        fontWeight:'600',
        color:'#FFFFFF',
        fontSize:17,
        
    }
})
export default Button
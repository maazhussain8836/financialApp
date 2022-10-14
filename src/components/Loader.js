import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView,Dimensions  } from 'react-native';
import { moderateScale } from 'react-native-size-matters';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Loader = ({navigation}) => {
    return(
        <View style={styles.cont}>
        
            <Image
                style={styles.logo}
                source={require('../assets/images/loader.gif')}
            />
            
            
        </View>
    )
} 

export default Loader;

const styles = StyleSheet.create({
    logo: {
    width: moderateScale(80,0.1),
    height: moderateScale(88,0.1),
    position:'absolute',
    // top:280,
    // left:140,
    // bottom:0,
    // right:0,
    justifyContent:'center',
    marginLeft:'auto',
    marginRight:'auto',
    // zIndex:1
    

    //   backgroundColor:'#000'
    },
    cont:{
        backgroundColor:'#FFF',
        opacity:0.7,
        position:'absolute',
        zIndex:111,
        top:0,
        left:0,
        bottom:0,
        right:0,
        flex:1,
        height:windowHeight,
        width:windowWidth,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    }
  });
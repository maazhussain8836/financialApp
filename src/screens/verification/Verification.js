import {View, Text, Image, StyleSheet,Pressable} from 'react-native';
import React from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Button from '../../components/Button';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Verification = ({navigation}) => {
  const onPressVerify=()=>{
    navigation.navigate('Taxpayer')
  }
  return (
    
    <View style={{flex: 1,
      position:'relative',
      backgroundColor:'#FFF',}}>

      <View style={{height: '26%',position:'absolute'}}>
        <Image
          source={require('../../assets/images/Group73.png')}
          style={styles.spheral}
        />
        <Image
          source={require('../../assets/images/Group67.png')}
          style={styles.email}
        />
      </View>

      <View
        style={{
          position:'absolute',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          top:250,
          left:10,          
          paddingHorizontal: '5%',
          alignItems: 'center',
          width: '90%',

        }}>
        <View>
          <Text
            style={{
              color: '#257ABA',
              fontSize: 22,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            Verify your email address
          </Text>
          <Text
            style={{textAlign: 'center', marginTop: '2%', color: '#999999'}}>
            we sent 4 digit code on you email to verify you email, put your OTP
            in this field.
          </Text>
        </View>

        <View style={{marginTop: '15%',width: '100%',}}>
          <OTPInputView
            pinCount={4}
            autoFocusOnLoad={false}
            
            style={{
              
              height: '35%',
              borderWidth: 1,
              borderColor: '#808080',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged = {code => { this.setState({code})}}
            
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            placeholderTextColor='#000'
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
          <Text
            style={{
              textAlign: 'center',
              marginTop: '4%',
              color: '#0071BC',
              fontSize:12,
              fontWeight: 'bold',
              textDecorationLine:'underline',
              
              
            }}>
            Resend Code
          </Text>
          <Pressable onPress={onPressVerify}>
          <Button text={'Verify'} />
          </Pressable>
        </View>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  spheral: {
   height:moderateScale(175), 
    width:moderateScale(390,0.1),
    
    position: 'absolute',
    
    
    
  },
  email: {
    height: moderateScale(85),
    width: moderateScale(85, 0.1),
    position: 'absolute',
    left: moderateScale(151, 0.1),
    top: moderateScale(127, 0.1),
  },

  borderStyleHighLighted: {
    borderColor: 'red',
  },

  underlineStyleBase: {
    width: 75,
    height: 40,
    borderWidth: 0,
    borderRightWidth: 1,
    fontSize:20,
    color:'#000',
  },

  underlineStyleHighLighted: {
    borderColor: 'gray',
  },
});
export default Verification;

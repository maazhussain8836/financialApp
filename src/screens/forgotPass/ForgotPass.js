import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Button from '../../components/Button';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CustomInputs from '../../components/CustomInputs';
import axiosconfig from '../../provider/axios';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {useState} from 'react';

const ForgotPass = ({navigation}) => {
  const [email, setEmail] = useState('');

  const onPressSend = () => {
    
    var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (!emailReg.test(email) || email==null || email=='') {
      alert('Invalid Email')
      return false
    }
    
    axiosconfig
      .post('forget', {
        email: email,
      })
      .then(res => {
        console.log(res);
        alert(res.data.message);
       
      });
    navigation.navigate('Verification', {
      emailForgot: email,
      type:'forgot'
    });
  };
  return (
    
    <View style={{flex: 1, backgroundColor: '#FFF',position:'relative'}}>
      <View style={{height: '26.5%',position:'absolute'}}>
        <Image
          source={require('../../assets/images/Group73.png')}
          style={styles.spheral}
        />
        <Image
          source={require('../../assets/images/Group65.png')}
          style={styles.email}
        />
      </View>

      <View
        style={{
          flex: 1,
          // display: 'flex',
          // flexDirection: 'column',
          // paddingTop: '4%',

          marginLeft: 'auto',
          marginRight: 'auto',
          paddingHorizontal: '5%',
          marginTop: '7%',
          alignItems: 'center',
          // justifyContent:'center',
          width: '100%',
          
          position:'absolute',
          top:220
        }}>
        <View style={{marginHorizontal: '11%'}}>
          <Text
            style={{
              color: '#257ABA',
              fontSize: 22,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            Forget Password
          </Text>
          <Text
            style={{textAlign: 'center', marginTop: '2%', color: '#999999'}}>
            Please enter your email address or phone number to change your
            Password.
          </Text>
        </View>

        <View style={{marginTop: '12%', width: '90%'}}>
          <View>
            <CustomInputs
              placeholder={''}
              value={email}
              setValue={e => setEmail(e)}
              secureTextEntry={false}
            />
            <View style={styles.placeholderTxt}>
              <Text style={styles.formText}>Email Address</Text>
            </View>
          </View>
          <Pressable onPress={onPressSend}>
            <Button text={'Send'} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  spheral: {
    height: moderateScale(180, 0.1),
    width: moderateScale(390, 0.1),
    position: 'absolute',
    left: moderateScale(-1, 0.1),
  },
  email: {
    height: moderateScale(100, 0.1),
    width: moderateScale(55, 0.1),
    position: 'absolute',
    left: moderateScale(166, 0.1),
    top: moderateScale(127, 0.1),
  },
  formText: {
    fontSize: 16,
    color: '#4D4D4D',
  },
  placeholderTxt: {
    padding: 3,
    position: 'absolute',
    left: 10,
    top: -16,
    backgroundColor: '#FFF',
  },
});
export default ForgotPass;

import {View, Text, Image, StyleSheet,Pressable} from 'react-native';
import React from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Button from '../../components/Button';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CustomInputs from '../../components/CustomInputs';

const ChangePass = ({navigation}) => {
    const [Username, setUsername] = '';
    const [Password, setPassword] = '';
    const onPress=()=>{
      navigation.navigate('Welcome')
    }
  return (
    <View style={{flex: 1}}>
    
      <View
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingHorizontal: '5%',
          paddingTop: '8%',
          alignItems: 'center',
          width: '100%',
          backgroundColor:'#FFF'
        }}>
        <View>
          <Text
            style={{
              color: '#257ABA',
              fontSize: 22,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            Change Password
          </Text>
          <Text
            style={{textAlign: 'center', marginTop: '2%', color: '#999999',paddingHorizontal:'9%'}}>
            Please enter your email address or phone
            number to change your Password.
          </Text>
        </View>

        <View style={{width:'100%',marginTop:'17%'}}>
        <View >  
        <CustomInputs
          placeholder={''}
          value={Password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <View style={styles.placeholderTxt}>
          <Text style={styles.formText}>New Password</Text>
        </View>
      </View>
      <View style={{marginTop: '6%'}}>
        <CustomInputs
          placeholder={''}
          value={Password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <View style={styles.placeholderTxt}>
          <Text style={styles.formText}>Confirm Password</Text>
        </View>
      </View>

        <View >
          <Pressable onPress={onPress}>
          <Button text={'Change'} />
          </Pressable>
        </View>
        </View> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
export default ChangePass;

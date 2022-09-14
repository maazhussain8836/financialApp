import {View, Text, Image, StyleSheet,Pressable} from 'react-native';
import React from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Button from '../../components/Button';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CustomInputs from '../../components/CustomInputs';

const ForgotPass = ({navigation}) => {
    const [Username, setUsername] = '';
    const onPress=()=>{
      navigation.navigate('ChangePass')
    }
  return (
    <View style={{flex: 1,backgroundColor:'#FFF'}}>
      <View style={{height: '26.5%'}}>
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
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '4%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingHorizontal: '5%',
          marginTop: '7%',
          backgroundColor:'#FFF',
          alignItems: 'center',
          width: '100%',
        }}>
        <View style={{marginHorizontal:'11%'}}>
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
            Please enter your email address or phone
            number to change your Password.
          </Text>
        </View>

        <View style={{marginTop: '12%',width:'90%'}}>
        <View >
        <CustomInputs
          placeholder={''}
          value={Username}
          setValue={setUsername}
          secureTextEntry={false}
        />
        <View style={styles.placeholderTxt}>
          <Text style={styles.formText}>Email Address</Text>
        </View>
      </View>
            <Pressable onPress={onPress}>
          <Button text={'Send'} />
          </Pressable>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  spheral: {
    width: '100%',
    height: '92%',
    position: 'relative',
  },
  email: {
    height: moderateScale(100,0.1),
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

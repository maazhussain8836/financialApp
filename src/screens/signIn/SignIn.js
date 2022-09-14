import {View, Text, TextInput, StyleSheet, Switch,Image,TouchableOpacity,Pressable} from 'react-native';
import React, {useState} from 'react';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Button from '../../components/Button';
import CustomInputs from '../../components/CustomInputs';
const SignIn = ({navigation}) => {
  const [Username, setUsername] = '';
  const [Password, setPassword] = '';
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const onPressForgot=()=>{
    navigation.navigate('ForgotPass')
  }
  const onPressSignIn=()=>{
    navigation.navigate('Welcome')
  }
  const onPressSignUp=()=>{
    navigation.navigate('SignUp1')
  }
  return (
    <View
      style={{
        flex: 1,
            paddingHorizontal: '8%',
            paddingVertical: '10%',
            backgroundColor:'#FFF',
            marginLeft:'auto',
            marginRight:'auto',
            width:'100%'
      }}>
        <View style={{position:'absolute',}}>
        <Image source={require('../../assets/images/Group75.png')} 
        style={styles.img}/>
        </View>
      <View >
        <Text style={{color:'#257ABA',fontSize:27,fontWeight:'300'}}>Sign In</Text>
      </View>

      <View style={{marginTop: '10%'}}>
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

      <View style={{marginTop: '10%'}}>
        <CustomInputs
          placeholder={''}
          value={Password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <View style={styles.placeholderTxt}>
          <Text style={styles.formText}>Password</Text>
        </View>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: '4%',
          marginBottom: '5%',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}>
          <Switch
            trackColor={{false: '#707070', true: '#93CAF3'}}
            thumbColor={isEnabled ? '#145D94' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text style={{color:'#4D4D4D'}}>Remember</Text>
        </View>
        <Pressable onPress={onPressForgot}>
        <Text style={{color:'#0071BC'}}>Forget Password?</Text>
        </Pressable>
      </View>
      
      <View>
      <Pressable onPress={onPressSignIn}>
        <Button text={'Sign In'} />
        </Pressable>
      </View>
      <View 
       style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '4%',
      }}>
        <Pressable onPress={onPressSignUp}>
        <Text style={{color:'#4D4D4D'}}>Don’t have an account?<Text style={{color:'#0071BC'}}> Sign Up</Text> </Text>
        </Pressable>
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
  img:{
    height: moderateScale(100, 0.1),
      width: moderateScale(100, 0.1),
      position: 'absolute',
      left: moderateScale(291, 0.1),
      bottom: moderateScale(-100, 0.1),
  }
});
export default SignIn;

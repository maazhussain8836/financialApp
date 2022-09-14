import {View, Text, TextInput, StyleSheet, Switch,Image,Pressable, ScrollView} from 'react-native';
import React, {useState} from 'react';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Button from '../../components/Button';
import CustomInputs from '../../components/CustomInputs';
import DatePicker from '../../components/DatePicker';
import CountryPicker from '../../components/CountryPicker';


const SignUp1 = ({navigation}) => {
  const [Username, setUsername] = '';
  const [Password, setPassword] = '';
  const [text, setText] = useState('');
  
  const onPressSignIn=()=>{
    navigation.navigate('SignIn')
  }
  const onPressSignUp=()=>{
    navigation.navigate('Verification')
  }


  return (
    <ScrollView>
    <View
      style={{
        flex: 1,
        position:'relative',
        paddingHorizontal: '8%',
        paddingVertical: '10%',
        backgroundColor:'#FFF',
      }}>
        <View style={{position:'absolute'}}>
        <Image source={require('../../assets/images/Group75.png')} 
        style={styles.img}/>
        </View>
      <View >
        <Text style={{color:'#257ABA',fontSize:27,fontWeight:'300'}}>Sign Up</Text>
      </View>

      <View style={{marginTop: '10%'}}>
        <CustomInputs
          placeholder={''}
          onChangeText={newText => setText(newText)}
          defaultValue={text}
          secureTextEntry={false}
        />
        <View style={styles.placeholderTxt}>
          <Text style={styles.formText}>First Name</Text>
        </View>
      </View>

      <View style={{marginTop: '10%'}}>
        <CustomInputs
          placeholder={''}
          onChangeText={newText => setText(newText)}
          defaultValue={text}
          secureTextEntry={false}
        />
        <View style={styles.placeholderTxt}>
          <Text style={styles.formText}>Last Name</Text>
        </View>
      </View>

    
      <View style={{marginTop: '10%'}}>
      <CountryPicker/>
      <View style={styles.placeholderTxt}>
          <Text style={styles.formText}>Phone Number</Text>
        </View>
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

    <DatePicker text='Date Of Birth' width='100%'/>

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

  
      <View>
        <Pressable onPress={onPressSignUp}>
        <Button text={'Sign Up'} />
        </Pressable>
      </View>
      <View 
       style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '4%',
      }}>
        <Pressable onPress={onPressSignIn} >
        <Text style={{color:'#4D4D4D'}}>Already have an account? <Text style={{color:'#0071BC'}}> Sign In</Text> </Text>
        </Pressable>
      </View>
    </View>
    </ScrollView>
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
export default SignUp1;

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Switch,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useState,useEffect} from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Button from '../../components/Button';
import CustomInputs from '../../components/CustomInputs';
import MaskInput, { Masks } from 'react-native-mask-input';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment'
import axiosconfig from '../../provider/axios'
const SignUp1 = ({navigation}) => {
  const [email, setemail] = useState('');
  const [Password, setPassword] = useState('');
  const [name, setname] = useState('');
  const [lastName, setlastNname] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dob, setDob] = useState('')


  // const [text, setText] = useState('');

  const onPressSignIn = () => {
    navigation.navigate('SignIn');
  };

  const onPressSignUp = () => {
    axiosconfig.post('otp',{
      email:email
    }).then((res)=>{console.log(res)})
    
    navigation.navigate('Verification',{
      email:email,
      name:name,
      last_name:lastName,
      phone_number:phone,
      date:dob,
      password:Password,
      confirm_password:confirmPassword,
      type:'user',
    });
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.log(date)
    setDob(moment(date).format('DD/MM/yy'))
    hideDatePicker();
  };


// useEffect(() => {
//   axios.post(baseURL,data).then(res => {
//     console.log(res);
//   });
// }, [])

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          position: 'relative',
          paddingHorizontal: '8%',
          paddingVertical: '10%',
          backgroundColor: '#FFF',
        }}>
        <View style={{position: 'absolute'}}>
          <Image
            source={require('../../assets/images/Group75.png')}
            style={styles.img}
          />
        </View>
        <View>
          <Text style={{color: '#257ABA', fontSize: 27, fontWeight: '300'}}>
            Sign Up
          </Text>
        </View>

        <View style={{marginTop: '10%'}}>
          <CustomInputs
            placeholder={''}
            setValue={newText => setname(newText)}
            value={name}
            secureTextEntry={false}
          />
          <View style={styles.placeholderTxt}>
            <Text style={styles.formText}>First Name</Text>
          </View>
        </View>

        <View style={{marginTop: '10%'}}>
          <CustomInputs
            placeholder={''}
            setValue={newText => setlastNname(newText)}
            value={lastName}
            secureTextEntry={false}
          />
          <View style={styles.placeholderTxt}>
            <Text style={styles.formText}>Last Name</Text>
          </View>
        </View>

        <View style={{marginTop: '10%'}}>
        <View style={styles.inpurText}>
      <MaskInput
      value={phone}
      // mask={Masks.USA_PHONE}
      onChangeText={(masked) => {
        setPhone(masked); 
        console.log(phone)
      }}
    />
      </View>

          <View style={styles.placeholderTxt}>
            <Text style={styles.formText}>Phone Number</Text>
          </View>
        </View>

        <View style={{marginTop: '10%'}}>
          <CustomInputs
            placeholder={''}
            value={email}
            setValue={e => setemail(e)}
            secureTextEntry={false}
          />
          <View style={styles.placeholderTxt}>
            <Text style={styles.formText}>Email Address</Text>
          </View>
        </View>

        <View style={{marginTop: '10%', width:'100%'}}>
      <Pressable onPress={showDatePicker}>
        <Text style={{...styles.inpurText,padding: 18}}>{dob}</Text>
      </Pressable>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <View style={styles.placeholderTxt}>
        <Text style={styles.formText}>Date Of Birth</Text>
      </View>
    </View>

        <View style={{marginTop: '10%'}}>
          <CustomInputs
            placeholder={''}
            value={Password}
            setValue={e => setPassword(e)}
            secureTextEntry={true}
          />
          <View style={styles.placeholderTxt}>
            <Text style={styles.formText}>Password</Text>
          </View>
        </View>

        <View style={{marginTop: '10%'}}>
          <CustomInputs
            placeholder={''}
            value={confirmPassword}
            setValue={e => setconfirmPassword(e)}
            secureTextEntry={true}
          />
          <View style={styles.placeholderTxt}>
            <Text style={styles.formText}>Confirm Password</Text>
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
          <Pressable onPress={onPressSignIn}>
            <Text style={{color: '#4D4D4D'}}>
              Already have an account?{' '}
              <Text style={{color: '#0071BC'}}> Sign In</Text>{' '}
            </Text>
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
  img: {
    height: moderateScale(100, 0.1),
    width: moderateScale(100, 0.1),
    position: 'absolute',
    left: moderateScale(291, 0.1),
    bottom: moderateScale(-100, 0.1),
  },

  underlineStyleBase: {
    width: 83,
    height: 50,
    alignItems: 'center',
    borderWidth: 1,
    borderRightWidth: 1,
    fontSize: 20,
    color: '#000',
    marginVertical: '12%',
  },
  underlineStyleHighLighted: {
    borderColor: 'gray',
  },
  inpurText: {
    borderWidth: 1,
    padding: 2,
    borderColor: '#808080',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '70%',
  },

  message: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  formText: {
    fontSize: 16,
    color: '#4D4D4D',
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

  inpurText: {
    borderWidth: 1,
    fontSize: 17,
    padding: 5,
    color:'#000',
    borderColor: '#808080',
    width: '100%',
  },
});
export default SignUp1;


import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
// import PhoneInput from 'react-native-phone-number-input';
import MaskInput, { Masks } from 'react-native-mask-input';
const CountryPicker = () => {
  // const phoneInput = useRef(null);
  const [phone, setPhone] = useState('');
  return (
    <>
      <View style={styles.inpurText}>
        {/* <PhoneInput
          ref={phoneInput}
          // defaultCode="PK"
          textInputStyle={{Color: '#FFFFFF', padding: 2, marginVertical: '-5%'}}
          textContainerStyle={{backgroundColor: '#FFFFFF'}}
          // containerStyle={{backgroundColor: '#FFFFFF', width: '100%'}}
          placeholder=" "
          withDarkTheme="true"
          withShadow="true"
          autoFocus={false}
        /> */}
      <MaskInput
      value={phone}
      
      onChangeText={(masked, unmasked) => {
        setPhone(masked); // you can use the unmasked value as well

        // assuming you typed "9" all the way:
        console.log(masked); // (99) 99999-9999
        console.log(unmasked); // 99999999999
      }}
      mask={Masks.USA_PHONE}
    />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  inpurText: {
    borderWidth: 1,
    padding: 2,
    borderColor: '#808080',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
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
});

export default CountryPicker;

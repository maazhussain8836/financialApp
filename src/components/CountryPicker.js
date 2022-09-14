
import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {isValidNumber} from 'react-native-phone-number-input';
// import {Colors} from 'react-native/Libraries/NewAppScreen';

const CountryPicker = () => {
  const phoneInput = useRef(null);
  return (
    <>
      <View style={styles.inpurText}>
        <PhoneInput
          ref={phoneInput}
          defaultCode="PK"
          textInputStyle={{Color: '#FFFFFF', padding: 2, marginVertical: '-5%'}}
          textContainerStyle={{backgroundColor: '#FFFFFF'}}
          containerStyle={{backgroundColor: '#FFFFFF', width: '100%'}}
          placeholder=" "
          withDarkTheme="true"
          withShadow="true"
          autoFocus={false}
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

import React, {useState} from 'react';
import {Button, View, Text, StyleSheet,Pressable} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment'
const DatePicker = ({text,width}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dob, setDob] = useState('')
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

  return (
    <View style={{marginTop: '10%', width: width}}>
      <Pressable onPress={showDatePicker}>
        <Text style={styles.inpurText}>{dob}</Text>
      </Pressable>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <View style={styles.placeholderTxt}>
        <Text style={styles.formText}>{text}</Text>
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

  inpurText: {
    borderWidth: 1,
    fontSize: 17,
    padding: 17,
    color:'#000',
    borderColor: '#808080',
    width: '100%',
  },
});
export default DatePicker;

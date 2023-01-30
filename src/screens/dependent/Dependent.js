import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Switch,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Button from '../../components/Button';
import CustomInputs from '../../components/CustomInputs';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {useEffect} from 'react';
import {resetState} from 'jest-circus';

const Dependent = ({navigation}) => {
  // const [Username, setUsername] = '';
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [socialSecurity, setSocialSecurity] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDatePickerVisible1, setDatePickerVisibility1] = useState(false);
  const [dob, setDob] = useState(null);
  const [monthLived, setMonthLived] = useState(null);
  const [addNew, setAddNew] = useState([null]);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.log(date);
    setDob(moment(date).format('DD/MM/yy'));
    hideDatePicker();
  };

  const showDatePicker1 = () => {
    setDatePickerVisibility1(true);
  };

  const hideDatePicker1 = () => {
    setDatePickerVisibility1(false);
  };

  const handleConfirm1 = date => {
    console.log(date);
    setMonthLived(moment(date).format('DD/MM/yy'));
    hideDatePicker1();
  };

  const goNext = () => {
    if(firstName!=null && dob!=null && monthLived!=null && lastName!=null && socialSecurity!=null){
      navigation.navigate('BankInfo');
    }else{
      alert('Kindly Fill Complete Form')
    }
  };

  const DepDetails = () => {
    // console.log(index,'this s shfjk',addNew)

    return (
      <View>
        <View style={{marginTop: '10%'}}>
          <CustomInputs
            placeholder={''}
            onChangeText={newText => setFirstName(newText)}
            defaultValue={firstName}
            secureTextEntry={false}
          />
          <View style={styles.placeholderTxt}>
            <Text style={styles.formText}>First Name</Text>
          </View>
        </View>

        <View style={{marginTop: '10%'}}>
          <CustomInputs
            placeholder={''}
            onChangeText={newText => setLastName(newText)}
            defaultValue={lastName}
            secureTextEntry={false}
          />
          <View style={styles.placeholderTxt}>
            <Text style={styles.formText}>Last Name</Text>
          </View>
        </View>

        <View style={{marginTop: '10%'}}>
          <CustomInputs
            keyboardType={'numeric'}
            placeholder={''}
            onChangeText={newText => setSocialSecurity(newText)}
            defaultValue={socialSecurity}
            secureTextEntry={false}
          />
          <View style={styles.placeholderTxt}>
            <Text style={styles.formText}>Social Security #</Text>
          </View>
        </View>

        <View style={{marginTop: '10%', width: '100%'}}>
          <Pressable onPress={showDatePicker}>
            <Text style={{...styles.inpurText, padding: 18}}>{dob}</Text>
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

        <View style={{marginTop: '10%', width: '100%'}}>
          <Pressable onPress={showDatePicker1}>
            <Text style={{...styles.inpurText, padding: 18}}>{monthLived}</Text>
          </Pressable>

          <DateTimePickerModal
            isVisible={isDatePickerVisible1}
            mode="date"
            onConfirm={handleConfirm1}
            onCancel={hideDatePicker1}
          />
          <View style={styles.placeholderTxt}>
            <Text style={styles.formText}>
              Month Lived with you during years
            </Text>
          </View>
        </View>
      </View>
    );
  };

 

  const addItems = () => {
    const arr = [...addNew];
    arr.push(<DepDetails />);
    setAddNew(arr);
  };

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          paddingHorizontal: '7%',
          paddingVertical: '12%',
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
            Dependant Info
          </Text>
        </View>
        {/* <View style={{ padding: 10}}> */}
        {DepDetails()}
        {/* </View> */}
        {addNew.map(res => {
          return <View>{res}</View>;
        })}

        <TouchableOpacity
          style={{
            // borderWidth: 1,
            width: '20%',
            // flex:1,
            // margin:'5%',
            marginTop:'5%',
           marginLeft:'auto'
          }}
          onPress={() => addItems()}>
          <View>
            <Text style={{color: '#0071BC',fontSize:17}}>Add new</Text>
          </View>
        </TouchableOpacity>

        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingTop: '20%'
          }}>
          <View style={{width: '30%'}}>
            <Pressable
              onPress={() => {
                navigation.navigate('BankInfo');
              }}>
              <Text style={{...styles.btntext, color: '#0071BC'}}>Skip</Text>
            </Pressable>
          </View>
          <View style={{width: '30%'}}>
            <LinearGradient
              colors={['#257ABA', '#145D94', '#003C69']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.btnV}>
              <TouchableOpacity onPress={() => goNext()}>
                <Text style={styles.btntext}>Next</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
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
  inpurText: {
    borderWidth: 1,
    fontSize: 17,
    padding: 15,
    borderColor: '#808080',
    width: '100%',
  },
  btnV: {
    padding: 12,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
  },
  btntext: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: '600',
    color: '#FFFFFF',
    fontSize: 17,
  },
});
export default Dependent;

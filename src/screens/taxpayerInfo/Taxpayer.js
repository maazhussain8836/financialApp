import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Switch,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Button from '../../components/Button';
import {RadioButton} from 'react-native-paper';
import CustomInputs from '../../components/CustomInputs';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import DatePicker from '../../components/DatePicker';
import CountryPicker from '../../components/CountryPicker';
const Taxpayer = ({navigation}) => {
  const [Username, setUsername] = '';
  const [text, setText] = useState('');
  const [spouseCheck, setspouseCheck] = useState(false);
  const [dependantCheck, setdependantCheck] = useState(false);

  const spouse = () => {
    setspouseCheck(!spouseCheck);
  };
  const dependant = () => {
    setdependantCheck(!dependantCheck);
  };

  const onPressNext = () => {
    if (spouseCheck) {
      navigation.navigate('Spouse', {
        dependantCheck: dependantCheck,
        spouseCheck: spouseCheck,
      });
    } else if (dependantCheck) {
      navigation.navigate('Dependent', {
        dependantCheck: dependantCheck,
        spouseCheck: spouseCheck,
      });
    } else {
      navigation.navigate('BankInfo');
    }
  };

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const [dob, setDob] = useState('08/09/22');

  const handleConfirm = date => {
    console.log(date);
    setDob(moment(date).format('DD/MM/yy'));

    hideDatePicker();
  };
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
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
            Taxpayer Info
          </Text>
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
          <CustomInputs
            keyboardType={'numeric'}
            placeholder={''}
            onChangeText={newText => setText(newText)}
            defaultValue={text}
            secureTextEntry={false}
          />
          <View style={styles.placeholderTxt}>
            <Text style={styles.formText}>Social Security #</Text>
          </View>
        </View>
            <DatePicker text='Date Of Birth' width='100%'/>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginTop: '4%',
          }}>
          <Text style={{color: '#0071BC'}}>Driver License Info</Text>
        </View>

        <View style={{marginTop: '10%'}}>
          <CustomInputs
            placeholder={''}
            onChangeText={newText => setText(newText)}
            defaultValue={text}
            secureTextEntry={false}
          />
          <View style={styles.placeholderTxt}>
            <Text style={styles.formText}>State</Text>
          </View>
        </View>

        <View style={{marginTop: '10%'}}>
          <CustomInputs
            keyboardType={'numeric'}
            placeholder={''}
            onChangeText={newText => setText(newText)}
            defaultValue={text}
            secureTextEntry={false}
          />
          <View style={styles.placeholderTxt}>
            <Text style={styles.formText}>DL #</Text>
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <DatePicker text="Issue Date" width='49%' />
          <DatePicker text="Exp Date"  width='49%'/>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginTop: '4%',
          }}>
          <Text style={{color: '#0071BC'}}>Address</Text>
        </View>

        <View style={{marginTop: '10%'}}>
          <CustomInputs
            placeholder={''}
            onChangeText={newText => setText(newText)}
            defaultValue={text}
            secureTextEntry={false}
          />
          <View style={styles.placeholderTxt}>
            <Text style={styles.formText}>Address</Text>
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
            <Text style={styles.formText}>City</Text>
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
            <Text style={styles.formText}>State</Text>
          </View>
        </View>

        <View style={{marginTop: '10%'}}>
          <CustomInputs
            keyboardType={'numeric'}
            placeholder={''}
            onChangeText={newText => setText(newText)}
            defaultValue={text}
            secureTextEntry={false}
          />
          <View style={styles.placeholderTxt}>
            <Text style={styles.formText}>Zip Code</Text>
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
            <Text style={styles.formText}>County</Text>
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
            <Text style={styles.formText}>Occupation</Text>
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

        <View style={{marginTop: '10%'}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginVertical: '2%',
            }}>
            <Text style={{color: '#666666'}}>Do you have a Spouse?</Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <RadioButton
              color="#0071BC"
              value="first"
              status={spouseCheck ? 'checked' : 'unchecked'}
              onPress={() => {
                spouse();
              }}
            />
            <Text style={{marginRight: '10%', color: '#999999'}}>yes</Text>
            <RadioButton
              color="#0071BC"
              value="second"
              status={!spouseCheck ? 'checked' : 'unchecked'}
              onPress={() => spouse()}
            />
            <Text style={{color: '#999999'}}>No</Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginVertical: '2%',
            }}>
            <Text style={{color: '#666666'}}>
              Do you have dependants that are deductible on your tax return?
              <Text style={{fontSize: 9, color: '#999999'}}>
                (Children, dependant parents, Wards, foster, etc).
              </Text>
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <RadioButton
              color="#0071BC"
              value="first"
              status={dependantCheck ? 'checked' : 'unchecked'}
              onPress={() => {
                dependant();
              }}
            />
            <Text style={{marginRight: '10%', color: '#999999'}}>yes</Text>
            <RadioButton
              color="#0071BC"
              value="second"
              status={!dependantCheck ? 'checked' : 'unchecked'}
              onPress={() => dependant()}
            />
            <Text style={{color: '#999999'}}>No</Text>
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            flexDirection: 'row',
            marginTop: '10%',
          }}>
          <View style={{width: '30%'}}>
            <Pressable onPress={onPressNext}>
              <LinearGradient
                colors={['#257ABA', '#145D94', '#003C69']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.btnV}>
                <Text style={styles.btntext}>Next</Text>
              </LinearGradient>
            </Pressable>
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
export default Taxpayer;

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
import React, {useState, useContext, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Button from '../../components/Button';
import {RadioButton} from 'react-native-paper';
import CustomInputs from '../../components/CustomInputs';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import MaskInput, {Masks} from 'react-native-mask-input';
import axiosconfig from '../../provider/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../components/Loader';
import AppContext from '../../components/AppContext';

const Taxpayer = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [socialSecurity, setSocialSecurity] = useState('');
  const [DL, setDl] = useState('');
  const [Address, setAddress] = useState('');
  const [City, setCity] = useState('');
  const [State, setState] = useState('');
  const [ZipCode, setZipCode] = useState('');
  const [County, setCounty] = useState('');
  const [Occupation, setOccupation] = useState('');
  const [email, setEmail] = useState('');
  const [spouseCheck, setspouseCheck] = useState(false);
  const [dependantCheck, setdependantCheck] = useState(false);
  const [phone, setPhone] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDatePickerVisible1, setDatePickerVisibility1] = useState(false);
  const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);
  const [DLState, setDLState] = useState('');
  const [dob, setDob] = useState('');
  const [IssueDate, setIssueDate] = useState('');
  const [expDate, setExpDate] = useState('');
  const [isloading, setIsLoading] = useState(false);

  // const [taxPayerData,setTaxPayerData]=useState('')
  const context = useContext(AppContext);


  
  const getApi= async()=>{
    const value = await AsyncStorage.getItem('@auth_token');
    // setIsLoading(true)
  axiosconfig
  .get('user_view', {
    headers: {
      Authorization: 'Bearer  ' + value, //the token is a variable which holds the token
    },
  })
  .then(res => {
    console.log(res.data[0]?.taxpayer_info, 'get Api response');
    const dataTaxPayer=res.data[0]?.taxpayer_info
    
              setFirstName(dataTaxPayer.first_name)
              setLastName(dataTaxPayer.last_name)
              setSocialSecurity(dataTaxPayer.social_security)
              setDl(dataTaxPayer.driving_license_dl)
              setAddress(dataTaxPayer.address)
              setCity(dataTaxPayer.city)
              setState(dataTaxPayer.state)
              setZipCode(dataTaxPayer.zipcode)
              setCounty(dataTaxPayer.county)
              setOccupation(dataTaxPayer.occuption)
              setEmail(dataTaxPayer.email)
              setspouseCheck(dataTaxPayer.have_spouse == '0'?  false : true) 
              setdependantCheck(dataTaxPayer.have_dependant == '0'?  false : true)
              setPhone(dataTaxPayer.cellphone)
              setDLState(dataTaxPayer.driving_license_state)
              setDob(dataTaxPayer.date_of_birth)
              setIssueDate(dataTaxPayer.driving_license_issue_date)
              setExpDate(dataTaxPayer.driving_license_exp_date)
  
   
    // setIsLoading(false)
  })
  .catch(err => {
    console.log(err, 'get Api response error');
  });
  
  }
  
  useEffect(() => {
 
    getApi()
    
  }, [])
  

  const spouse = () => {
    setspouseCheck(!spouseCheck);
  };

  // console.log(spouseCheck)
  const dependant = () => {
    setdependantCheck(!dependantCheck);
  };


  var data = {
    first_name: firstName,
    last_name: lastName,
    social_security: socialSecurity,
    date_of_birth: dob,
    driving_license_state: DLState,
    driving_license_dl: DL,
    driving_license_issue_date: IssueDate,
    driving_license_exp_date: expDate,
    address: Address,
    city: City,
    state: State,
    zipcode: ZipCode,
    county: County,
    occuption: Occupation,
    cellphone: phone,
    email: email,
    have_spouse: spouseCheck ? '1' : '0',
    have_dependant: dependantCheck ? '1' : '0',
  };
  
  const onPressNext = async() => {
    
    const value = await AsyncStorage.getItem('@auth_token');

    // create taxPayer data
    axiosconfig
    .post('create', data, {
      headers: {
        Authorization: 'Bearer  ' + value, //the token is a variable which holds the token
      },
    })
    .then(res => {
      console.log(res);
      alert(res.data.messsage);
    })
    .catch(res => {
      console.log(res);
    });

    // update taxPayer data
    // axiosconfig
    // .post('tax_update', data, {
    //   headers: {
    //     Authorization: 'Bearer  ' + value, //the token is a variable which holds the token
    //   },
    // })
    // .then(res => {
    //   console.log(res);
    //   alert(res.data.messsage);
    // })
    // .catch(res => {
    //   console.log(res);
    // });
    
 
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

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const showDatePicker1 = () => {
    setDatePickerVisibility1(true);
  };
  const showDatePicker2 = () => {
    setDatePickerVisibility2(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility2(false);
  };

  const handleConfirmDob = date => {
    console.log(date);
    // setDob(null)
    setDob(moment(date).format('DD/MM/yy'));
    hideDatePicker();
  };
  const handleConfirmIssueDate = date => {
    console.log(date);
    // setIssueDate(null)
    setIssueDate(moment(date).format('DD/MM/yy'));
    hideDatePicker();
  };
  const handleConfirmExpDate = date => {
    console.log(date);
    // setExpDate(null)
    setExpDate(moment(date).format('DD/MM/yy'));
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
        {isloading ? <Loader /> : null}
        {/* <Loader/> */}
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
            setValue={e => setFirstName(e)}
            value={firstName}
            secureTextEntry={false}
          />
          <View style={styles.placeholderTxt}>
            <Text style={styles.formText}>First Name</Text>
          </View>
        </View>

        <View style={{marginTop: '10%'}}>
          <CustomInputs
            placeholder={''}
            setValue={e => setLastName(e)}
            value={lastName}
            secureTextEntry={false}
          />
          <View style={styles.placeholderTxt}>
            <Text style={styles.formText}>Last Name</Text>
          </View>
        </View>
        <View style={{marginTop: '10%'}}>
          <CustomInputs
            placeholder={''}
            setValue={e => setSocialSecurity(e)}
            value={socialSecurity}
            secureTextEntry={false}
            keyboardType="numeric"
          />
          <View style={styles.placeholderTxt}>
            <Text style={styles.formText}>Social Security #</Text>
          </View>
        </View>

        <View style={{marginTop: '10%', width: '100%'}}>
          <Pressable onPress={showDatePicker}>
            <Text style={{...styles.inpurText, padding: 18}}>
              {dob}
              
            </Text>
          </Pressable>

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirmDob}
            onCancel={hideDatePicker}
          />
          <View style={styles.placeholderTxt}>
            <Text style={styles.formText}>Date Of Birth</Text>
          </View>
        </View>

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
            setValue={e => setDLState(e)}
            value={DLState}
            secureTextEntry={false}
          />
          <View style={styles.placeholderTxt}>
            <Text style={styles.formText}>State</Text>
          </View>
        </View>

        <View style={{marginTop: '10%'}}>
          <CustomInputs
            placeholder={''}
            setValue={e => setDl(e)}
            value={DL}
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
          <View style={{marginTop: '10%', width: '49%'}}>
            <Pressable onPress={showDatePicker1}>
              <Text style={{...styles.inpurText, padding: 18}}>
                {IssueDate}
              </Text>
            </Pressable>
            <DateTimePickerModal
              isVisible={isDatePickerVisible1}
              mode="date"
              onConfirm={handleConfirmIssueDate}
              onCancel={hideDatePicker}
            />
            <View style={styles.placeholderTxt}>
              <Text style={styles.formText}>Issue Date</Text>
            </View>
          </View>

          <View style={{marginTop: '10%', width: '49%'}}>
            <Pressable onPress={showDatePicker2}>
              <Text style={{...styles.inpurText, padding: 18}}>
                
                {expDate}
              </Text>
            </Pressable>
            <DateTimePickerModal
              isVisible={isDatePickerVisible2}
              mode="date"
              onConfirm={handleConfirmExpDate}
              onCancel={hideDatePicker}
            />
            <View style={styles.placeholderTxt}>
              <Text style={styles.formText}>Exp Date</Text>
            </View>
          </View>
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
            setValue={e => setAddress(e)}
            value={Address}
            secureTextEntry={false}
          />
          <View style={styles.placeholderTxt}>
            <Text style={styles.formText}>Address</Text>
          </View>
        </View>

        <View style={{marginTop: '10%'}}>
          <CustomInputs
            placeholder={''}
            setValue={e => setCity(e)}
            value={City}
            secureTextEntry={false}
          />
          <View style={styles.placeholderTxt}>
            <Text style={styles.formText}>City</Text>
          </View>
        </View>

        <View style={{marginTop: '10%'}}>
          <CustomInputs
            placeholder={''}
            setValue={e => setState(e)}
            value={State}
            secureTextEntry={false}
          />
          <View style={styles.placeholderTxt}>
            <Text style={styles.formText}>State</Text>
          </View>
        </View>

        <View style={{marginTop: '10%'}}>
          <CustomInputs
            placeholder={''}
            setValue={e => setZipCode(e)}
            value={ZipCode}
            secureTextEntry={false}
            keyboardType={'numeric'}
          />
          <View style={styles.placeholderTxt}>
            <Text style={styles.formText}>Zip Code</Text>
          </View>
        </View>

        <View style={{marginTop: '10%'}}>
          <CustomInputs
            placeholder={''}
            setValue={e => setCounty(e)}
            value={County}
            secureTextEntry={false}
          />
          <View style={styles.placeholderTxt}>
            <Text style={styles.formText}>County</Text>
          </View>
        </View>

        <View style={{marginTop: '10%'}}>
          <CustomInputs
            placeholder={''}
            setValue={e => setOccupation(e)}
            value={Occupation}
            secureTextEntry={false}
          />
          <View style={styles.placeholderTxt}>
            <Text style={styles.formText}>Occupation</Text>
          </View>
        </View>

        <View style={{marginTop: '10%'}}>
          <View style={styles.inpurText}>
            <MaskInput
              value={phone}
              onChangeText={masked => {
                setPhone(masked);
                console.log(phone);
              }}
              keyboardType="numeric"
              // mask={Masks.USA_PHONE}
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
            setValue={e => setEmail(e)}
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
              value='first'
              status={spouseCheck ? 'checked' : 'unchecked'}
              onPress={() => {
                spouse();
              }}
            />
            <Text style={{marginRight: '10%', color: '#999999'}}>yes</Text>
            <RadioButton
              color="#0071BC"
              value='second'
              status={!spouseCheck ? 'checked' : 'unchecked'}
              onPress={() => {
                spouse();
              }}
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

  dateInput: {
    borderWidth: 1,
    fontSize: 17,
    padding: 17,
    color: '#000',
    borderColor: '#808080',
    width: '100%',
  },
});
export default Taxpayer;

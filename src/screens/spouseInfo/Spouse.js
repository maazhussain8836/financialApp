import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Switch,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Button from '../../components/Button';
import CustomInputs from '../../components/CustomInputs';
import MaskInput, {Masks} from 'react-native-mask-input';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import axiosConfig from '../../provider/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../components/Loader';
const Spouse = ({route, navigation}) => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [dob, setDob] = useState(null);
  const [socialSecurity, setSocialSecurity] = useState(null);
  const [DLState, setDLState] = useState(null);
  const [DL, setDl] = useState(null);
  const [IssueDate, setIssueDate] = useState(null);
  const [expDate, setExpDate] = useState(null);
  const [Occupation, setOccupation] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDatePickerVisible1, setDatePickerVisibility1] = useState(false);
  const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);
  const {dependantCheck, spouseCheck} = route.params;
  const [isloading,setIsLoading]=useState(false)

  setTimeout(() => {
    setIsLoading(false)
  }, 3000);

  useEffect(() => {
    console.log(navigation, 'navigation');
  }, []);
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
    setDatePickerVisibility(false);
  };
  const hideDatePicker1 = () => {
    setDatePickerVisibility1(false);
  };
  const hideDatePicker2 = () => {
    setDatePickerVisibility2(false);
  };

  const handleConfirm = date => {
    console.log(date);
    setDob(moment(date).format('DD/MM/yy'));
    hideDatePicker();
  };
  const handleConfirm1 = date => {
    console.log(date);
    setIssueDate(moment(date).format('DD/MM/yy'));
    hideDatePicker1();
  };
  const handleConfirm2 = date => {
    console.log(date);
    setExpDate(moment(date).format('DD/MM/yy'));
    hideDatePicker2();
  };

  const getApi= async()=>{
    const value = await AsyncStorage.getItem('@auth_token');
    setIsLoading(true)
  axiosConfig
  .get('user_view', {
    headers: {
      Authorization: 'Bearer  ' + value, //the token is a variable which holds the token
    },
  })
  .then(res => {
    
    const spouseData=res.data;
    spouseData.map((v)=>{
      console.log(v.spouse_info);
      setFirstName(v.spouse_info.first_name)
      setLastName(v.spouse_info.last_name)
      setDob(v.spouse_info.date_of_birth)
      setSocialSecurity(v.spouse_info.social_security)
      setDLState(v.spouse_info.driving_license_state)
      setDl(v.spouse_info.driving_license_dl)
      setIssueDate(v.spouse_info.driving_license_issue_date)
      setExpDate(v.spouse_info.driving_license_exp_date)
      setOccupation(v.spouse_info.occuption)
      setPhone(v.spouse_info.cellphone)
      setEmail(v.spouse_info.email)
    })
    // setIsLoading(false)
    // console.log(res.data[0]?.spouse_info, 'get Api response');
    

  })
  .catch(err => {
    console.log(err, 'get Api response error');
  });
  }
  
  useEffect(() => {
    getApi()
  }, [])
  

  const goNext = async() => {
    const value = await AsyncStorage.getItem('@auth_token');
    var data = {
      first_name: firstName ,
      last_name: lastName,
      date_of_birth: dob,
      social_security: socialSecurity,
      driving_license_state: DLState,
      driving_license_dl: DL,
      driving_license_issue_date: IssueDate,
      driving_license_exp_date: expDate,
      occuption: Occupation,
      cellphone: phone,
      email: email,
    };
    // create spouse data
    axiosConfig
      .post('spouse_create', data,  {
        headers: {
          Authorization: 'Bearer  ' + value //the token is a variable which holds the token
        },
    })
      .then(res => {
        console.log(res)
        alert(res.data.message)
      })
      .catch(err => {
        
        console.log(err);
      });
      if (firstName != null && lastName != null && dob != null
        && socialSecurity != null && DLState != null && DL != null && IssueDate != null
        && expDate != null && Occupation != null && phone != null && email != null)
        {
          if (dependantCheck) {
            navigation.navigate('Dependent', {
              dependantCheck: dependantCheck,
              spouseCheck: spouseCheck,
            });
          } else {
            navigation.navigate('BankInfo');
          }

        }else(
          alert('Kindly Fill Full Form')
        )
    
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
          {isloading?<Loader/>:null}
        <View style={{position: 'absolute'}}>
          <Image
            source={require('../../assets/images/Group75.png')}
            style={styles.img}
          />
        </View>
        <View>
          <Text style={{color: '#257ABA', fontSize: 27, fontWeight: '300'}}>
            Spouse Info
          </Text>
        </View>

        <View style={{marginTop: '10%'}}>
          <CustomInputs
            placeholder={''}
            setValue={newText => setFirstName(newText)}
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
            setValue={newText => setLastName(newText)}
            value={lastName}
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
            setValue={newText => setSocialSecurity(newText)}
            value={socialSecurity}
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
            setValue={newText => setDLState(newText)}
            value={DLState}
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
            setValue={newText => setDl(newText)}
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
              onConfirm={handleConfirm1}
              onCancel={hideDatePicker1}
            />
            <View style={styles.placeholderTxt}>
              <Text style={styles.formText}>Issue Date</Text>
            </View>
          </View>

          <View style={{marginTop: '10%', width: '49%'}}>
            <Pressable onPress={showDatePicker2}>
              <Text style={{...styles.inpurText, padding: 18}}>{expDate}</Text>
            </Pressable>

            <DateTimePickerModal
              isVisible={isDatePickerVisible2}
              mode="date"
              onConfirm={handleConfirm2}
              onCancel={hideDatePicker2}
            />
            <View style={styles.placeholderTxt}>
              <Text style={styles.formText}>Exp Date</Text>
            </View>
          </View>
        </View>

        <View style={{marginTop: '10%'}}>
          <CustomInputs
            placeholder={''}
            setValue={newText => setOccupation(newText)}
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

        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: '10%',
          }}>
          <View style={{width: '30%'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Dependent');
              }}>
              <Text style={{...styles.btntext, color: '#0071BC'}}>Skip</Text>
            </TouchableOpacity>
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
export default Spouse;

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Switch,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable
} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Button from '../../components/Button';
import CustomInputs from '../../components/CustomInputs';
import MaskInput, { Masks } from 'react-native-mask-input';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment'

const Spouse = ({route, navigation}) => {
  const [Username, setUsername] = '';
  const [text, setText] = useState('');
  const [phone, setPhone] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dob, setDob] = useState('')
  const {dependantCheck, spouseCheck} = route.params

  useEffect(() => {
    console.log(navigation, 'navigation')
  }, [])
  
  const goNext = () => {
    if(dependantCheck){
      navigation.navigate('Dependent', {dependantCheck: dependantCheck, spouseCheck: spouseCheck} );
    }else{
      navigation.navigate('BankInfo');
    }
  }
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
    <ScrollView>
      <View
        style={{
          flex: 1,
          paddingHorizontal: '8%',
          paddingVertical: '10%',
          backgroundColor:'#FFF',
        }}>
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
               <View style={{marginTop: '10%', width:'49%'}}>
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
        <Text style={styles.formText}>Issue Date</Text>
      </View>
    </View>

    <View style={{marginTop: '10%', width:'49%'}}>
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
        <Text style={styles.formText}>Exp Date</Text>
      </View>
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
        <View style={styles.inpurText}>
      <MaskInput
      value={phone}
      onChangeText={(masked) => {
        setPhone(masked); 
        console.log(phone)
      }}
      mask={Masks.USA_PHONE}
    />
      </View>

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

        <View style={{display:'flex',alignItems:'center',justifyContent:'space-between',flexDirection:'row',marginTop:'10%'}}>
          <View style={{width:'30%'}}>
          <TouchableOpacity onPress={()=>{navigation.navigate('Dependent')}}>
          <Text style={{...styles.btntext,color:'#0071BC'}}>Skip</Text>
          </TouchableOpacity>
          </View>
          <View style={{width:'30%'}}>
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
    width:'100%',
    
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

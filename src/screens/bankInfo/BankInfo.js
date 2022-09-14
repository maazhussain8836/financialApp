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
import { moderateScale} from 'react-native-size-matters';
import CustomInputs from '../../components/CustomInputs';
// import RadioBtn from '../../components/RadioBtn';

import { RadioButton } from 'react-native-paper';

const BankInfo = ({navigation}) => {
  const [text, setText] = useState('');
  const [checked, setChecked] = useState('first');

const onCheckedYes = () => {
  setChecked('first');
  console.log('yes Pressed');
};
const onCheckedNo = () => {
  setChecked('second');
  console.log('No Pressed');
};

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          paddingHorizontal: '10%',
          paddingVertical: '12%',
          backgroundColor:'#FFF'
        }}>
        <View style={{position: 'absolute'}}>
          <Image
            source={require('../../assets/images/Group75.png')}
            style={styles.img}
          />
        </View>
        <View>
          <Text style={{color: '#257ABA', fontSize: 27, fontWeight: '300'}}>
            Bank Information
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
            <Text style={styles.formText}>Bank Name</Text>
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
            <Text style={styles.formText}>Routing #</Text>
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
            <Text style={styles.formText}>Account #</Text>
          </View>
        </View>

        <View style={{marginVertical: '7%'}}>
          <Text style={{fontSize: 16, color: '#4D4D4D'}}>Account Type</Text>
        </View>

        <View style={{display:'flex',alignItems:'center',justifyContent:'flex-start',flexDirection:'row'}}>
        <RadioButton
              color="#0071BC"
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={abc => {
                onCheckedYes(abc);
              }}
            />
            <Text style={{marginRight: '10%', color: 'black',fontSize:17}}>Checking</Text>
            <RadioButton
              color="#0071BC"
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={onCheckedNo}
            />
            <Text style={{color: 'black',fontSize:18}}>Saving</Text>
        </View>

        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            flexDirection: 'row',
            marginTop: '75%',
          }}>
            
            <TouchableOpacity onPress={()=>{ navigation.navigate('Documents')}} style={{width: '30%'}}>
            <LinearGradient
              colors={['#257ABA', '#145D94', '#003C69']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.btnV}>
              <Text style={styles.btntext}>Next</Text>
            </LinearGradient>
          </TouchableOpacity>
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
export default BankInfo;

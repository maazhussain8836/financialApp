import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import React ,{useContext,useState} from 'react';
import { moderateScale} from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppContext from '../../components/AppContext';
import Loader from '../../components/Loader';
const Welcome = ({navigation}) => {
  const [isloading, setIsloading] = useState(false);
  const context=useContext(AppContext)

  const onPressLogOut =async () => {
    setIsloading(true)
    try {
      await 
      AsyncStorage.clear();
        context.setuserToken(null)
      // setTimeout(() => {
        // }, 1000);
      } catch (e) {}
      {console.log(context.userToken,'User Token has been removed')}
          navigation.navigate('SignIn');
  };
  return (
    <View
      style={{
        flex: 1,
        
        paddingHorizontal: '8%',
        paddingVertical: '3%',
        backgroundColor:'#FFF',
      }}>
        {isloading? <Loader />:null }
        
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../../assets/images/Group29.png')}
          style={styles.img}
        />
      </View>
      <View>
        <View>
        <Image source={require('../../assets/images/Asset3.png')}
        style={styles.imgBtn}/>
        </View>
        <View>
        <Image source={require('../../assets/images/Asset3.png')}
        style={{...styles.imgBtn,top:200}}/>
        </View>
        
        <Text style={{color: '#257ABA', fontSize: 27, fontWeight: '300',marginTop: '10%'}}>
          Welcome
        </Text>
      
        <Pressable onPress={()=>{navigation.navigate('Taxpayer')}}>
        <Text style={styles.txtS}>Profile Info</Text>
        </Pressable>
        <Pressable onPress={()=>{navigation.navigate('Documents')}}>
        <Text style={styles.txtS}>Scan Tax Documents</Text>
        </Pressable>
        <Pressable onPress={onPressLogOut}>
        <Text
          style={{
            color: '#257ABA',
            fontSize: 20,
            fontWeight: '400',
            textDecorationLine:'underline',
            textAlign: 'center',
            marginTop: '17%',
          }}>
          Log Out
        </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: moderateScale(40, 0.1),
    width: moderateScale(40, 0.1),
  },
  txtS: {
    color: '#FFF',
    fontSize: 21,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: '20%',
    
  },
  imgBtn:{
    position:'absolute',
    height: moderateScale(80),
    width: moderateScale(310),
    top:105
  }
});
export default Welcome;

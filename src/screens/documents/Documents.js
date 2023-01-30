import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Switch,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Modal,
  Dimensions,
  PermissionsAndroid 
} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';

import LinearGradient from 'react-native-linear-gradient';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/Button';
import AppContext from '../../components/AppContext';
import ImageView from 'react-native-image-viewing';
import { launchCamera } from 'react-native-image-picker';
import {PESDK} from 'react-native-photoeditorsdk';


const Documents = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [visible, setIsVisible] = useState(false);
  const [cIndex, setCindex] = useState(0);
  // const [imageAlpha,setimageAlpha]=useState(null)
  // const [value, setValue] = useState('Documents');
  // const [done, setDone] = useState('Done');
  // const onPressNext = () => {
  //   navigation.navigate('Welcome');
  // };

  const context = useContext(AppContext);
  // useEffect(() => {
  //   console.log(context.images,'documents');
  //   if(context.images.length==0){
  //     console.log('document null')
  //   }
  //   else{
  //     console.log('document fill')
  //   }
  // }, []);
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA
        // {
        //   title: "App Camera Permission",
        //   message:"App needs access to your camera "
        //   // buttonNeutral: "Ask Me Later",
        //   buttonNegative: "Cancel",
        //   buttonPositive: "OK"
        // }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Camera permission given");
        openCamer()
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };
  
  // useEffect(() => {
  //   console.log(imageAlpha,'hello ImageAlpha')
  // }, [imageAlpha])
  
  const openCamer=()=>{
    
  launchCamera({
    width: 300,
    height: 400,
    includeBase64:true
    // cropping: true,
    // freeStyleCropEnabled: true,
    // cropperActiveWidgetColor: '#424242',
    // cropperStatusBarColor: '#424242',
    // cropperToolbarColor: '#424242',
  })
  .then(image => {
      // let imageAlpha2=image.assets[0].uri;
      // setimageAlpha(imageAlpha2)
      // console.log(imageAlpha2,'imageAlpha2')
      // console.log(imageAlpha,'imageAlpha')
      PESDK.openEditor(image.assets[0].uri).then(
          (result) => {
            console.log(result,'PESDK');
            
            context.images.push({
              id: Math.floor(Math.random() * 100),
              uri: result.image,
              name: `Document`
            });
            context.setImages([...context.images]);
          },
          (error) => {
            console.log(error);
          },
        );
      // console.log(image,'image taken')
      })
    .catch(error => {
      console.log(error,'camera error ');
    });
};


  const sendDoc=()=>{
    if(context.images.length==0){
      alert('First Scan Documents')
      setModalVisible(false)
    }
  else{
    console.log('modal true')
    setModalVisible(true)
  }
}
  const oipenBox = i => {
    setCindex(i);
    setIsVisible(!visible);
  };
  const removeImg = i => {
    context.images.splice(i, 1);
    context.setImages([...context.images]);
  };

  const emptyArray = i => {
    // console.log(value)
    console.log([...context.images]);
    context.images.splice(i);
    context.setImages([...context.images]);
    navigation.navigate('Welcome');
  };

  const changetxt = (t,i) =>{
    context.images[i].name = t;
    context.setImages([...context.images])
  }

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          paddingHorizontal: '8%',
          paddingVertical: '10%',
          paddingBottom: '100%',
          backgroundColor: '#FFF',
        }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View
            style={{
              // flex: 1,

              marginTop: '55%',
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '86%',
              height: '45%',
              position: 'relative',
              shadowColor: '#000',
              backgroundColor: '#FFF',
              borderRadius: 2,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 18,
              // borderWidth: 1,
            }}>
            <View style={{marginTop: '-8%'}}>
              <Image
                source={require('../../assets/images/Group73.png')}
                style={styles.spheral}
              />
              <Image
                source={require('../../assets/images/Group67.png')}
                style={styles.email}
              />
            </View>
            <View style={{marginTop: '65%', alignItems: 'center'}}>
              <Text
                style={{textAlign: 'center', fontSize: 21, color: '#333333'}}>
                Send profile & documents to Mark Ramsay Financial.
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '90%',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '7%',
              }}>
              <View style={{...styles.btnV, marginRight: '0.5%'}}>
                <Pressable onPress={() => setModalVisible(false)}>
                  <Text
                    style={{
                      ...styles.btntext,
                      color: '#ED1C24',
                      fontWeight: '300',
                      fontSize: 18,
                    }}>
                    Discard
                  </Text>
                </Pressable>
              </View>

              {/* <TouchableOpacity> */}
                <View>
                  <LinearGradient
                    colors={['#257ABA', '#145D94', '#003C69']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.btnV}>
                    <Pressable onPress={emptyArray}>
                      <Text style={styles.btntext}>Send</Text>
                    </Pressable>
                  </LinearGradient>
                </View>
              {/* </TouchableOpacity> */}
            </View>
          </View>
        </Modal>

        <View style={{position: 'absolute'}}>
          <Image
            source={require('../../assets/images/Group75.png')}
            style={styles.img}
          />
        </View>
        <View style={{marginVertical: '4%'}}>
          <Text style={{color: '#257ABA', fontSize: 27, fontWeight: '300'}}>
            Documents
          </Text>
        </View>

        {context?.images?.map((v, i) => {
          return (
            <TouchableOpacity style={styles.docV} onPress={() => oipenBox(i)}>
              <TextInput
                value={v.name}
                onChangeText={(text) => changetxt(text,i)}
                style={{color: '#0071BC', textDecorationLine: 'underline'}}>
              </TextInput>
              <TouchableOpacity onPress={() => removeImg()}>
                <Text style={{color: '#ED1C24'}}>Remove</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          );
        })}

        <View
          style={{
            ...styles.docV,
            justifyContent: 'center',
            borderWidth: 1,
            backgroundColor: 'transparent',
            borderColor: '#707070',
            marginTop: '20%',
            padding: '3%',
            position: 'relative',
          }}>
          <TouchableOpacity onPress={()=>{requestCameraPermission()}}>
            <Text style={{color: '#0071BC', fontSize: 19}}>Scan Document</Text>
            <View style={{position: 'absolute', right: 195}}>
              <Icon name="line-scan" size={25} color="#0071BC" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: '25%', marginBottom: '0%'}}>
          <Pressable onPress={()=>sendDoc()}>
            <Button text={'Send'} />
          </Pressable>
        </View>
      </View>

      <ImageView
        images={context.images}
        imageIndex={cIndex}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  docV: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // borderWidth: 1,
    marginTop: '8%',
    padding: '2%',
    backgroundColor: '#F2F2F2',
  },
  img: {
    height: moderateScale(100, 0.1),
    width: moderateScale(100, 0.1),
    position: 'absolute',
    left: moderateScale(291, 0.1),
    bottom: moderateScale(-100, 0.1),
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: '22%'
  },
  spheral: {
    height: moderateScale(145),
    width: moderateScale(335, 0.1),
    position: 'absolute',
    // left: moderateScale(12, 0.1),
    top: moderateScale(27, 0.1),
  },
  email: {
    height: moderateScale(48),
    width: moderateScale(48, 0.1),
    position: 'absolute',
    left: moderateScale(144, 0.1),
    top: moderateScale(142, 0.1),
  },
  btnV: {
    // marginTop: '6%',
    padding: 10,
    paddingHorizontal: '10%',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  btntext: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: '600',
    color: '#FFFFFF',
    fontSize: 17,
  },
});

export default Documents;

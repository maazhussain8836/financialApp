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
} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
// import {launchCamera} from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/Button';
import AppContext from '../../components/AppContext';
import ImageView from 'react-native-image-viewing';
import ImagePicker from 'react-native-image-crop-picker';
import {PESDK} from 'react-native-photoeditorsdk';

const Documents = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [visible, setIsVisible] = useState(false);
  const [cIndex, setCindex] = useState(0);
  // const [value, setValue] = useState('Documents');
  // const [done, setDone] = useState('Done');
  const onPressNext = () => {
    navigation.navigate('Welcome');
  };

  const context = useContext(AppContext);
  // useEffect(() => {
  //   console.log(context.images);
  // }, []);

  const openCamer = () => {
    // launchCamera({
    //   width: 300,
    //   maxHeight:200,
    //   maxWidth:100,
    //   height: 400,
    //   cropping: true,
    //   freeStyleCropEnabled: true,
    //   saveToPhotos: true,
    //   mediaType: 'mixed',
    
    //   includeBase64: true,
    // })
    //   .then(image => {
    //     // setPhotoURI(image.assets[0].uri);
    //     console.log(image.assets[0].uri);
    //     console.log('Saving image');
    //     context.images.push({
    //       id: Math.floor(Math.random() * 100),
    //       uri: image.assets[0].uri,
    //     });
    //     context.setImages([...context.images]);

    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      freeStyleCropEnabled: true,
      cropperActiveWidgetColor: '#424242',
      cropperStatusBarColor: '#424242',
      cropperToolbarColor: '#424242',
    })
      .then(image => {
        let imageAlpha = image.path;
        PESDK.openEditor(imageAlpha).then(
            (result) => {
              console.log(result);
              context.images.push({
                id: Math.floor(Math.random() * 100),
                uri: result.image,
                name: 'Document '
              });
              context.setImages([...context.images]);
            },
            (error) => {
              console.log(error);
            },
          );
      
      })
      .catch(error => {
        console.log(error);
      });
  };

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

              marginTop: '30%',
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '85%',
              height: '42%',

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
            <View style={{marginTop: '-10%'}}>
              <Image
                source={require('../../assets/images/Group73.png')}
                style={styles.spheral}
              />
              <Image
                source={require('../../assets/images/Group67.png')}
                style={styles.email}
              />
            </View>
            <View style={{marginTop: '60%', alignItems: 'center'}}>
              <Text
                style={{textAlign: 'center', fontSize: 23, color: '#333333'}}>
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

              <TouchableOpacity onPress={onPressNext}>
                <View>
                  <LinearGradient
                    colors={['#257ABA', '#145D94', '#003C69']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.btnV}>
                    <Pressable
                      onPress={() => {
                        navigation.navigate('Welcome');
                        emptyArray();
                      }}>
                      <Text style={styles.btntext}>Send</Text>
                    </Pressable>
                  </LinearGradient>
                </View>
              </TouchableOpacity>
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
          <TouchableOpacity onPress={openCamer}>
            <Text style={{color: '#0071BC', fontSize: 19}}>Scan Document</Text>
            <View style={{position: 'absolute', right: 195}}>
              <Icon name="line-scan" size={25} color="#0071BC" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: '25%', marginBottom: '0%'}}>
          <Pressable onPress={() => setModalVisible(true)}>
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
    height: moderateScale(140),
    width: moderateScale(330, 0.1),
    position: 'absolute',
    // left: moderateScale(12, 0.1),
    top: moderateScale(27, 0.1),
  },
  email: {
    height: moderateScale(55),
    width: moderateScale(55, 0.1),
    position: 'absolute',
    left: moderateScale(141, 0.1),
    top: moderateScale(127, 0.1),
  },
  btnV: {
    // marginTop: '6%',
    padding: 12,
    paddingHorizontal: '12%',
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

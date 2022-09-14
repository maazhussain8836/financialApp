import {View, Text, Image, StyleSheet,Modal,Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React ,{ useState } from 'react';
import { moderateScale} from 'react-native-size-matters';
import Button from '../../components/Button';

const ModalComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
    <View
      style={{
        // flex: 1,
        
        marginTop:'30%',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '85%',
        height:'42%',
        
        position: 'relative',
        shadowColor: "#000",
        backgroundColor: "white",
        borderRadius: 2,
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 18
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
          <Text style={{textAlign: 'center', fontSize: 23, color: '#333333'}}>
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
            <Text
              style={{...styles.btntext, color: '#ED1C24', fontWeight: '300',fontSize: 18,}}>
              Discard
            </Text>
          </View>
          <View>
            <LinearGradient
              colors={['#257ABA', '#145D94', '#003C69']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.btnV}>
              <Text style={styles.btntext} >Send</Text>
            </LinearGradient>
          </View>
        
      </View>
    </View>
    </Modal>
    
    <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
   centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
export default ModalComponent;

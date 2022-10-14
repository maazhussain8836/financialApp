import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  Animated,
} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import React, {useRef, useEffect,useContext} from 'react';
import * as Animatable from 'react-native-animatable';
import AppContext from '../../components/AppContext';
const Intro1 = ({navigation}) => {

  const context=useContext(AppContext)

  const onPressGo = () => {
    if(context.userToken==null){
      (navigation.navigate('SignIn'))
    }
    else{
      (navigation.navigate('Welcome'))
    }

  };

  // React native animation.......
  const fadeAnimUp = useRef(new Animated.Value(830)).current;
  const fadeInUp = () => {
    Animated.timing(fadeAnimUp, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  const fadeUpLeft=useRef (new Animated.Value(330)).current;
  const fadeInLeft = () => {
    Animated.timing(fadeUpLeft, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    setTimeout(() => {
      fadeInUp();
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
     
      <Animatable.Image
        
        delay={500}
        animation="slideInUp"
        source={require('../../assets/images/Path49.png')}
        style={{...styles.img}}
      />
      
      
      <Animatable.Image
        delay={500}
        animation="zoomIn"
        source={require('../../assets/images/Group89.png')}
        style={{...styles.spheral}}
      />

      <Pressable onPress={onPressGo}>
        <Animatable.Image
        delay={500}
        animation="slideInLeft"
          source={require('../../assets/images/Group77.png')}
          style={styles.iconGo}
        />
      </Pressable>

      <View style={styles.textV}>
        <Animated.View
          delay={1000}
          animation="slideInUp"
          style={{translateY: fadeAnimUp}}>
          <Image
            source={require('../../assets/images/Rectangle93.png')}
            style={styles.logo}
          />
       
          <Text
            style={{
              ...styles.textT,
              color: '#257ABA',
              fontSize: 25,
              marginTop: '1.2%',
            }}>
            Mark Ramsay Financial Inc PERSONAL TAXES
          </Text>
     
        </Animated.View>
      </View>
            
      {/* <Text>311321</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#FFF',
    position: 'relative',
  },
  spheral: {
    height: moderateScale(580, 0.1),
    width: moderateScale(580, 0.1),
    position: 'absolute',
    right: moderateScale(75, 0.1),
    top: moderateScale(90, 0.1),
  },
  logo: {
    width: '15%',
    height: '68%',
    position: 'absolute',
    top: -50,
    left: 5,
  },
  img: {
    position:'absolute',
    width: '100%',
    height: moderateScale(388, 0.1),
  },
  iconGo: {
    width: '8%',
    height: moderateScale(30, 0.1),
    position: 'absolute',
    // top:50,
    bottom: 30,
    // right:130,
    left: 120,
  },
  textV: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    justifyContent: 'space-around',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingHorizontal: '5%',
    // alignItems:'flex-start',
    paddingVertical: '50%',
    top: 60,
  },
  textT: {
    marginTop: '2.5%',
  },
});

export default Intro1;

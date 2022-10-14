import { View, Text } from 'react-native'
import React, { useState,useEffect } from 'react'
import AppContext from './src/components/AppContext'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Screens
import Taxpayer from './src/screens/taxpayerInfo/Taxpayer'
import BankInfo from './src/screens/bankInfo/BankInfo'
import Documents from './src/screens/documents/Documents'
import ModalComponent from './src/screens/modal/ModalComponent'
import { SafeAreaView } from 'react-native-safe-area-context'
import ChangePass from './src/screens/changePass/ChangePass'
import Dependent from './src/screens/dependent/Dependent'
import ForgotPass from './src/screens/forgotPass/ForgotPass'
import Intro1 from './src/screens/intro/Intro1'
import SignIn from './src/screens/signIn/SignIn'
import SignUp1 from './src/screens/signup/SignUp1'
import Spouse from './src/screens/spouseInfo/Spouse'
import Verification from './src/screens/verification/Verification'
import Welcome from './src/screens/welcome/Welcome'


const App = () => {
  const [images,setImages]=useState([]);
  const [userToken, setuserToken] = useState(null);
  const [imageName,setImageName]=useState('')

  const value={
    userToken: userToken,
    images:images,
    imageName:imageName,
    setImageName,
    setImages,
    setuserToken
  }
  console.log(userToken,' before Sign in')


  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@auth_token');
      if (value !== null) {
        setuserToken(value)
        // console.log(userToken,'get Data')
      }
      else{
        setuserToken(null)
      // console.log(userToken,'get Data error')
      }
    }
     catch (e) { }
  }
  useEffect(() => {
    getData()
  }, [])
  
  
  return (
    <AppContext.Provider value={value}>
    <SafeAreaView style={{flex:1,backgroundColor:'#FFF'}}>
    
    <NavigationContainer >
    <Stack.Navigator screenOptions={{headerShown:false}}>
      {
      userToken==null ?(
        <>
        <Stack.Screen name="Intro1" component={Intro1} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="SignUp1" component={SignUp1} />
</>
      ):(
        <>
        <Stack.Screen name="Intro1" component={Intro1} />
        <Stack.Screen name="Welcome" component={Welcome} />

        </>
      )}
      
      <Stack.Screen name="ChangePass" component={ChangePass} />
      {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
      <Stack.Screen name="Documents" component={Documents} />
      <Stack.Screen name="ForgotPass" component={ForgotPass} />
      <Stack.Screen name="BankInfo" component={BankInfo} />
      <Stack.Screen name="Taxpayer" component={Taxpayer} />
      <Stack.Screen name="Spouse" component={Spouse} />
      <Stack.Screen name="Dependent" component={Dependent} />
      <Stack.Screen name="ModalComponent" component={ModalComponent} />
    </Stack.Navigator>
    </NavigationContainer>

    </SafeAreaView>
    </AppContext.Provider>
  )
}
const Stack = createNativeStackNavigator();
export default App
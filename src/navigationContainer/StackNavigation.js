import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import BankInfo from '../screens/bankInfo/BankInfo';
import SignIn from '../screens/signIn/SignIn'
import SignUp1 from '../screens/signup/SignUp1'
import Spouse from '../screens/spouseInfo/Spouse'
import Taxpayer from '../screens/taxpayerInfo/Taxpayer'
import Dependent from '../screens/dependent/Dependent'
import Verification from '../screens/verification/Verification'
import ForgotPass from '../screens/forgotPass/ForgotPass'
import ChangePass from '../screens/changePass/ChangePass'
import Welcome from '../screens/welcome/Welcome'
import ModalComponent from '../screens/modal/ModalComponent'
import Documents from '../screens/documents/Documents'
import Intro1 from '../screens/intro/Intro1'


const Stack = createNativeStackNavigator();

 const StackNavigation=()=> {
  return (
    <NavigationContainer >
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Intro1" component={Intro1} />
      <Stack.Screen name="ChangePass" component={ChangePass} />
      <Stack.Screen name="Documents" component={Documents} />
      <Stack.Screen name="ForgotPass" component={ForgotPass} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="BankInfo" component={BankInfo} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp1" component={SignUp1} />
      
      <Stack.Screen name="Taxpayer" component={Taxpayer} />
      <Stack.Screen name="Spouse" component={Spouse} />
      <Stack.Screen name="Dependent" component={Dependent} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="ModalComponent" component={ModalComponent} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation
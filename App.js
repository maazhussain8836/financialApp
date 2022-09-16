import { View, Text } from 'react-native'
import React, { useState } from 'react'
import StackNavigation from './src/navigationContainer/StackNavigation'
import Taxpayer from './src/screens/taxpayerInfo/Taxpayer'
import BankInfo from './src/screens/bankInfo/BankInfo'
import Camera from './src/screens/scanner/Camera'
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
import DatePicker from './src/components/DatePicker'
import AppContext from './src/components/AppContext'
import LightBox from './src/components/LightBox'
import CountryPicker from './src/components/CountryPicker'
import ImgCropper from './src/components/ImgCropper'
import Mask from './src/components/Mask'


const App = () => {
  const [images,setImages]=useState([]);

  const value={
    images:images,
    setImages
  }

  return (
    <AppContext.Provider value={value}>
    <SafeAreaView style={{flex:1,backgroundColor:'#FFF'}}>

        <StackNavigation/>
        {/* <ImgCropper/> */}
        {/* <Mask/> */}
        {/* <CamScan/> */}
        {/* <CropView/> */}
        {/* <LightBox/> */}
        {/* <Intro1/> */}
        {/* <Welcome/> */}
        {/* <Spouse/> */}
        {/* <Taxpayer/> */}
        {/* <CountryPicker/> */}
        {/* <DatePicker/> */}
        {/* <Documents/> */}
        {/* <SignIn/> */}
        {/* <SignUp1/> */}
        {/* <Dependent/> */}
        {/* <BankInfo/> */}
        {/* <Verification/> */}

    </SafeAreaView>
    </AppContext.Provider>
  )
}

export default App

// import  React,{useState} from 'react';
// import { View,Text } from 'react-native';
// import { RadioButton } from 'react-native-paper';


// const RadioBtn = ({text1,text2,color}) => {
//   const [checked, setChecked] = useState('');
  

//   const onCheckedYes=()=>{
//     setChecked('first')
//     console.log('yes Pressed')
//   }
//   const onCheckedNo=()=>{
//     setChecked('second')
//     console.log('No Pressed')
//   }
  
//   return (
//     <View style={{display:'flex',alignItems:'center',flexDirection:'row',justifyContent:'flex-start'}}>
        
//       <RadioButton
//         color='#0071BC'
//         value="first"
//         status={ checked === 'first'  ? 'checked' : 'unchecked' }
//         onPress={(abc)=>{onCheckedYes(abc)}}

        
//       />
//       <Text style={{marginRight:'10%',color:color}}>{text1}</Text>

//       <RadioButton
//         color='#0071BC'
//         value="second"
//         status={ checked === 'second' ? 'checked' : 'unchecked' }
//         onPress={onCheckedNo}
//       />
//       <Text style={{color:color }}>{text2}</Text>

//     </View>
//   );
// };

// export default RadioBtn;
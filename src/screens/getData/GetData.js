// import { View, Text, StyleSheet,FlatList } from 'react-native'
// import React from 'react'
// import { Dropdown } from 'react-native-element-dropdown';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import { useState } from 'react';
// // import axiosconfig from '../../provider/axios';
// import { useEffect } from 'react';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// const axios=require('axios').default
// const baseURL='https://jsonplaceholder.typicode.com/comments'

// const data = [
//   { label: 'Email', value: '1' },
//   { label: 'Name', value: '2' },
//   { label: 'Id', value: '3' },

// ];

// const GetData = () => {
//   // useEffect(() => {
//   //   console.log(value, "valueee");
//   // }, [])
//   const [value, setValue] = useState(null);
//   const [isFocus, setIsFocus] = useState(false);
//   const [email,setEmail]=useState([])
//   const foundData = async () => {
//     // const values = await AsyncStorage.getItem('@auth_token');
//     axios.get(baseURL)
//     .then(res => {
//     // console.log(res.data)
//       let arr=[];
//     res.data.map((res)=>{
//       // console.log(res)
//      arr.push(res);
//       // console.log(res.email)
//     })
    
//     setEmail(arr)
//     console.log(email)
//     }).catch(err => {
//       console.log(err)
//     })
//   }

//   useEffect(() => {
//     foundData()
//   }, [])

//   return (
//     <View style={styles.container}>

//       <Dropdown
//         style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
//         placeholderStyle={styles.placeholderStyle}
//         selectedTextStyle={styles.selectedTextStyle}
//         inputSearchStyle={styles.inputSearchStyle}
//         iconStyle={styles.iconStyle}
//         data={data}
//         search
//         maxHeight={300}
//         labelField="label"
//         valueField="value"
//         placeholder={!isFocus ? 'Select Your Details' : '...'}
//         searchPlaceholder="Search..."
//         value={value}
//         onFocus={() => setIsFocus(true)}
//         onBlur={() => setIsFocus(false)}
//         onChange={item => {
//           setValue(item.value);
//           setIsFocus(false);
//         }}
//         renderLeftIcon={() => (
//           <AntDesign
//             style={styles.icon}
//             color={isFocus ? 'blue' : 'black'}
//             name="Safety"
//             size={20}
//           />
//         )}
//       />
//       <View>
//         <Text> {value == "1" ?  "Email" :  value == "2" ? "Name" : value== "3" ? "ID" : null}</Text>
        
//       </View>
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//     padding: 16,
//   },
//   dropdown: {
//     height: 50,
//     borderColor: 'gray',
//     borderWidth: 0.5,
//     borderRadius: 8,
//     paddingHorizontal: 8,
//   },
//   icon: {
//     marginRight: 5,
//   },
//   label: {
//     position: 'absolute',
//     backgroundColor: 'white',
//     left: 22,
//     top: 8,
//     zIndex: 999,
//     paddingHorizontal: 8,
//     fontSize: 14,
//   },
//   placeholderStyle: {
//     fontSize: 16,
//   },
//   selectedTextStyle: {
//     fontSize: 16,
//   },
//   iconStyle: {
//     width: 20,
//     height: 20,
//   },
//   inputSearchStyle: {
//     height: 40,
//     fontSize: 16,
//   },
// });
// export default GetData
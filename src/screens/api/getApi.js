import {View, Text} from 'react-native';
import React from 'react';
const axios = require('axios').default;
const baseURL =
  'https://designprosusa.com/financial_app/api/login';

const getApi = () => {
    axios.post(baseURL,{
        email:'fredaston49@gmail.com',
        password:'12345678',
        type:'user'
    }).then((res)=>{
        console.log(res)
    })

  return (
    <View>
      <Text>getApi</Text>
    </View>
  );
};

export default getApi;

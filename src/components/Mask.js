import MaskInput, { Masks } from 'react-native-mask-input';
import React, { useState } from 'react'
export default function Mask() {
  const [phone, setPhone] = useState('');

  return (
    <MaskInput
      value={phone}
      
      onChangeText={(masked, unmasked) => {
        setPhone(masked); // you can use the unmasked value as well

        // assuming you typed "9" all the way:
        console.log(masked); // (99) 99999-9999
        console.log(unmasked); // 99999999999
      }}
      mask={Masks.USA_PHONE}
    />
  );
}
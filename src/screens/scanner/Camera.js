
import React, {useState, useCallback} from 'react';
import { Button, Image, View} from 'react-native';
import {launchCamera,launchImageLibrary} from 'react-native-image-picker';


const Camera = () => {
  const [photo, setPhotoURI] = useState(null);

  const openCamer = c => {
        
    if (c == 'g') {
        launchImageLibrary({
          width: 300,
          height: 400,
          cropping: true,
          freeStyleCropEnabled: true,
          saveToPhotos: true
        })
          .then(image => {
            setPhotoURI(image.assets[0].uri);
  
            // imageUpload(image);
          })
          .catch(error => {
            console.log(error)
          });
      }

    else if (c == 'c')
     {
        launchCamera({
          width: 300,
          height: 400,
          cropping: true,
          freeStyleCropEnabled: true,
          saveToPhotos: true
        })
          .then(image => {
  
            setPhotoURI(image.assets[0].uri);
            // imageUpload(image);
          })
          .catch(error => {
            console.log(error)
          });
      }
    // refRBSheet.current.close();
};


 return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    {photo && (
      <Image
        source={{ uri: photo }}
        style={ { width: 300, height: 300,marginBottom:30 } }
      />
    )}
  <Button title="launch camera" onPress={() => openCamer('c')}/>
  <Button title="launch gallery" onPress={() => openCamer('g')} />
</View>
 ); 
};


export default Camera;
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Alert } from 'react-native';

export const useGallery = () => {
  
    const [images, setImages] = useState([]);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        }); //갤러리를 여는 함수 
    
        console.log(result);
    
        if (!result.canceled) {
            const lastId = images.length === 0 ? 0 : images[images.length - 1].id;
            const newImage = {
                id: lastId + 1, 
                uri: result.assets[0].uri,
            };
          
            setImages([...images, newImage ]);
        }
      };

      const deleteImage = (imageId) => {
        Alert.alert("이미지를 삭제하시겠어요?", "", [
            {
                style:"cancel",
                text:"아니요"
            },
            {
                text:"네",
                onPress: () => {
                    const newImages = images.filter((image) => image.id !== imageId);
                    setImages(newImages);
                },
            },
        ]);
      };
    
      const imagesWidthAddButton = [
        ...images,
        {
            id: -1,
            uri:"",
        }
      ]//flatList에 한 공간을 차지하기 위한 허수


    return {
        images,
        imagesWidthAddButton,
        pickImage,
        deleteImage,
    }
    
    


}
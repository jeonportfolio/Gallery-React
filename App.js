
import {  Dimensions, FlatList, Image, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useGallery } from './src/use-gallery';

const width = Dimensions.get('screen').width; //기기의 너비를 알아보는 Dimension
const columnSize = width / 3;

export default function App() {

  const { imagesWidthAddButton, images, pickImage, deleteImage} = useGallery();

  const onPressOpenGallery = () => {
    pickImage();
  };
  const onLongPressImage = (imageId) =>  deleteImage(imageId);

  const renderItem = ({ item: {id, uri}}) => {
    
    if( id === -1) {
           return (
             <TouchableOpacity 
              onPress={onPressOpenGallery}
              style={{
                width: columnSize, 
                height: columnSize, 
                backgroundColor:"lightgrey",
                justifyContent:"center",
                alignItems:"center",
              }}>
                  <Text style={{fontWeight:"100", fontSize:45}}>+</Text>
             </TouchableOpacity>
           )
    }
    return (
      <TouchableOpacity onLongPress={() => onLongPressImage(id) }>
          <Image 
            source={{uri}} 
            style= { {width: columnSize, height: columnSize} } 
          />
      </TouchableOpacity>
    );
  }

        

  return (
    <SafeAreaView style={styles.container}>
        

        <FlatList
            data={imagesWidthAddButton}
            renderItem={renderItem}
            numColumns={3}
        />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Platform.OS === 'android' ? 30:0,// 안드로이드에는 SafeAreaView가 안먹히므로 marginTop을 준다.
  },
});



import {  Dimensions, FlatList, Image, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useGallery } from './src/use-gallery';
import MyDropDownPicker from './src/MyDropDownPicker';
import TextInputModal from './src/TextInputModal';

const width = Dimensions.get('screen').width; //기기의 너비를 알아보는 Dimension
const columnSize = width / 3;

export default function App() {

  const { 
      imagesWidthAddButton, 
      pickImage,
      deleteImage,
      selectedAlbum,
      modalVisble,
      openModal,
      closeModal,
      albumTitle,
      setAlbumTitle,
  } = useGallery();

  const onPressOpenGallery = () => {
    pickImage();
  };
  const onLongPressImage = (imageId) =>  deleteImage(imageId);
  const onPressAddAlbum = () => {
    openModal();
  };

  const onSubmitEditing = () => {
    //1.앨범에 타이틀 추가 
    //2.textInput에 value 초기화 & 모달 닫기
    
  }

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

        {/* 앨범 dropdown, 앨범 추가 버튼  */}
        <MyDropDownPicker selectedAlbumTitle = {selectedAlbum.title} onPressAddAlbum={onPressAddAlbum}/>
        
        {/* 앨범 추가 textInput */}
        <TextInputModal
            modalVisble = {modalVisble}
            albumTitle = {albumTitle}
            setAlbumTitle = {setAlbumTitle}
            onSubmitEditing = {onSubmitEditing}
        />

        {/* 이미지 리스트 */}
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


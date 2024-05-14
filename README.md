## expo image picker 사용 
 -> `npx expo install expo-image-picker` 설치 
 -> 사용자의 갤러리의 접근이 가능 

 ## 이미지의 추가 삭제 
-> 추가시 3개의 이미지로 1줄 배열 (Dimension을 사용해 사용자의 기기 너비 확인)

-> 삭제시 이미지의 고유한 키값을 설정 (deleteImage 메소드 활용 image id와 다르면 필터링)

-> 허수의 이미지를 만들어서 클릭시 이미지 추가

## DropDownPicker
MyDropDownPicker.js를 사용하여 라이브러리말고 직접 만들기

## 상단 앨범 추가 네비게이션 
-> textInputModal.js 사용 (창을 띄어주는 expo 컴포넌트)
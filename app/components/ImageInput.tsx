import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

function ImageInput({ imageUri, onChangeImage }: any) {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert("You need to enable permission to access the library.");
    }
  };
  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ImageInput;

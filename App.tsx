// import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Button, StyleSheet, Image } from "react-native";
import Screen from "./app/components/Screen";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import ListingEditingScreen from "./app/screen/ListingEditingScreen";
import ImageInput from "./app/components/ImageInput";

export default function App() {
  const [imageUri, setImageUri] = React.useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert("You need to enable permission to access the library.");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result: any = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  console.log(imageUri);
  return (
    <Screen>
      <ImageInput />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
    height: 30,
    backgroundColor: "red",
  },
});

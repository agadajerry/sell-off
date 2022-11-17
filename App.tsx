// import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Screen from "./app/components/Screen";
import ImageInputList from "./app/components/ImageInputList";
import ListingEditingScreen from "./app/screen/ListingEditingScreen";

export default function App() {
  const [imageUris, setImageUris] = React.useState<any[]>([]);

  const handleAddImage = (uri: any) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemoveImage = (uri: any) => {
    setImageUris(imageUris.filter((imageUri: any) => imageUri !== uri));
  };
  return <ListingEditingScreen />;
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
    height: 30,
    backgroundColor: "red",
  },
});

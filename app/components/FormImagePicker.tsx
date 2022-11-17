import { useFormikContext } from "formik";
import React from "react";
import { View, StyleSheet } from "react-native";
import ErrorMessage from "../forms/ErrorMessage";
import ImageInputList from "./ImageInputList";

function FormImagePicker({ name }: any) {
  const { setFieldValue, values, errors, touched } = useFormikContext<any>();
  const imageUris = values[name];

  const handleAddImage = (uri: any) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemoveImage = (uri: any) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri: any) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAddImage}
        onRemoveImage={handleRemoveImage}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default FormImagePicker;

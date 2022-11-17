import React from "react";
import { useFormikContext } from "formik";
import AppTextInput from "../components/AppTextInput";
import ErrorMessage from "./ErrorMessage";

interface IAppFormField {
  name?: any;
  icon?: any;
  placeholder?: string;
  autoCapitalize?: any;
  autoCorrect?: boolean;
  keyboardType?: any;
  textContentType?: any;
  secureTextEntry?: boolean;
  onChangeText?: any;
  onBlur?: any;
  maxLength?: number;
  multiline?: boolean;
  numberOfLines?: number;
  width?: number;
}

function AppFormField({ name, width, ...otherProps }: IAppFormField) {
  const { setFieldTouched, handleChange, errors, touched } =
    useFormikContext<any>();

  return (
    <>
      <AppTextInput
        {...otherProps}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;

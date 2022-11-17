import { useFormikContext } from "formik";
import React from "react";
import ErrorMessage from "../forms/ErrorMessage";
import AppPicker from "./AppPicker";

interface IPickerField {
  name: string;
  items?: any;
  placeholder: string;
  otherProps?: any;
  onSelectItem?: any;
  selectedItem?: any;
  width?: string;
  PickerItemComponent?: any;
  numberOfColumns?: number;
}
function AppFormPicker({
  items,
  name,
  placeholder,
  onSelectItem: any,
  width = "100%",
  PickerItemComponent,
  numberOfColumns,
  ...otherProps
}: IPickerField) {
  const { setFieldValue, values, errors, touched } = useFormikContext<any>();
  return (
    <>
      <AppPicker
        numberOfColumns={numberOfColumns}
        items={items}
        name={name}
        placeholder={placeholder}
        onSelectItem={(item: any) => setFieldValue(name, item)}
        selectedItem={values[name]}
        PickerItemComponent={PickerItemComponent}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;

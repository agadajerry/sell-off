import { useFormikContext } from "formik";
import React from "react";
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
}
function AppFormPicker({
  items,
  name,
  placeholder,
  onSelectItem: any,
  width = "100%",
  PickerItemComponent,
  ...otherProps
}: IPickerField) {
  const { setFieldValue, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        name={name}
        placeholder={placeholder}
        onSelectItem={(item: any) => setFieldValue(name, item)}
        selectedItem={values[name]}
        PickerItemComponent={PickerItemComponent}
        width={width}
        {...otherProps}
      />
    </>
  );
}

export default AppFormPicker;

import { Formik, validateYupSchema } from "formik";
import React from "react";
import { StyleSheet } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";
import AppFormField from "../forms/AppFormField";
import AppPicker from "../components/AppPicker";
import { AppButton } from "../components/AppButton";
import ErrorMessage from "../forms/ErrorMessage";
import AppFormPicker from "../components/AppFormPicker";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});
const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Cameras", value: 3, backgroundColor: "blue", icon: "lock" },
];
function ListingEditingScreen() {
  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ errors, touched, setFieldValue, values }) => (
          <>
            <AppFormField name="title" placeholder="Title" maxLength={255} />
            <ErrorMessage error={errors.title} visible={touched.title} />
            <AppFormField
              name="price"
              placeholder="Price"
              maxLength={8}
              keyboardType="numeric"
              width={130}
            />
            <ErrorMessage error={errors.price} visible={touched.price} />
            <AppFormPicker
              name="category"
              placeholder="Category"
              items={categories}
              onSelectItem={(item: any) => setFieldValue("category", item)}
              selectedItem={values.category}
              width="50%"
              PickerItemComponent={CategoryPickerItem}
            />

            <ErrorMessage error={errors.category} visible={touched.category} />
            <AppFormField
              name="description"
              placeholder="Description"
              maxLength={255}
              multiline={true}
              numberOfLines={3}
            />
            <ErrorMessage
              error={errors.description}
              visible={touched.description}
            />
            <AppButton title="Post" />
          </>
        )}
      </Formik>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default ListingEditingScreen;

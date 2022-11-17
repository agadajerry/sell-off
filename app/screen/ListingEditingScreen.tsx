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
import ImageInput from "../components/ImageInput";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});
const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "#fc5565",
    icon: "floor-lamp",
  },
  {
    label: "Clothing",
    value: 2,
    backgroundColor: "#fd9644",
    icon: "shoe-heel",
  },
  {
    label: "Camera",
    value: 3,
    backgroundColor: "#fed330",
    icon: "camera",
  },
  {
    label: "Games",
    value: 4,
    backgroundColor: "#26de81",
    icon: "cards",
  },
  {
    label: "Sports",
    value: 5,
    backgroundColor: "#2bcbba",
    icon: "basketball",
  },
  {
    label: "Movies & Music",
    value: 6,
    backgroundColor: "#45aaf2",
    icon: "headphones",
  },
  {
    label: "Books",
    value: 7,
    backgroundColor: "#4b7bec",
    icon: "book-open-variant",
  },
  {
    label: "Other",
    value: 8,
    backgroundColor: "#a55eea",
    icon: "application",
  },
  {
    label: "Cars",
    value: 9,
    backgroundColor: "#778ca3",
    icon: "car",
  },
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
              numberOfColumns={3}
              PickerItemComponent={CategoryPickerItem}
              name="category"
              placeholder="Category"
              items={categories}
              onSelectItem={(item: any) => setFieldValue("category", item)}
              selectedItem={values.category}
              width="50%"
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

import React from "react";
import Screen from "../components/Screen";
import { Formik } from "formik";
import * as Yup from "yup";
import { Image, StyleSheet } from "react-native";
import AppFormField from "../forms/AppFormField";
import ErrorMessage from "../forms/ErrorMessage";
import { AppButton } from "../components/AppButton";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(4).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
function RegisterScreen() {
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, errors, touched }) => (
          <>
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="account"
              name="name"
              keyboardType="default"
              placeholder="Name"
              textContentType="name"
            />
            <ErrorMessage error={errors.name} visible={touched.name} />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              name="email"
              keyboardType="email-address"
              placeholder="Email"
              textContentType="emailAddress"
            />
            <ErrorMessage error={errors.email} visible={touched.email} />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              keyboardType="default"
              placeholder="Password"
              textContentType="password"
              secureTextEntry={true}
            />
            <ErrorMessage error={errors.password} visible={touched.password} />
            <AppButton title="Register" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default RegisterScreen;

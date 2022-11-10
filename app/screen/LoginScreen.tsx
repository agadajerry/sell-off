import React from "react";
import { Image, StyleSheet } from "react-native";
import { AppButton } from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import { Formik } from "formik";
import * as Yup from "yup";
import { AppText } from "../components/AppText";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Formik
        initialValues={{ password: "", email: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
          setFieldTouched,
          touched,
        }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              placeholder="Email"
              textContentType="emailAddress"
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
            />
            <ErrorMessage error={errors.email} visible={touched.email} />

            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              keyboardType="default"
              placeholder="Password"
              textContentType="password"
              secureTextEntry={true}
              onChangeText={handleChange("password")}
              onBlur={() => setFieldTouched("password")}
            />
            <ErrorMessage error={errors.password} visible={touched.password} />

            <AppButton title={"Login"} onPress={handleSubmit} />
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
export default LoginScreen;

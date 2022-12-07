import React, { useState } from "react";
import Screen from "../components/Screen";
import { Formik } from "formik";
import * as Yup from "yup";
import { Image, StyleSheet } from "react-native";
import AppFormField from "../forms/AppFormField";
import ErrorMessage from "../forms/ErrorMessage";
import { AppButton } from "../components/AppButton";
import colors from "../config/color";
import registerUser, { IUser } from "../api/users";
import { loginUser } from "../api/auth";
import useAuth from "../auth/useAuth";
import { useApi } from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";
import SubmitButton from "../forms/SubmitButton";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(4).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
function RegisterScreen() {
  const [error, setError] = useState("");
  const auth = useAuth();
  const registerApi = useApi(registerUser);
  const loginApi = useApi(loginUser);

  const handleSubmit = async (values: any) => {
    const result: any = await registerApi.request(values);
    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred.");
        console.log(result);
      }
      return;
    }

    const { data }: any = await loginApi.request(values.email, values.password);

    auth.login(data);
  };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <ErrorMessage error={error} visible={error} />
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {() => (
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
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                name="email"
                keyboardType="email-address"
                placeholder="Email"
                textContentType="emailAddress"
              />
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
              <SubmitButton title="Register" color={colors.secondary} />
            </>
          )}
        </Formik>
      </Screen>
    </>
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
    marginTop: 10,
    marginBottom: 20,
  },
});

export default RegisterScreen;

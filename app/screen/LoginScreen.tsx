import React, { useContext } from "react";
import { Image, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import { Formik } from "formik";
import * as Yup from "yup";
import AppFormField from "../forms/AppFormField";
import SubmitButton from "../forms/SubmitButton";
import colors from "../config/color";
import { loginUser } from "../api/auth";
import ErrorMessage from "../forms/ErrorMessage";
import jwtDecode from "jwt-decode";
import AuthContext from "../auth/context";
import storage from "../auth/storage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  const { user, setUser } = useContext(AuthContext);

  const [loginFailed, setLoginFailed] = React.useState(false);
  const handleSubmit = async ({ email, password }: any) => {
    const result: any = await loginUser(email, password);
    if (!result.ok) {
      return setLoginFailed(true);
    }
    setLoginFailed(false);
    const userDetails = jwtDecode(result.data);
    setUser(userDetails);
    storage.storeToken(result.data);
  };
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Formik
        initialValues={{ password: "", email: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <>
            <ErrorMessage
              error="Invalid email and/or password"
              visible={loginFailed}
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

            <SubmitButton title={"Login"} color={colors.primary} />
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
    marginTop: 30,
    marginBottom: 20,
  },
});
export default LoginScreen;

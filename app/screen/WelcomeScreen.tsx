import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { AppButton } from "../components/AppButton";
import colors from "../config/color";
function WelcomeScreen({ navigation }: any) {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagLine}>Sell what you don't need</Text>
      </View>
      <View style={styles.btnContainer}>
        <AppButton
          title="Login"
          onPress={() => navigation.navigate("Login")}
          color={colors.primary}
        />
        <AppButton
          title="Register"
          onPress={() => navigation.navigate("Register")}
          color={colors.secondary}
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagLine: {
    paddingVertical: 10,
    fontSize: 25,
    fontWeight: "600",
  },
  logoContainer: {
    position: "absolute",
    top: 40,
    alignItems: "center",
  },

  btnContainer: {
    width: "100%",
    padding: 10,
  },
});

export default WelcomeScreen;

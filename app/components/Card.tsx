import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../config/color";
import { AppText } from "./AppText";
interface ICard {
  title: string;
  subTitle: string;
  imageUrl: any;
}
function Card({ title, subTitle, imageUrl }: ICard) {
  return (
    <View style={styles.card}>
      <Image source={imageUrl} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },

  detailsContainer: {
    paddingTop: 20,
  },

  title: {
    marginBottom: 7,
    fontSize: 18,
  },
  subtitle: {
    marginBottom: 7,
    fontSize: 18,
    color: colors.secondary,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 200,
  },
});
export default Card;

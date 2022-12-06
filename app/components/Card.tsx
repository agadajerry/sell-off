import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import colors from "../config/color";
import { Image } from "react-native-expo-image-cache";

interface ICard {
  title: string;
  subTitle: string;
  imageUrl: any;
  thumbnailUrl: any;
  onPress?: () => void;
}
function Card({ title, subTitle, imageUrl, onPress, thumbnailUrl }: ICard) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          uri={imageUrl}
          preview={{ uri: thumbnailUrl }}
          tint="light"
          style={styles.image}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subTitle}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
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

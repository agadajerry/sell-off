import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { AppText } from "./AppText";
import colors from "../config/color";
import ListItems from "./ListItems";
import ListItemDeletionAction from "./ListItemDeletionAction";

function ListingDetailsScreen() {
  return (
    <View>
      <Image source={require("../assets/jacket.jpg")} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItems
            image={require("../assets/jerry.jpeg")}
            title={"Idoko Jerry"}
            subTitle={"4 Listings"}
            onPress={() => console.log("hi")}
            renderRightAction={() => (
              <ListItemDeletionAction onPress={() => alert("delete")} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontweight: "bold",
  },
  price: {
    fontsize: 20,
    color: colors.secondary,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 30,
  },
});
export default ListingDetailsScreen;

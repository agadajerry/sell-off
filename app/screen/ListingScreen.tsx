import React, { useEffect } from "react";
import { Button, FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/color";
import routes from "../navigation/routes";
import listingApi from "../api/Listings";
import { AppText } from "../components/AppText";
import ActivityIndicator from "../components/ActivityIndicator";
import { useApi } from "../hooks/useApi";

function ListingScreen({ navigation }: any) {
  const {
    data: listings,
    loading,
    error,
    request: loadListings,
  }: any = useApi(listingApi.getListings); //not calling the function but passing the function as a parameter

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings</AppText>
          <Button title="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            thumbnailUrl={item.images[0].thumbnailUrl}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
export default ListingScreen;

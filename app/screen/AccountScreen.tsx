import React, { useContext } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import Icon from "../components/Icon";
import ListItems from "../components/ListItems";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/color";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];
function AccountScreen({ navigation }: any) {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    setUser(null);
    authStorage.removeToken();
  };
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItems
          title={user.name}
          subTitle={user.email}
          image={require("../assets/jerry.jpeg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItems
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <ListItems
        title="Log out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={handleLogout}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;

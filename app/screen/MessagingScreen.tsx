import React from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  Alert,
} from "react-native";
import ListItemDeletionAction from "../components/ListItemDeletionAction";
import ListItems from "../components/ListItems";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

function MessagingScreen() {
  const [refresh, setRefresh] = React.useState<boolean>(false);
  const [messages, setMessages] = React.useState([
    {
      id: 1,
      title: "title1",
      description: "description1",
      image: require("../assets/jerry.jpeg"),
    },
    {
      id: 2,
      title: "title2",
      description: "description2",
      image: require("../assets/couch.jpg"),
    },
    {
      id: 3,
      title: "title3",
      description: "description3",
      image: require("../assets/jacket.jpg"),
    },
  ]);

  const handleDelete = (id: number) => {
    return setMessages(messages.filter((message) => message.id !== id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(val: any) => val.id.toString()}
        renderItem={({ item }) => (
          <ListItems
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("")}
            renderRightAction={() => (
              <ListItemDeletionAction onPress={() => handleDelete(item.id)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refresh}
        onRefresh={() => {
          setMessages([
            {
              id: 3,
              title: "title3",
              description: "description3",
              image: require("../assets/jacket.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  itemSeparator: {
    width: "100%",
    height: 1,
    backgroundColor: "#000",
    marginBottom: 5,
  },
});

export default MessagingScreen;

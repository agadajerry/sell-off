import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "./Screen";
import colors from "../config/color";
import defaultStyle from "../config/styles";
import { AppText } from "./AppText";
import ListItemSeparator from "./ListItemSeparator";
import PickerItems from "./PickerItems";

interface IInputText {
  icon?: any;
  placeholder?: string;
  items?: any;
  onSelectItem?: any;
  selectedItem?: any;
}

const iconName: any = "chevron-down";
function AppPicker({
  icon,
  placeholder,
  items,
  selectedItem,
  onSelectItem,
}: IInputText) {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name={iconName}
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItems
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
            ItemSeparatorComponent={ListItemSeparator}
          />
        </Screen>
      </Modal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    width: "100%",
    padding: 15,
    verticalMargin: 10,
    borderRadius: 25,
    flexDirection: "row",
  },
  icon: {
    marginRight: 10,
    marginVertical: 5,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;

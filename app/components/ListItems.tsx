import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { AppText } from "./AppText";
import colors from "../config/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface IListItem {
  image?: any;
  title: string;
  subTitle?: string;
  onPress?: (event: any) => void;
  renderRightAction?: any;
  IconComponent?: any;
}
function ListItems({
  image,
  title,
  subTitle,
  onPress,
  renderRightAction,
  IconComponent,
}: IListItem) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightAction}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image source={image} style={styles.image} />}
            <View style={styles.itemLister}>
              <AppText style={styles.title} numberOfLines={1}>
                {title}{" "}
              </AppText>
              {subTitle && (
                <AppText style={styles.subTitle} numberOfLines={2}>
                  {subTitle}
                </AppText>
              )}
            </View>
            <MaterialCommunityIcons
              name={"chevron-right"}
              size={25}
              color={colors.medium}
            />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 100 / 2,
    marginRight: 5,
  },
  itemLister: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
    fontSize: 14,
  },
});

export default ListItems;

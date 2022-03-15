import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  SimpleLineIcons,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";
import { globalStyles } from "../../styles/global";

export default function IconsBar({ rating, duration, cost }) {
  return (
    <View style={styles.iconsWrapper}>
      <AntDesign name="star" size={16} color="#FECF72" />
      <Text style={globalStyles.ratingText}>{rating}</Text>
      <MaterialCommunityIcons name="clock-time-two" size={16} color="#A3B3C5" />
      <Text style={globalStyles.durationText}>{duration}</Text>
      <MaterialCommunityIcons
        name="cash-usd-outline"
        size={20}
        color="#52AA6B"
      />
      <Text style={globalStyles.costText}>${cost}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  iconsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
});

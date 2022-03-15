import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { globalStyles } from "../../styles/global";

export default function RatingBar({ rating, width, handlePress }) {
  
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={[globalStyles.greyText, { width: 9 }]}>{rating}</Text>
        <View style={styles.greyProgressbar} />
        <View style={[styles.orangeProgressbar, { width: width }]} />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  greyProgressbar: {
    width: "100%",
    backgroundColor: "#A3B3C5",
    height: 5,
    borderRadius: 50,
    marginLeft: 7,
  },
  orangeProgressbar: {
    backgroundColor: "#FFA62B",
    height: 5,
    borderRadius: 50,
    marginLeft: 7,
    position: "absolute",
    left: 9,
  },
});

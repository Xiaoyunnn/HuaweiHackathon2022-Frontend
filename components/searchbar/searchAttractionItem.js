import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/global";

export default function SearchAttractionItem({item, handleSelect}) {
  return (
    <TouchableWithoutFeedback onPress={handleSelect}>
      <View style={styles.searchItem}>
        <Text style={globalStyles.greyText}>{item}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  searchItem: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomColor: "#A3B3C5",
    borderBottomWidth: 0.5,
  },
})
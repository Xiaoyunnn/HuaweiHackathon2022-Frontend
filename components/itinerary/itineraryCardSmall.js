import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function ItineraryCardSmall() {
  return (
    <View style={styles.ItineraryCardSmallContainer}>
      <Image/>
      <Text>Malaysia Cameron Highlands</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ItineraryCardSmallContainer: {
    marginBottom: 10,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    maxWidth: "48%"
  },
});

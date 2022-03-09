import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function ItineraryCard() {
  return (
    <View style={styles.itineraryContainer}>
      <View style={styles.itineraryTitleContainer}>
        <Text style={styles.itineraryTitle} >itineraryCard</Text>
        <Text>View</Text>
      </View>
      <Image />
    </View>
  );
}

const styles = StyleSheet.create({
  itineraryContainer: {
    // paddingVertical: 10,
    // paddingHorizontal: 20,
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
  },
  itineraryTitleContainer : {
    borderRadius: "12 0 0 12",
},
  itineraryTitle : {
      fontWeight: "bold",
      paddingHorizontal: 20,
      paddingVertical: 10,
      color: "#FFA62B",
  },
  itineraryView: {
    color: "#A3B3C5",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: "flex-end",
  }
});

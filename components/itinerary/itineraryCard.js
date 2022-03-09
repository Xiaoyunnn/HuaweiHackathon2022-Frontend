import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-web";

export default function ItineraryCard() {
  return (
      <View style={styles.itineraryContainer}>
        <View style={styles.itineraryTitleContainer}>
          <Text style={styles.itineraryTitle}>Family Trip June</Text>
          <TouchableWithoutFeedback onPress={() => console.log("family trip")}>
            <Text style={styles.itineraryView}>View</Text>
            </TouchableWithoutFeedback>
        </View>
        <Image source={require("../../gbb.jpeg")} style={styles.itineraryImage} />
      </View>
  );
}

const styles = StyleSheet.create({
  itineraryContainer: {
    marginBottom: 12,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itineraryTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  itineraryTitle: {
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "#FFA62B",
    fontSize: 16
  },
  itineraryView: {
    color: "#A3B3C5",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  itineraryImage: {
    height: 160,
    width: "100%",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    resizeMode: "cover",
  },
});

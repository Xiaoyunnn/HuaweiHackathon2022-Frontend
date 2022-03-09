import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-web";

export default function CreateItineraryBtn() {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Ionicons name="ios-paper-plane-outline" size={24} color="#fff" />
      <Text style={styles.postText}>Itinerary</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: "50%",
    backgroundColor: "#FEAF42",
    width: 68,
    height: 68,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    position: "absolute",
    top: 75,
    right: 10,
    zIndex: 2
  },
  postText: {
    color: "#fff",
    fontSize: 10,
    marginTop: 2,
  },
});

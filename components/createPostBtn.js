import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-web";

export default function CreatePostBtn() {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Ionicons name="images" size={24} color="#F0940A" />
      <Text style={styles.postText}>Post</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: "50%",
    backgroundColor: "#FBF1F1",
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
    right: 10,
    top: 150,
    zIndex: 2
  },
  postText: {
    color: "#F0940A",
    fontSize: 10,
    marginTop: 2,
  },
});

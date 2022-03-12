import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";

export default function BottomBtn({handlePress, action}) {
  return (
    <TouchableOpacity
      style={[globalStyles.btnContainerSq, styles.bottomBtnContainer]}
      onPress={handlePress}
    >
      <Text style={globalStyles.btnText}>{action}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  bottomBtnContainer: {
    // position: "absolute",
    bottom: 15,
    alignSelf: "center"
  }
})
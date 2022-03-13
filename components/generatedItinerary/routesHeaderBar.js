import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function RoutesHeaderBar({active, setActive}) {

  return (
    <View style={styles.headerBarContainer}>
      <TouchableOpacity
        style={active == 1 && styles.routeTitleActiveWrapper}
        onPress={() => setActive(1)}
      >
        <Text style={active == 1 ? styles.routeTitleActive : styles.routeTitle}>
          Route 1
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={active == 2 && styles.routeTitleActiveWrapper}
        onPress={() => setActive(2)}
      >
        <Text style={active == 2 ? styles.routeTitleActive : styles.routeTitle}>
          Route 2
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={active == 3 && styles.routeTitleActiveWrapper}
        onPress={() => setActive(3)}
      >
        <Text style={active == 3 ? styles.routeTitleActive : styles.routeTitle}>
          Route 3
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBarContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FBF1F1",
    borderRadius: 12,
    width: 246,
    alignSelf: "center",
  },
  routeTitleActiveWrapper: {
    backgroundColor: "#FFBD59",
    borderRadius: 11,
  },
  routeTitle: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FF9900",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  routeTitleActive: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 13,
  },
});

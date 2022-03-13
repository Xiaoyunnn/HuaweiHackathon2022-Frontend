import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/global";
import { Entypo } from "@expo/vector-icons";

export default function SelectedItem({item, handleRemove}) {
  return (
    <TouchableOpacity onPress={handleRemove}>
      <View style={styles.searchItemWrapper}>
        <Text style={{color: "#FF9900"}}>{item.attractionName}</Text>
        <Entypo
          name="cross"
          size={18}
          color="#FF9900"
          style={styles.removeIcon}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  searchItemWrapper: {
    borderWidth: 0.5,
    borderColor: "#FF9900",
    paddingVertical: 5,
    paddingLeft: 10,
    paddingRight: 5,
    borderRadius: 30,
    marginRight: 5,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  removeIcon: {
    marginLeft: 5,
  },
});
